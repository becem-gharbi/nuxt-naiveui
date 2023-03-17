import {
  useCookie,
  useRuntimeConfig,
  useState,
  watch,
  useRequestEvent,
} from "#imports";
import { CookieRef, useRequestHeaders } from "#app";
import type { Ref } from "vue";
import { setCookie } from "h3";

export default function useNaiveColorMode() {
  const config = useRuntimeConfig().public.naiveui;
  const headers = useRequestHeaders();
  const event = useRequestEvent();

  const colorModeCookie: CookieRef<"light" | "dark"> = useCookie<
    "light" | "dark"
  >("naive_color_mode", {
    sameSite: "lax",
    secure: true,
  });

  const colorMode: Ref<"light" | "dark"> = useState<"light" | "dark">(
    "naive_color_mode"
  );

  function detectPreferedColorMode() {
    if (process.server) {
      return headers["sec-ch-prefers-color-scheme"] === "dark"
        ? "dark"
        : "light";
    } else {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
  }

  colorMode.value = colorModeCookie.value;

  if (!colorMode.value) {
    if (config.colorMode === "system") {
      colorMode.value = detectPreferedColorMode();
    } else {
      colorMode.value = config.colorMode === "dark" ? "dark" : "light";
    }
  }

  watch(
    colorMode,
    (value) => {
      if (process.server) {
        setCookie(event, "naive_color_mode", value, {
          sameSite: "lax",
          secure: true,
        });
      } else {
        colorModeCookie.value = value;
      }
    },
    { immediate: true }
  );

  return { colorMode: colorMode };
}
