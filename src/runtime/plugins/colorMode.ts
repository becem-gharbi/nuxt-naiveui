import {
  defineNuxtPlugin,
  useCookie,
  useRuntimeConfig,
  addRouteMiddleware,
  watchEffect,
  useRequestEvent,
  useNaiveColorMode,
  useRequestHeaders,
} from "#imports";
import { setCookie, setResponseHeader } from "h3";
import colorModeMiddleware from "../middleware/colorMode";
import type { ColorModePreference } from "../types";

export default defineNuxtPlugin((nuxtApp) => {
  const event = useRequestEvent();
  const config = useRuntimeConfig().public.naiveui;
  const { colorMode, colorModePreference, colorModeForced } =
    useNaiveColorMode();

  addRouteMiddleware("colorMode", colorModeMiddleware, { global: true });

  colorModePreference.value =
    useCookie<ColorModePreference>("naive_color_mode_preference").value ||
    config.colorModePreference;

  setColorMode(colorModePreference.value);

  nuxtApp.hook("app:mounted", () => {
    watchEffect(() => {
      setColorMode(colorModePreference.value);
    });
  });

  nuxtApp.hook("page:finish", () => {
    if (colorModeForced.value) {
      colorMode.value = colorModeForced.value;
    } else {
      setColorMode(colorModePreference.value);
    }
  });

  function setColorMode(colorModePreference: ColorModePreference) {
    if (process.server) {
      setCookie(event, "naive_color_mode_preference", colorModePreference, {
        path: "/",
        maxAge: 1339200,
        secure: true,
        sameSite: "lax",
      });
    } else {
      useCookie("naive_color_mode_preference", {
        path: "/",
        maxAge: 1339200,
        secure: true,
        sameSite: "lax",
      }).value = colorModePreference;
    }

    if (colorModePreference === "system") {
      colorMode.value = detectPreferedColorMode();
    } else {
      colorMode.value = colorModePreference;
    }
  }

  function detectPreferedColorMode() {
    if (process.server) {
      setResponseHeader(event, "Accept-CH", "Sec-CH-Prefers-Color-Scheme");
      setResponseHeader(event, "Vary", "Sec-CH-Prefers-Color-Scheme");
      setResponseHeader(event, "Critical-CH", "Sec-CH-Prefers-Color-Scheme");

      const headers = useRequestHeaders();
      return headers["sec-ch-prefers-color-scheme"] === "dark"
        ? "dark"
        : "light";
    } else {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
  }
});
