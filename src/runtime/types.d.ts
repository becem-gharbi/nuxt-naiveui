import type { GlobalThemeOverrides } from "naive-ui";

export interface ThemeConfig {
  shared?: GlobalThemeOverrides;
  light?: GlobalThemeOverrides & { defaults?: boolean };
  dark?: GlobalThemeOverrides & { defaults?: boolean };
  mobileOrTablet?: GlobalThemeOverrides & { defaults?: boolean };
  mobile?: GlobalThemeOverrides & { defaults?: boolean };
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

export interface MenuLinkRoute extends NavbarRoute { }

export type ColorMode = "light" | "dark";

export type ColorModePreference = "light" | "dark" | "system";

export type ColorModeForce = ColorMode | false;

export interface PublicConfig {
  themeConfig?: ThemeConfig;
  colorModePreference: ColorModePreference;
  colorModePreferenceCookieName: string;
  iconSize: number;
}
