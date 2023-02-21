import type { GlobalThemeOverrides } from "naive-ui";

export interface ThemeConfig {
  shared?: GlobalThemeOverrides;
  light?: GlobalThemeOverrides;
  dark?: GlobalThemeOverrides;
  mobileOrTablet?: GlobalThemeOverrides;
}