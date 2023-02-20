import { useCookie, useRuntimeConfig } from "#app";
import type { CookieRef } from "#app";

export default function useNaiveColorMode() {
  const config = useRuntimeConfig().public.naiveui;

  function detectPreferedColorMode() {
    if (process.server) return;
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  const colorMode: CookieRef<"light" | "dark"> = useCookie<"light" | "dark">(
    "naive_color_mode",
    {
      sameSite: "lax",
      secure: true,
    }
  );

  if (!colorMode.value) {
    if (config.defaultColorMode === "system") {
      const systemColorMode = detectPreferedColorMode();

      if (systemColorMode) {
        colorMode.value = systemColorMode;
      }
    } else {
      colorMode.value = config.defaultColorMode === "dark" ? "dark" : "light";
    }
  }

  return { colorMode };
}
