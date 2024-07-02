<template>
  <n-config-provider
    :key="key"
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
import defaultDarkTheme from '../theme/dark'
import defaultLightTheme from '../theme/light'
import defaultMobileOrTabletTheme from '../theme/mobileOrTablet'
import {
  useHead,
  useRuntimeConfig,
  useNaiveColorMode,
  useNaiveDevice,
  useAppConfig,
  computed,
  ref,
  onMounted,
  useNuxtApp,
} from '#imports'

defineProps<Omit<ConfigProviderProps, 'themeOverrides' | 'theme'>>()

const { colorMode } = useNaiveColorMode()
const runtimeConfig = useRuntimeConfig().public.naiveui as PublicConfig
const appConfig = useAppConfig().naiveui as { themeConfig?: ThemeConfig } | undefined

const naiveTheme = computed(() => getTheme())

const key = ref(1)

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
    key.value++
  }
})

function getTheme() {
  const deviceTheme = getDeviceTheme()
  const colorModeTheme = getColorModeTheme()
  const sharedTheme = getSharedTheme()
  const theme = defu(sharedTheme, deviceTheme, colorModeTheme)
  if (runtimeConfig.spaLoadingTemplate) {
    setLoadingTemplateTheme(theme)
  }
  return theme
}

function getColorModeTheme() {
  if (colorMode.value === 'dark') {
    const darkTheme = evalTheme(appConfig?.themeConfig?.dark)
    if (darkTheme?.defaults === false) {
      return darkTheme
    }
    else {
      return defu(darkTheme, defaultDarkTheme)
    }
  }
  else {
    const lightTheme = evalTheme(appConfig?.themeConfig?.light)
    if (lightTheme?.defaults === false) {
      return lightTheme
    }
    else {
      return defu(lightTheme, defaultLightTheme)
    }
  }
}

function getDeviceTheme() {
  const { isMobileOrTablet, isMobile } = useNaiveDevice()

  if (isMobileOrTablet) {
    const mobileOrTabletTheme = evalTheme(appConfig?.themeConfig?.mobileOrTablet)
    if (mobileOrTabletTheme?.defaults === false) {
      return mobileOrTabletTheme
    }
    else {
      return defu(mobileOrTabletTheme, defaultMobileOrTabletTheme)
    }
  }
  else if (isMobile) {
    const mobileTheme = evalTheme(appConfig?.themeConfig?.mobile)
    if (mobileTheme?.defaults === false) {
      return mobileTheme
    }
    else {
      return defu(mobileTheme, defaultMobileOrTabletTheme)
    }
  }
}

function getSharedTheme() {
  return evalTheme(appConfig?.themeConfig?.shared)
}

function compileStyle(prop: string, value?: string) {
  return value && `${prop}: ${value} !important;`
}

function evalTheme<T extends object>(theme?: T | (() => T)) {
  return typeof theme === 'function' ? theme() : theme
}

function setLoadingTemplateTheme(theme?: Theme) {
  if (import.meta.client) {
    const setLocalStorageItem = (key: string, value?: string) => {
      value ? localStorage.setItem(key, value) : localStorage.removeItem(key)
    }
    setLocalStorageItem('naive-body-bg-color', theme?.common?.bodyColor)
    setLocalStorageItem('naive-primary-color', theme?.common?.primaryColor)
  }
}
</script>
