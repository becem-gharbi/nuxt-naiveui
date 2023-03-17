import { useCookie, useRuntimeConfig, useState } from "#imports";
import type { Ref } from "vue";
import type { ColorMode, ColorModePreference } from "../types";

export default function useNaiveColorMode() {
  const config = useRuntimeConfig().public.naiveui;

  const colorModePreference: Ref<ColorModePreference> =
    useState<ColorModePreference>(
      "naive_color_mode_preference",
      () =>
        useCookie<ColorModePreference>("naive_color_mode_preference").value ||
        config.colorModePreference
    );

  const colorMode: Ref<ColorMode> = useState<ColorMode>("naive_color_mode");

  return { colorMode, colorModePreference };
}
