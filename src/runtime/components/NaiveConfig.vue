<template>
  <n-config-provider
    :theme-overrides="naiveTheme"
    inline-theme-disabled
  >
    <slot />
  </n-config-provider>
</template>

<script setup lang="ts">
import { defu } from 'defu'
import type { GlobalThemeOverrides, ConfigProviderProps } from 'naive-ui'
import type { ThemeConfig } from '../types'
import {
  useHead,
  useRuntimeConfig,
  onMounted,
  watch,
  useNaiveColorMode,
  useNaiveDevice,
  useNuxtApp,
  useAppConfig,
  useAsyncData
} from '#imports'

interface NaiveConfigProps
  extends /* @vue-ignore */ Omit<
    ConfigProviderProps,
    'themeOverrides' | 'theme'
  > {
  themeConfig?: ThemeConfig;
}

interface NaiveTheme extends GlobalThemeOverrides {
  isPrerendered?: boolean
}

const props = defineProps<NaiveConfigProps>()
const { colorMode } = useNaiveColorMode()

const themeConfig: ThemeConfig | undefined =
  props.themeConfig ??
  (useAppConfig().naiveui as any)?.themeConfig ??
  (useRuntimeConfig().public.naiveui as any).themeConfig

const { data: naiveTheme, refresh } = await useAsyncData<NaiveTheme>('naive-theme-config', updateTheme)

useHead(() => ({
  htmlAttrs: {
    class: colorMode.value === 'dark' ? 'dark' : ''
  },
  style: [
    {
      children: `body {${[
          compileStyle('background-color', naiveTheme.value?.common?.bodyColor),
          compileStyle('color', naiveTheme.value?.common?.textColorBase),
          compileStyle('font-family', naiveTheme.value?.common?.fontFamily),
          compileStyle('font-size', naiveTheme.value?.common?.fontSize),
          compileStyle('line-height', naiveTheme.value?.common?.lineHeight)
        ].join(' ')}}`
    }
  ]
}))

watch(colorMode, () => refresh())

onMounted(() => {
  const { payload } = useNuxtApp()
  const isPrerendered = typeof payload.prerenderedAt === 'number'

  if (naiveTheme.value && isPrerendered) {
    // In order to update dom on pre-rendered pages
    naiveTheme.value.isPrerendered = true
  }
})

async function updateTheme () {
  const [deviceTheme, colorModeTheme] = await Promise.all([getDeviceTheme(), getColorModeTheme()])

  return defu(themeConfig?.shared, deviceTheme, colorModeTheme)
}

async function getColorModeTheme () {
  let colorModeTheme: GlobalThemeOverrides = {}

  if (colorMode.value === 'dark') {
    if (themeConfig?.dark?.defaults === false) {
      colorModeTheme = themeConfig?.dark
    } else {
      const defaultDarkTheme = await import('../theme/dark')
      colorModeTheme = defu(themeConfig?.dark, defaultDarkTheme.default)
    }
  } else if (themeConfig?.light?.defaults === false) {
    colorModeTheme = themeConfig?.light
  } else {
    const defaultLightTheme = await import('../theme/light')
    colorModeTheme = defu(themeConfig?.light, defaultLightTheme.default)
  }

  return colorModeTheme
}

async function getDeviceTheme () {
  let deviceTheme: GlobalThemeOverrides = {}

  const { isMobileOrTablet, isMobile } = useNaiveDevice()

  if (isMobileOrTablet) {
    if (themeConfig?.mobileOrTablet?.defaults === false) {
      deviceTheme = themeConfig?.mobileOrTablet
    } else {
      const defaultMobileOrTabletTheme = await import(
        '../theme/mobileOrTablet'
      )
      deviceTheme = defu(
        themeConfig?.mobileOrTablet,
        defaultMobileOrTabletTheme.default
      )
    }
  } else if (isMobile) {
    if (themeConfig?.mobile?.defaults === false) {
      deviceTheme = themeConfig?.mobile
    } else {
      const defaultMobileOrTabletTheme = await import(
        '../theme/mobileOrTablet'
      )
      deviceTheme = defu(
        themeConfig?.mobile,
        defaultMobileOrTabletTheme.default
      )
    }
  }

  return deviceTheme
}

function compileStyle (prop: string, value?: string) {
  return value && `${prop}: ${value} !important;`
}
</script>
