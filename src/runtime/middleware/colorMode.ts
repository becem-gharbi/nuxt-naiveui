import { defineNuxtRouteMiddleware } from "#app";
import useNaiveColorMode from "../composables/useNaiveColorMode";
import type { ColorMode } from "../types";

export default defineNuxtRouteMiddleware((to) => {
  const { colorMode, colorModeForced } = useNaiveColorMode();

  const colorModePage = to.meta.colorMode as ColorMode;

  if (colorModePage) {
    colorMode.value = colorModePage;
    colorModeForced.value = true;
  } else {
    colorModeForced.value = false;
  }
});
