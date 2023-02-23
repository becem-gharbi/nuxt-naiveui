import { useCookie, useRuntimeConfig, useState, watch } from "#imports";
import type { CookieRef } from "#app";
import type { Ref } from "vue";

export default function useNaiveColorMode() {
  const config = useRuntimeConfig().public.naiveui;

  function detectPreferedColorMode() {
    if (process.server) return;
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  const colorModeCookie: CookieRef<"light" | "dark"> = useCookie<
    "light" | "dark"
  >("naive_color_mode", {
    sameSite: "lax",
    secure: true,
    default: () => "light",
  });

  const colorMode: Ref<"light" | "dark"> = useState<"light" | "dark">(
    "naive_color_mode",
    () => colorModeCookie.value
  );

  watch(colorMode, (value) => {
    colorModeCookie.value = value;
  });

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
