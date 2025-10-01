import { defu } from 'defu'
import type { ThemeConfig, ColorModePreference } from '../types'
import defaultLightTheme from './light'
import defaultDarkTheme from './dark'
import defaultMobileOrTabletTheme from './mobileOrTablet'

export function mergeThemeConfig(colorModePreference: ColorModePreference, themeConfig?: ThemeConfig): ThemeConfig {
  if (colorModePreference === 'light-only')
    return {
      light: themeConfig?.light?.defaults === false ? themeConfig.light : defu(themeConfig?.light, defaultLightTheme),
      mobileOrTablet: themeConfig?.mobileOrTablet?.defaults === false ? themeConfig.mobileOrTablet : defu(themeConfig?.mobileOrTablet, defaultMobileOrTabletTheme),
      mobile: themeConfig?.mobile,
      shared: themeConfig?.shared,
    }

  else if (colorModePreference === 'dark-only')
    return {
      dark: themeConfig?.dark?.defaults === false ? themeConfig.dark : defu(themeConfig?.dark, defaultDarkTheme),
      mobileOrTablet: themeConfig?.mobileOrTablet?.defaults === false ? themeConfig.mobileOrTablet : defu(themeConfig?.mobileOrTablet, defaultMobileOrTabletTheme),
      mobile: themeConfig?.mobile,
      shared: themeConfig?.shared,
    }

  return {
    dark: themeConfig?.dark?.defaults === false ? themeConfig.dark : defu(themeConfig?.dark, defaultDarkTheme),
    light: themeConfig?.light?.defaults === false ? themeConfig.light : defu(themeConfig?.light, defaultLightTheme),
    mobileOrTablet: themeConfig?.mobileOrTablet?.defaults === false ? themeConfig.mobileOrTablet : defu(themeConfig?.mobileOrTablet, defaultMobileOrTabletTheme),
    mobile: themeConfig?.mobile,
    shared: themeConfig?.shared,
  }
}
