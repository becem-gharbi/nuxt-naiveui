import {
  useCookie,
  useRuntimeConfig,
  useState,
  watch,
  useRequestEvent,
  computed,
} from "#imports";
import { useRequestHeaders } from "#app";
import type { Ref } from "vue";
import { setCookie } from "h3";
import type { ColorMode, ColorModePreference } from "../types";

export default function useNaiveColorMode() {
  const config = useRuntimeConfig().public.naiveui;
  const headers = useRequestHeaders();
  const event = useRequestEvent();

  const colorModePreference: Ref<ColorModePreference> =
    useState<ColorModePreference>(
      "naive_color_mode_preference",
      () =>
        useCookie<ColorModePreference>("naive_color_mode_preference").value ||
        config.colorModePreference
    );

  const colorModeState: Ref<ColorMode> =
    useState<ColorMode>("naive_color_mode");

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
        colorModeState.value = detectPreferedColorMode();
      } else {
        colorModeState.value = value;
      }
    },
    { immediate: true }
  );

  const colorMode = computed<ColorMode>(() => colorModeState.value);

  return { colorMode, colorModePreference };
}
