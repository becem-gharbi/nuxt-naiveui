import { defineNuxtPlugin } from "#imports";
import { watch, useRequestEvent } from "#imports";
import { useRequestHeaders } from "#app";
import { setCookie } from "h3";
import useNaiveColorMode from "./composables/useNaiveColorMode";

export default defineNuxtPlugin(() => {
  const headers = useRequestHeaders();
  const event = useRequestEvent();
  const { colorMode, colorModePreference } = useNaiveColorMode();

  function detectPreferedColorMode() {
    if (process.server) {
      return headers["sec-ch-prefers-color-scheme"] === "dark"
        ? "dark"
        : "light";
    } else {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
  }

  watch(
    colorModePreference,
    (value) => {
      if (process.server) {
        setCookie(event, "naive_color_mode_preference", value);
      } else {
        document.cookie = `naive_color_mode_preference=${value}`;
      }

      if (value === "system") {
        colorMode.value = detectPreferedColorMode();
      } else {
        colorMode.value = value;
      }
    },
    { immediate: true }
  );
});
