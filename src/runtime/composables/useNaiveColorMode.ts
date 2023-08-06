import { useState } from "#imports";
import type { Ref } from "#imports";
import type { ColorMode, ColorModePreference, ColorModeForce } from "../types";

export default function useNaiveColorMode() {
  const colorModePreference: Ref<ColorModePreference> =
    useState<ColorModePreference>("naive_color_mode_preference");

  const colorMode: Ref<ColorMode> = useState<ColorMode>("naive_color_mode");

  const colorModeForced: Ref<ColorModeForce> = useState<ColorModeForce>(
    "naive_color_mode_forced"
  );

  return { colorMode, colorModePreference, colorModeForced };
}
