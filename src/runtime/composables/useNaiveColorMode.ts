import {
  useState,
  useRuntimeConfig,
  useRequestEvent,
  useRequestHeaders,
} from "#imports";
import { setResponseHeader, getCookie, setCookie } from "h3";
import Cookies from "js-cookie";

import type { Ref } from "#imports";
import type {
  ColorMode,
  ColorModePreference,
  ColorModeForce
} from "../types";

export function useNaiveColorMode() {
  const event = useRequestEvent();
  const config = useRuntimeConfig().public;
  const colorMode: Ref<ColorMode> = useState<ColorMode>("naive_color_mode");
  const colorModeForced: Ref<ColorModeForce> = useState<ColorModeForce>("naive_color_mode_forced");

  const colorModePreferenceCookie = {
    get value() {
      const v = process.client
        ? Cookies.get(config.colorModePreferenceCookieName)
        : getCookie(event, config.colorModePreferenceCookieName);
      return v ?? "";
    },
    set value(newValue) {
      if (process.client) {
        Cookies.set(config.colorModePreferenceCookieName, newValue, {
          expires: 356,
          secure: true,
          sameSite: "lax",
        });
      } else {
        setCookie(event, config.colorModePreferenceCookieName, newValue, {
          maxAge: 30758400, // 1 year
          secure: true,
          sameSite: "lax",
        });
      }
    },
  };

  const colorModePreferenceState = useState<ColorModePreference>("naive_color_mode_preference");

  const colorModePreference = {
    get: () => colorModePreferenceState.value,
    set(colorModePreference: ColorModePreference) {
      colorModePreferenceState.value = colorModePreference

      // No need to create cookie if preference is the default
      if (colorModePreferenceCookie.value || colorModePreference !== config.colorModePreference) {
        colorModePreferenceCookie.value = colorModePreference
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
    sync() {
      this.set(colorModePreferenceCookie.value || config.colorModePreference)
    }
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
