# useNaiveColorMode

This universal composable is intended for handling colorMode state and preference.

The colorMode state can either be `light` or `dark` and its exposed via `colorMode` property.

The colorMode can be controlled in two ways:

- Preference, the colorMode is set globally. The exposed `colorModePreference` property can be used for that with fallback to `naiveui.colorModePreference` config option.

```ts
const { colorModePreference } = useNaiveColorMode();

// Set dark mode
colorModePreference.set("dark");
```

- Forced, the colorMode is set per-page. This can be usefull to force a colorMode on a particular page (e.g, setting light mode on landing page).

```ts
definePageMeta({ colorMode: "light" });
```
