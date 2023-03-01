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
    "naive_color_mode",
    () => colorModeCookie.value
  );

  function detectPreferedColorMode() {
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  onMounted(() => {
    if (!colorMode.value && config.defaultColorMode === "system") {
      colorMode.value = detectPreferedColorMode();
    }
  });

  if (!colorMode.value && config.defaultColorMode !== "system") {
    colorMode.value = config.defaultColorMode === "dark" ? "dark" : "light";
  }

  watch(
    colorMode,
    (value) => {
      colorModeCookie.value = value;
    },
    { immediate: true }
  );

  return { colorMode };
}
