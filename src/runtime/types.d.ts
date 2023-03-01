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
