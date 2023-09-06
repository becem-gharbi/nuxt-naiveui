import {
  useState,
  useCookie,
  useRuntimeConfig,
  useRequestEvent,
  useRequestHeaders,
} from "#imports";
import { setCookie, setResponseHeader } from "h3";

import type { Ref } from "#imports";
import type {
  ColorMode,
  ColorModePreference,
  ColorModeForce,
  PublicConfig,
} from "../types";

export default function useNaiveColorMode() {
  const event = useRequestEvent();
  const config = useRuntimeConfig().public.naiveui as PublicConfig;

  const colorMode: Ref<ColorMode> = useState<ColorMode>("naive_color_mode");

  const colorModeForced: Ref<ColorModeForce> = useState<ColorModeForce>(
    "naive_color_mode_forced"
  );

  const colorModePreference = {
    get() {
      return (
        useCookie<ColorModePreference>("naive_color_mode_preference").value ||
        config.colorModePreference
      );
    },
    set(colorModePreference: ColorModePreference) {
      if (process.server) {
        setCookie(event, "naive_color_mode_preference", colorModePreference, {
          path: "/",
          maxAge: 3600 * 24 * 30 * 12,
          secure: true,
          sameSite: "lax",
        });
      } else {
        useCookie("naive_color_mode_preference", {
          path: "/",
          maxAge: 3600 * 24 * 30 * 12,
          secure: true,
          sameSite: "lax",
        }).value = colorModePreference;
      }

      if (colorModeForced.value) {
        return
      }
      
      if (colorModePreference === "system") {
        colorMode.value = detectPreferedColorMode();
      } else {
        colorMode.value = colorModePreference;
      }
    },
  };

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
  return { colorMode, colorModePreference, colorModeForced };
}
