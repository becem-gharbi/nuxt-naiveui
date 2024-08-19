# Tailwind CSS

The module provides friendly TailwindCSS integration by resolving potential style conflicts. Please make sure to install the [Nuxt Tailwind](https://tailwindcss.nuxtjs.org/) module.

#### Theme

```ts [nuxt.config.ts]
import colors from "tailwindcss/colors";

export default defineNuxtConfig({
  naiveui: {
    themeConfig: {
      light: {
        common: {
          primaryColor: colors.blue[600],
          primaryColorHover: colors.blue[500],
          primaryColorPressed: colors.blue[700],
        },
      },
      dark: {
        common: {
          primaryColor: colors.blue[500],
          primaryColorHover: colors.blue[400],
          primaryColorPressed: colors.blue[600],
        },
      },
    },
  },
});
```

#### ColorMode

```ts [tailwind.config.ts]
// tailwind.config.ts
import type { Config } from "tailwindcss";

export default <Config>{
  darkMode: "class",
};
```
