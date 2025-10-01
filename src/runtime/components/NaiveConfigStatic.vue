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
import type { Theme, PublicConfig } from '../types'
import {
  useHead,
  useRuntimeConfig,
  useNaiveDevice,
} from '#imports'

// Vue should treat the props as fallthrough attributes
type Props = /* @vue-ignore */ Omit<ConfigProviderProps, 'themeOverrides' | 'theme'>
defineProps<Props>()

const runtimeConfig = useRuntimeConfig().public.naiveui as PublicConfig
const colorMode = runtimeConfig.colorModePreference === 'dark-only' ? 'dark' : 'light'
const deviceTheme = getDeviceTheme()
const naiveTheme = getTheme()

useHead({
  htmlAttrs: {
    class: colorMode === 'dark' ? 'dark' : '',
  },
  bodyAttrs: {
    style: {
      'background-color': naiveTheme.common?.bodyColor,
      'color': naiveTheme.common?.textColorBase,
      'font-family': naiveTheme.common?.fontFamily,
      'font-size': naiveTheme.common?.fontSize,
      'line-height': naiveTheme.common?.lineHeight,
    },
  },
})

function getTheme() {
  const colorModeTheme = colorMode === 'dark' ? runtimeConfig.themeConfig.dark : runtimeConfig.themeConfig.light
  const theme = defu(runtimeConfig.themeConfig.shared, deviceTheme, colorModeTheme)
  if (runtimeConfig.spaLoadingTemplate) {
    setLoadingTemplateTheme(theme)
  }
  return theme
}

function getDeviceTheme() {
  const { isMobileOrTablet, isMobile } = useNaiveDevice()

  if (isMobileOrTablet) {
    return runtimeConfig.themeConfig.mobileOrTablet
  }
  else if (isMobile) {
    return defu(runtimeConfig.themeConfig.mobile, runtimeConfig.themeConfig.mobileOrTablet)
  }
}

function setLoadingTemplateTheme(theme?: Theme) {
  if (import.meta.client) {
    const setLocalStorageItem = (key: string, value?: string) => {
      if (value)
        localStorage.setItem(key, value)
      else
        localStorage.removeItem(key)
    }
    setLocalStorageItem('naive-body-bg-color', theme?.common?.bodyColor)
    setLocalStorageItem('naive-primary-color', theme?.common?.primaryColor)
  }
}
</script>
