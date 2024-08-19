import type { GlobalThemeOverrides } from 'naive-ui'

export interface Theme extends GlobalThemeOverrides {
  defaults?: boolean
}

export interface ThemeConfig {
  shared?: Theme
  light?: Theme
  dark?: Theme
  mobileOrTablet?: Theme
  mobile?: Theme
}

export type ColorMode = 'light' | 'dark'

export type ColorModePreference = 'light' | 'dark' | 'system'

export type ColorModeForce = ColorMode | false

type SpaLoadingTemplatesName =
  | 'pulse'
  | 'bar-scale'
  | 'dot-chase'
  | 'dot-scale'
  | 'dot-bounce'
  | 'dot-rotate'
  | 'dot-rotate-scale'
  | 'cube-rotate-scale'
  | 'plane-fold'
  | 'plane-wave'
  | 'plane-rotate'

export interface PublicConfig {
  colorModePreference: ColorModePreference
  colorModePreferenceCookieName: string
  iconSize: number | string
  iconDownload: boolean
  iconCollectionsUrl: string
  spaLoadingTemplate?: {
    name: SpaLoadingTemplatesName
  }
  themeConfig: ThemeConfig
}
