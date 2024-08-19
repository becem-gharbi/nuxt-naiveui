import { defu } from 'defu'
import type { ThemeConfig } from '../types'
import defaultLightTheme from './light'
import defaultDarkTheme from './dark'
import defaultMobileOrTabletTheme from './mobileOrTablet'

export function mergeThemeConfig(themeConfig?: ThemeConfig): ThemeConfig {
  return {
    dark: themeConfig?.dark?.defaults === false ? themeConfig.dark : defu(themeConfig?.dark, defaultDarkTheme),
    light: themeConfig?.light?.defaults === false ? themeConfig.light : defu(themeConfig?.light, defaultLightTheme),
    mobileOrTablet: themeConfig?.mobileOrTablet?.defaults === false ? themeConfig.mobileOrTablet : defu(themeConfig?.mobileOrTablet, defaultMobileOrTabletTheme),
    mobile: themeConfig?.mobile,
  }
}
