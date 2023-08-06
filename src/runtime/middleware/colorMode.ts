import { useNaiveColorMode, defineNuxtRouteMiddleware } from "#imports";
import type { ColorMode } from "../types";

export default defineNuxtRouteMiddleware((to) => {
  const { colorModeForced } = useNaiveColorMode();

  const colorModePage = to.meta.colorMode as ColorMode;

  colorModeForced.value = colorModePage || false;
});
