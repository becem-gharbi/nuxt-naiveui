import {
  defineNuxtPlugin,
  addRouteMiddleware,
  useNaiveColorMode,
} from "#imports";
import colorModeMiddleware from "../middleware/colorMode";

export default defineNuxtPlugin((nuxtApp) => {
  const { colorMode, colorModePreference, colorModeForced } =
    useNaiveColorMode();

  addRouteMiddleware("colorMode", colorModeMiddleware, { global: true });

  colorModePreference.set(colorModePreference.get());

  nuxtApp.hook("page:finish", () => {
    if (colorModeForced.value) {
      colorMode.value = colorModeForced.value;
    } else {
      colorModePreference.set(colorModePreference.get());
    }
  });
});
