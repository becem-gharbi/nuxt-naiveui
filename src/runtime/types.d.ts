import type { GlobalThemeOverrides } from "naive-ui";

export type ThemeConfig = {
  shared?: GlobalThemeOverrides;
  light?: GlobalThemeOverrides;
  dark?: GlobalThemeOverrides;
  mobileOrTablet?: GlobalThemeOverrides;
};
