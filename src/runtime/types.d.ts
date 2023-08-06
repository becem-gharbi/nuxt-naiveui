import type { GlobalThemeOverrides } from "naive-ui";

export interface ThemeConfig {
  shared?: GlobalThemeOverrides;
  light?: GlobalThemeOverrides;
  dark?: GlobalThemeOverrides;
  mobileOrTablet?: GlobalThemeOverrides;
  mobile?: GlobalThemeOverrides;
}

export interface NavbarRoute {
  label: string;
  icon?: string;
  path?: string;
  children?: NavbarRoute[];
}

export interface TabbarRoute {
  label: string;
  iconSelected: string;
  iconUnselected: string;
  path: string;
}

export type ColorMode = "light" | "dark";

export type ColorModePreference = "light" | "dark" | "system";

export type ColorModeForce = ColorMode | false;
