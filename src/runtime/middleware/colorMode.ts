import { useNaiveColorMode, defineNuxtRouteMiddleware } from "#imports";
import type { ColorMode } from "../types";

export default defineNuxtRouteMiddleware((to) => {
  const { colorModeForced, colorMode } = useNaiveColorMode();

  const colorModePage = to.meta.colorMode as ColorMode;

  colorModeForced.value = colorModePage || false;

  if (colorModeForced.value && process.server) {
    colorMode.value = colorModeForced.value;
  }
});
