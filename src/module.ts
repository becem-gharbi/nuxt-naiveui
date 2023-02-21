import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  extendViteConfig,
  addImportsDir,
  addComponent,
} from "@nuxt/kit";
import { fileURLToPath } from "url";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import AutoImport from "unplugin-auto-import/vite";

export type { ThemeConfig } from "./runtime/types";

// Module options TypeScript inteface definition
export interface ModuleOptions {
  defaultColorMode: "light" | "dark" | "system";
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "@bg-dev/nuxt-naiveui",
    configKey: "naiveui",
  },

  // Default configuration options of the Nuxt module
  defaults: {
    defaultColorMode: "system",
  },

  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);
    const runtimeDir = fileURLToPath(new URL("./runtime", import.meta.url));

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolve(runtimeDir, "naive.server"));

    // Add composables directory
    addImportsDir(resolve(runtimeDir, "composables"));

    // Add components
    addComponent({
      name: "NaiveConfig",
      filePath: resolve(runtimeDir, "components", "NaiveConfig.vue"),
    });

    // Pass module options to runtimeConfig object
    nuxt.options.runtimeConfig.public.naiveui = options;

    // Add types for volar
    nuxt.hook("prepare:types", (options) => {
      options.tsConfig.compilerOptions?.types?.push("naive-ui/volar");
    });

    // Add auto import for naive components & composables
    extendViteConfig((config) => {
      config.plugins?.push(
        AutoImport({
          imports: [
            {
              "naive-ui": [
                "useDialog",
                "useMessage",
                "useNotification",
                "useLoadingBar",
                "useThemeVars",
                "useDialogReactiveList",
                "useOsTheme",
              ],
            },
          ],
        }),
        Components({
          resolvers: [NaiveUiResolver()],
        })
      );
    });

    // Transpile naive modules
    if (process.env.NODE_ENV === "production") {
      nuxt.options.build.transpile.push(
        "naive-ui",
        "vueuc",
        "@css-render/vue3-ssr",
        "@juggle/resize-observer"
      );
    }
  },
});
