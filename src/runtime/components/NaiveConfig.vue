<template>
  <n-config-provider :theme-overrides="naiveTheme" inline-theme-disabled>
    <slot />
  </n-config-provider>
</template>

<script setup lang="ts">
import {
  useHead,
  useRuntimeConfig,
  onMounted,
  watch,
  ref,
  useNaiveColorMode,
  useNaiveDevice,
  useNuxtApp,
} from "#imports";
import { defu } from "defu";
import type { GlobalThemeOverrides, ConfigProviderProps } from "naive-ui";
import type { ThemeConfig, PublicConfig, ColorMode } from "../types";

interface NaiveConfigProps
  extends /* @vue-ignore */ Omit<
    ConfigProviderProps,
    "themeOverrides" | "theme"
  > {
  themeConfig?: ThemeConfig;
}

const config = useRuntimeConfig().public.naiveui as PublicConfig;
const props = defineProps<NaiveConfigProps>();
const naiveTheme = ref();
const themeConfig = props.themeConfig ?? config.themeConfig;
const { colorMode } = useNaiveColorMode();

await updateTheme(colorMode.value);

useHead(() => ({
  htmlAttrs: {
    class: colorMode.value === "dark" ? "dark" : "",
  },
  style: [
    {
      children: `
                body {
                    ${[
          compileBodyStyle(
            "background-color",
            naiveTheme.value?.common?.bodyColor
          ),
          compileBodyStyle(
            "color",
            naiveTheme.value?.common?.textColorBase
          ),
          compileBodyStyle(
            "font-family",
            naiveTheme.value?.common?.fontFamily
          ),
          compileBodyStyle(
            "font-size",
            naiveTheme.value?.common?.fontSize
          ),
          compileBodyStyle(
            "line-height",
            naiveTheme.value?.common?.lineHeight
          ),
        ].join(" ")}
                    }`,
    },
  ],
}));

onMounted(() => {
  watch(colorMode, (value) => updateTheme(value));

  const { payload } = useNuxtApp();
  const isPrerendered = typeof payload.prerenderedAt === "number";

  if (isPrerendered) {
    // In order to update dom on pre-rendered pages
    naiveTheme.value.isPrerendered = true;
  }

  document.querySelectorAll(".n-submenu").forEach((subMenu) => {
    subMenu?.firstElementChild?.setAttribute("role", "none");
  });
});

async function updateTheme(colorMode: ColorMode) {
  let deviceTheme: GlobalThemeOverrides | undefined = undefined;
  let colorModeTheme: GlobalThemeOverrides | undefined = undefined;

  const { isMobileOrTablet, isMobile } = useNaiveDevice();

  if (isMobileOrTablet) {
    if (themeConfig?.mobileOrTablet?.defaults === false) {
      deviceTheme = themeConfig?.mobileOrTablet;
    } else {
      const defaultMobileOrTabletTheme = await import(
        "../theme/mobileOrTablet"
      );
      deviceTheme = defu(
        themeConfig?.mobileOrTablet,
        defaultMobileOrTabletTheme.default
      );
    }
  } else if (isMobile) {
    if (themeConfig?.mobile?.defaults === false) {
      deviceTheme = themeConfig?.mobile;
    } else {
      const defaultMobileOrTabletTheme = await import(
        "../theme/mobileOrTablet"
      );
      deviceTheme = defu(
        themeConfig?.mobile,
        defaultMobileOrTabletTheme.default
      );
    }
  }
  if (colorMode === "dark") {
    if (themeConfig?.dark?.defaults === false) {
      colorModeTheme = themeConfig?.dark;
    } else {
      const defaultDarkTheme = await import("../theme/dark");
      colorModeTheme = defu(themeConfig?.dark, defaultDarkTheme.default);
    }
  } else if (themeConfig?.light?.defaults === false) {
    colorModeTheme = themeConfig?.light;
  } else {
    const defaultLightTheme = await import("../theme/light");
    colorModeTheme = defu(themeConfig?.light, defaultLightTheme.default);
  }

  naiveTheme.value = defu(themeConfig?.shared, deviceTheme, colorModeTheme);
}

function compileBodyStyle(prop: string, value?: string) {
  if (value) {
    return `${prop}: ${value} !important;`;
  }
}
</script>
