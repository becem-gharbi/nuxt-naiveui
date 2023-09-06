<template>
  <n-config-provider
    :theme-overrides="naiveTheme"
    :inline-theme-disabled="true"
  >
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
} from "#imports";
import type { GlobalThemeOverrides, ConfigProviderProps } from "naive-ui";
import { defu } from "defu";
import type { ThemeConfig, PublicConfig } from "../types";

interface NaiveConfigProps
  extends /* @vue-ignore */ Omit<
    ConfigProviderProps,
    "themeOverrides" | "theme"
  > {
  themeConfig?: ThemeConfig;
}
const config = useRuntimeConfig().public.naiveui as PublicConfig;

const props = defineProps<NaiveConfigProps>();

const themeConfig = props.themeConfig || config.themeConfig;

const { colorMode } = useNaiveColorMode();

const { isMobileOrTablet, isMobile } = useNaiveDevice();

const isMounted = ref(false);
const naiveTheme = ref();

async function updateTheme(colorMode: string) {
  let deviceTheme: GlobalThemeOverrides | undefined = undefined;

  if (isMobileOrTablet) {
    const defaultMobileOrTabletTheme = await import("../theme/mobileOrTablet");
    deviceTheme = defu(
      themeConfig?.mobileOrTablet,
      defaultMobileOrTabletTheme.default
    );
  } else if (isMobile) {
    const defaultMobileOrTabletTheme = await import("../theme/mobileOrTablet");
    deviceTheme = defu(themeConfig?.mobile, defaultMobileOrTabletTheme.default);
  }

  let colorModeTheme: GlobalThemeOverrides | undefined = undefined;

  if (colorMode === "dark") {
    const defaultDarkTheme = await import("../theme/dark");
    colorModeTheme = defu(themeConfig?.dark, defaultDarkTheme.default);
  } else {
    const defaultLightTheme = await import("../theme/light");
    colorModeTheme = defu(themeConfig?.light, defaultLightTheme.default);
  }

  naiveTheme.value = defu(themeConfig?.shared, deviceTheme, colorModeTheme, {
    isMounted: isMounted.value,
  });
}

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
                    ].join(" ")}`,
    },
  ],
}));

function compileBodyStyle(prop: string, value?: string) {
  if (value) {
    return `${prop}: ${value} !important;`;
  }
}

onMounted(() => {
  isMounted.value = true;

  document.querySelectorAll(".n-submenu").forEach((subMenu) => {
    subMenu?.firstElementChild?.setAttribute("role", "none");
  });
});

watch([colorMode, isMounted], (value) => updateTheme(value[0]));
</script>
