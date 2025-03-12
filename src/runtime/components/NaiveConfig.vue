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
import type { Theme, PublicConfig } from '../types'
import {
  useHead,
  useRuntimeConfig,
  useNaiveColorMode,
  useNaiveDevice,
  computed,
  ref,
  onMounted,
  useNuxtApp,
} from '#imports'

// Vue should treat the props as fallthrough attributes
type Props = /* @vue-ignore */ Omit<ConfigProviderProps, 'themeOverrides' | 'theme'>
defineProps<Props>()

const { colorMode } = useNaiveColorMode()
const runtimeConfig = useRuntimeConfig().public.naiveui as PublicConfig
const deviceTheme = getDeviceTheme()
const naiveTheme = computed(() => getTheme())
const key = ref(1)

useHead(() => ({
  htmlAttrs: {
    class: colorMode.value === 'dark' ? 'dark' : '',
  },
  bodyAttrs: {
    style: {
      'background-color': naiveTheme.value?.common?.bodyColor,
      'color': naiveTheme.value?.common?.textColorBase,
      'font-family': naiveTheme.value?.common?.fontFamily,
      'font-size': naiveTheme.value?.common?.fontSize,
      'line-height': naiveTheme.value?.common?.lineHeight,
    },
  },
}))

onMounted(() => {
  const isPrerendered = typeof useNuxtApp().payload.prerenderedAt === 'number'

  if (isPrerendered && naiveTheme.value) {
    key.value++
  }
})

function getTheme() {
  const colorModeTheme = colorMode.value === 'dark' ? runtimeConfig.themeConfig.dark : runtimeConfig.themeConfig.light
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
