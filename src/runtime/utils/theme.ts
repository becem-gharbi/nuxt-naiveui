import { defu } from 'defu'
import type { ThemeConfig } from '../types'
import defaultLightTheme from '../theme/light'
import defaultDarkTheme from '../theme/dark'
import defaultMobileOrTabletTheme from '../theme/mobileOrTablet'

export function generateThemeConfig(themeConfig?: ThemeConfig): ThemeConfig {
  return {
    dark: themeConfig?.dark?.defaults === false ? themeConfig.dark : defu(themeConfig?.dark, defaultDarkTheme),
    light: themeConfig?.light?.defaults === false ? themeConfig.light : defu(themeConfig?.light, defaultLightTheme),
    mobileOrTablet: themeConfig?.mobileOrTablet?.defaults === false ? themeConfig.mobileOrTablet : defu(themeConfig?.mobileOrTablet, defaultMobileOrTabletTheme),
    mobile: themeConfig?.mobile,
  }
}
