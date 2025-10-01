# useNaiveColorMode

::: warning Note
In case the color mode preference is `light-only` or `dark-only` this composable is not usable.
:::

This universal composable is intended for handling color mode state and preference.

The color mode can either be `light` or `dark` and is exposed via the `colorMode` state.

The color mode can be controlled in two ways:

- Preference, the colorMode is set globally. The exposed `colorModePreference` property can be used for that with a fallback to `naiveui.colorModePreference` config option.

```ts
const { colorModePreference } = useNaiveColorMode();

// Set dark mode
colorModePreference.set("dark");
```

- Forced, the color mode is set per-page. This can be useful to force a color mode on a particular page (e.g., setting light mode on the landing page).

```ts
definePageMeta({ colorMode: "light" });
```
