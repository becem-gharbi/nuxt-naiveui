import {
  onMounted,
  useCookie,
  useRuntimeConfig,
  useState,
  watch,
} from "#imports";
import type { CookieRef } from "#app";
import type { Ref } from "vue";

export default function useNaiveColorMode() {
  const config = useRuntimeConfig().public.naiveui;

  const colorModeCookie: CookieRef<"light" | "dark"> = useCookie<
    "light" | "dark"
  >("naive_color_mode", {
    sameSite: "lax",
    secure: true,
  });

  const colorMode: Ref<"light" | "dark"> = useState<"light" | "dark">(
    "naive_color_mode"
  );

  watch(colorMode, (value) => {
    colorModeCookie.value = value;
  });

  function detectPreferedColorMode() {
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  onMounted(() => {
    colorMode.value = colorModeCookie.value;
    if (colorMode.value) return;

    if (config.defaultColorMode === "system") {
      colorMode.value = detectPreferedColorMode();
    } else {
      colorMode.value = config.defaultColorMode === "dark" ? "dark" : "light";
    }
  });

  if (process.server) {
    colorMode.value = colorModeCookie.value;

    if (!colorMode.value && config.defaultColorMode !== "system") {
      colorMode.value = config.defaultColorMode === "dark" ? "dark" : "light";
    }
  }

  return { colorMode: colorMode };
}
