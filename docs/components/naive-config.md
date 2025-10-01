# NaiveConfig

This component is intended for theme configuration and reactivity, plus setting up global styles via `body` tag. The configuration part is handled via `n-config-provider` naive-ui component through which the theme is overwritten based on current color mode and device type.

`naive-config` accepts configuration via the `naiveui.themeConfig` config option.

```ts
interface ThemeConfig {
  shared?: GlobalThemeOverrides; // Common theme options
  light?: GlobalThemeOverrides & { defaults?: boolean }; // Theme options applied on light mode
  dark?: GlobalThemeOverrides & { defaults?: boolean }; // Theme options applied on dark mode
  mobileOrTablet?: GlobalThemeOverrides & { defaults?: boolean }; // Theme options applied on mobile and tablet
  mobile?: GlobalThemeOverrides & { defaults?: boolean }; // Theme options applied on mobile only
}
```

On setup, the `themeConfig` is merged with built-in default [themes](https://github.com/becem-gharbi/nuxt-naiveui/tree/main/src/runtime/themes). To disable a default theme, `defaults` property can be set to `false`.

The common theme properties are shared globally via the `useThemeVars` naive-ui composable.

::: warning Note
Naive UI generates CSS using JS [(reference)](https://www.npmjs.com/package/css-render). This implementation **may cause an issue on pre-rendered Nuxt pages** because they are static (generated at build time). Thus a hydration mismatch may occur in this case.
:::

### Customization

To automatically generate color themes without granular customization, it's recommended to use the `generateTailwindColorThemes` utility based on Tailwind CSS [default color palette](https://tailwindcss.com/docs/customizing-colors) or the `generateAntdColorThemes` utility based on Ant Design [color palette generator](https://ant.design/docs/spec/colors#palette-generation-tool).

```ts [nuxt.config.ts]
import { generateTailwindColorThemes } from "@bg-dev/nuxt-naiveui/utils";

export default defineNuxtConfig({
  naiveui: {
    themeConfig: {
      ...generateTailwindColorThemes(),
    },
  },
});
```
