import { useState } from "#imports";
import type { Ref } from "vue";
import type { ColorMode, ColorModePreference } from "../types";

export default function useNaiveColorMode() {
  const colorModePreference: Ref<ColorModePreference> =
    useState<ColorModePreference>("naive_color_mode_preference");

  const colorMode: Ref<ColorMode> = useState<ColorMode>("naive_color_mode");

  return { colorMode, colorModePreference };
}
