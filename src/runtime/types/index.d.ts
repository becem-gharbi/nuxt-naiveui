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

// https://github.com/vuejs/router/blob/main/packages/router/src/types/index.ts
interface RouteLocation {
  force?: boolean;
  hash?: string;
  name?: string | symbol;
  params?: Record<string, any>;
  path?: string;
  query?: Record<string, any>;
  replace?: boolean;
}

export interface MenuLinkRoute {
  label: string;
  icon?: string;
  to?: string | RouteLocation;
  /** @deprecated since version 1.11.0, instead use `to` */
  path?: string | RouteLocation;
  children?: MenuLinkRoute[];
}

export type ColorMode = "light" | "dark";

export type ColorModePreference = "light" | "dark" | "system";

export type ColorModeForce = ColorMode | false;

export interface PublicConfig {
   /** @deprecated since version 1.12.0, instead use `naiveui.themeConfig` in `app.config` */
  themeConfig?: ThemeConfig;
  colorModePreference: ColorModePreference;
  colorModePreferenceCookieName: string;
  iconSize: number | string;
  iconDownload: boolean;
  iconCollectionsUrl: string;
}

declare module "nuxt/schema" {
  interface AppConfigInput {
    naiveui?: {
      themeConfig?: ThemeConfig;
    };
  }
}
