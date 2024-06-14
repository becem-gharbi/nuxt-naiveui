# Tailwind CSS

The module provides friendly TailwindCSS integration by resolving potential style conflicts.

Please make sure to install [NuxtTailwind](https://tailwindcss.nuxtjs.org/) module.

#### Theme

Please be aware this adds ~19.5KB (~3.5KB) to the client bundle size, [source](https://tailwindcss.nuxtjs.org/tailwind/config#referencing-in-the-application).

::: code-group

```ts [nuxt.config.ts]
tailwindcss: {
  exposeConfig: {
    write: true,
  }
}
```

```ts [app.config.ts]
import { _colors, _fontFamily } from "#tailwind-config/theme.mjs";

export default defineAppConfig({
  naiveui: {
    themeConfig: {
      shared: {
        common: {
          fontFamily: _fontFamily.sans.join(", "),
        },
      },
      light: {
        common: {
          primaryColor: _colors.blue[600],
          primaryColorHover: _colors.blue[500],
          primaryColorPressed: _colors.blue[700],
        },
      },
      dark: {
        common: {
          primaryColor: _colors.blue[500],
          primaryColorHover: _colors.blue[400],
          primaryColorPressed: _colors.blue[600],
        },
      },
    },
  },
});
```

:::

#### ColorMode

```ts [tailwind.config.ts]
import type { Config } from "tailwindcss";

export default <Config>{
  darkMode: "class",
};
```
