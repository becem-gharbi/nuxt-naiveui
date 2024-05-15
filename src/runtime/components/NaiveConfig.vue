<template>
  <n-config-provider
    :theme-overrides="naiveTheme"
    inline-theme-disabled
  >
    <slot />
  </n-config-provider>
</template>

<script setup lang="ts">
import type { ConfigProviderProps } from 'naive-ui'
import { defu } from 'defu'
import type { ThemeConfig, Theme, PublicConfig } from '../types'
import {
  useHead,
  useRuntimeConfig,
  onMounted,
  useNaiveColorMode,
  useNaiveDevice,
  useNuxtApp,
  useAppConfig,
  watch,
  useNuxtData,
} from '#imports'

interface NaiveConfigProps
  extends /* @vue-ignore */ Omit<ConfigProviderProps, 'themeOverrides' | 'theme'> {
  /** @deprecated since version 1.12.0, instead use `naiveui.themeConfig` in `app.config` */
  themeConfig?: ThemeConfig
}

const props = defineProps<NaiveConfigProps>()
const { colorMode } = useNaiveColorMode()
const config = useRuntimeConfig().public.naiveui as PublicConfig

const themeConfig: ThemeConfig | undefined
  = props.themeConfig
  ?? (useAppConfig().naiveui)?.themeConfig
  ?? config.themeConfig

const { data: naiveTheme } = useNuxtData<Theme>('naive-theme-config')

naiveTheme.value ||= await updateTheme()

watch(colorMode, () => updateTheme().then(t => (naiveTheme.value = t)))

useHead(() => ({
  htmlAttrs: {
    class: colorMode.value === 'dark' ? 'dark' : '',
  },
  style: [
    {
      children: `body {${[
          compileStyle('background-color', naiveTheme.value?.common?.bodyColor),
          compileStyle('color', naiveTheme.value?.common?.textColorBase),
          compileStyle('font-family', naiveTheme.value?.common?.fontFamily),
          compileStyle('font-size', naiveTheme.value?.common?.fontSize),
          compileStyle('line-height', naiveTheme.value?.common?.lineHeight),
        ].join(' ')}}`,
    },
  ],
}))

onMounted(() => {
  const isPrerendered = typeof useNuxtApp().payload.prerenderedAt === 'number'

  if (isPrerendered && naiveTheme.value) {
    // In order to update dom on pre-rendered pages
    updateTheme().then(t => (naiveTheme.value = t))
  }
})

async function updateTheme() {
  const [deviceTheme, colorModeTheme] = await Promise.all([getDeviceTheme(), getColorModeTheme()])
  const sharedTheme = evalTheme(themeConfig?.shared)
  const theme = defu(sharedTheme, deviceTheme, colorModeTheme)
  if (import.meta.client && config.spaLoadingTemplate) {
    setLocalStorageItem('naive-body-bg-color', theme?.common?.bodyColor)
    setLocalStorageItem('naive-primary-color', theme?.common?.primaryColor)
  }
  return theme
}

async function getColorModeTheme() {
  if (colorMode.value === 'dark') {
    const darkTheme = evalTheme(themeConfig?.dark)
    if (darkTheme?.defaults === false) {
      return darkTheme
    }
    else {
      const defaultDarkTheme = await import('../theme/dark')
      return defu(darkTheme, defaultDarkTheme.default)
    }
  }
  else {
    const lightTheme = evalTheme(themeConfig?.light)
    if (lightTheme?.defaults === false) {
      return lightTheme
    }
    else {
      const defaultLightTheme = await import('../theme/light')
      return defu(lightTheme, defaultLightTheme.default)
    }
  }
}

async function getDeviceTheme() {
  const { isMobileOrTablet, isMobile } = useNaiveDevice()

  if (isMobileOrTablet) {
    const mobileOrTabletTheme = evalTheme(themeConfig?.mobileOrTablet)
    if (mobileOrTabletTheme?.defaults === false) {
      return mobileOrTabletTheme
    }
    else {
      const defaultMobileOrTabletTheme = await import('../theme/mobileOrTablet')
      return defu(mobileOrTabletTheme, defaultMobileOrTabletTheme.default)
    }
  }
  else if (isMobile) {
    const mobileTheme = evalTheme(themeConfig?.mobile)
    if (mobileTheme?.defaults === false) {
      return mobileTheme
    }
    else {
      const defaultMobileOrTabletTheme = await import('../theme/mobileOrTablet')
      return defu(mobileTheme, defaultMobileOrTabletTheme.default)
    }
  }
}

function compileStyle(prop: string, value?: string) {
  return value && `${prop}: ${value} !important;`
}

function evalTheme<T extends object>(theme?: T | (() => T)) {
  return typeof theme === 'function' ? theme() : theme
}

function setLocalStorageItem(key: string, value?: string) {
  if (import.meta.client) {
    value ? localStorage.setItem(key, value) : localStorage.removeItem(key)
  }
}
</script>
