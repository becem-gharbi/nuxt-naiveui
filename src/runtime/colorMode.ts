import { defineNuxtPlugin, useCookie, useRuntimeConfig } from "#imports";
import { watch, useRequestEvent } from "#imports";
import { useRequestHeaders } from "#app";
import { setCookie, setResponseHeader } from "h3";
import useNaiveColorMode from "./composables/useNaiveColorMode";
import type { ColorModePreference } from "./types";

export default defineNuxtPlugin((nuxtApp) => {
  const event = useRequestEvent();
  const config = useRuntimeConfig().public.naiveui;
  const { colorMode, colorModePreference } = useNaiveColorMode();

  colorModePreference.value =
    useCookie<ColorModePreference>("naive_color_mode_preference").value ||
    config.colorModePreference;

  if (process.server) {
    setColorMode(colorModePreference.value);
  } else {
    nuxtApp.hook("app:mounted", () => {
      watch(colorModePreference, (value) => setColorMode(value), {
        immediate: true,
      });
    });
  }

  function setColorMode(colorModePreference: ColorModePreference) {
    if (process.server) {
      setCookie(event, "naive_color_mode_preference", colorModePreference, {
        path: "/",
      });
    } else {
      document.cookie = `naive_color_mode_preference=${colorModePreference}; path=/`;
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
