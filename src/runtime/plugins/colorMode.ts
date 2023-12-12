import {
  defineNuxtPlugin,
  useNaiveColorMode,
  useRouter,
} from "#imports";
import type { ColorMode } from "../types";

export default defineNuxtPlugin((nuxtApp) => {
  const { colorMode, colorModePreference, colorModeForced } =
    useNaiveColorMode();

  colorModePreference.sync();

  nuxtApp.hook("page:finish", () => {
    if (colorModeForced.value) {
      colorMode.value = colorModeForced.value;
    } else {
      colorModePreference.sync();
    }
  });

  useRouter().afterEach((to) => {
    const colorModePage = to.meta.colorMode as ColorMode;

    colorModeForced.value = colorModePage || false;

    if (colorModeForced.value && process.server) {
      colorMode.value = colorModeForced.value;
    }
  });

  nuxtApp.hook('app:mounted', () => {
     document.addEventListener("visibilitychange", () => {
      if (document.hidden === false) {
        colorModePreference.sync();
      }
    });
  })
});
