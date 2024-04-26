import type { GlobalThemeOverrides } from "naive-ui";

interface Theme extends GlobalThemeOverrides {
  defaults?: boolean;
}

export interface ThemeConfig {
  shared?: Theme | (() => Theme);
  light?: Theme | (() => Theme);
  dark?: Theme | (() => Theme);
  mobileOrTablet?: Theme | (() => Theme);
  mobile?: Theme | (() => Theme);
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

type SpaLoadingTemplatesName =
  | "pulse"
  | "bar-scale"
  | "dot-chase"
  | "dot-scale"
  | "dot-bounce"
  | "dot-rotate"
  | "dot-rotate-scale"
  | "cube-rotate-scale"
  | "plane-fold"
  | "plane-wave"
  | "plane-rotate";

export interface PublicConfig {
  /** @deprecated since version 1.12.0, instead use `naiveui.themeConfig` in `app.config` */
  themeConfig?: ThemeConfig;
  colorModePreference: ColorModePreference;
  colorModePreferenceCookieName: string;
  iconSize: number | string;
  iconDownload: boolean;
  iconCollectionsUrl: string;
  spaLoadingTemplate?: {
    name: SpaLoadingTemplatesName;
  };
}

declare module "nuxt/schema" {
  interface AppConfigInput {
    naiveui?: {
      themeConfig?: ThemeConfig;
    };
  }
}
