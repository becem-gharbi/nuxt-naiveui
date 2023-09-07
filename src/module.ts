import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  addImportsDir,
  addComponent,
  addImports,
  extendViteConfig,
} from "@nuxt/kit";
import { fileURLToPath } from "url";
import naive from "naive-ui";
import { name, version } from "../package.json";
import { defu } from "defu";
import type { PublicConfig } from "./runtime/types";
export type {
  NavbarRoute,
  ThemeConfig,
  TabbarRoute,
  PublicConfig,
} from "./runtime/types";

// Module options TypeScript inteface definition
export interface ModuleOptions extends PublicConfig {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: "naiveui",
    compatibility: {
      nuxt: "^3.7.0",
    },
  },

  // Default configuration options of the Nuxt module
  defaults: {
    colorModePreference: "light",
    iconSize: 20,
    themeConfig: {},
  },

  // Add types for volar
  hooks: {
    "prepare:types": ({  references }) => {
      references.push({
        types: "naive-ui/volar",
      });
    },
  },

  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);
    const runtimeDir = fileURLToPath(new URL("./runtime", import.meta.url));

    // Add assets
    nuxt.options.css.push(resolve(runtimeDir, "assets", "style.css"));

    // Add plugins
    addPlugin(resolve(runtimeDir, "plugins", "naive.server"));
    addPlugin(resolve(runtimeDir, "plugins", "colorMode"));

    // Add composables directory
    addImportsDir(resolve(runtimeDir, "composables"));

    // Add components
    addComponent({
      name: "NaiveConfig",
      filePath: resolve(runtimeDir, "components", "NaiveConfig.vue"),
    });
    addComponent({
      name: "NaiveNavbar",
      filePath: resolve(runtimeDir, "components", "NaiveNavbar.vue"),
    });
    addComponent({
      name: "NaiveIcon",
      filePath: resolve(runtimeDir, "components", "NaiveIcon.vue"),
    });
    addComponent({
      name: "NaiveColorModeSwitch",
      filePath: resolve(runtimeDir, "components", "NaiveColorModeSwitch.vue"),
    });
    addComponent({
      name: "NaiveTabbar",
      filePath: resolve(runtimeDir, "components", "NaiveTabbar.vue"),
    });

    // Pass module options to runtimeConfig object
    nuxt.options.runtimeConfig = defu(nuxt.options.runtimeConfig, {
      app: {},
      public: {
        naiveui: options,
      },
    });

    // Add imports for naive-ui components
    const naiveComponents = Object.keys(naive).filter((name) =>
      /^(N[A-Z]|n-[a-z])/.test(name)
    );

    naiveComponents.forEach((name) => {
      addComponent({
        export: name,
        name: name,
        filePath: "naive-ui",
      });
    });

    // Add imports for naive-ui composables
    const naiveComposables = [
      "useDialog",
      "useMessage",
      "useNotification",
      "useLoadingBar",
      "useDialogReactiveList",
      "useThemeVars",
    ];

    naiveComposables.forEach((name) => {
      addImports({
        name: name,
        as: name,
        from: "naive-ui",
      });
    });

    // https://www.naiveui.com/en-US/os-theme/docs/ssr
    if (process.env.NODE_ENV === "production") {
      nuxt.options.build.transpile.push(
        "naive-ui",
        "vueuc",
        "@css-render/vue3-ssr",
        "@juggle/resize-observer"
      );
    } else {
      nuxt.options.build.transpile.push("@juggle/resize-observer");

      extendViteConfig((config) => {
        config.optimizeDeps = config.optimizeDeps || {};
        config.optimizeDeps.include = config.optimizeDeps.include || [];
        config.optimizeDeps.include.push(
          "naive-ui",
          "vueuc",
          "date-fns-tz/esm/formatInTimeZone"
        );
      });
    }
  },
});
