import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  extendViteConfig,
} from "@nuxt/kit";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import AutoImport from "unplugin-auto-import/vite";

// Module options TypeScript inteface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "my-module",
    configKey: "myModule",
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve("./runtime/naive.server"));

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
  },
});
