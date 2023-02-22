import type { GlobalThemeOverrides } from "naive-ui";

export interface ThemeConfig {
  shared?: GlobalThemeOverrides;
  light?: GlobalThemeOverrides;
  dark?: GlobalThemeOverrides;
  mobileOrTablet?: GlobalThemeOverrides;
}

export interface NavbarRoute {
  label: string;
  icon?: string;
  to?: string;
  children?: NavbarRoute[];
}
