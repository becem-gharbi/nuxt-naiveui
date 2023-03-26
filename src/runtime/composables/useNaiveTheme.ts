import { useState, Ref } from "#imports";
import type { GlobalThemeOverrides } from "naive-ui";

export default function useNaiveTheme() {
  const naiveThemeState: Ref<Readonly<GlobalThemeOverrides>> = useState(
    "naive_theme_overrides"
  );
  return naiveThemeState;
}
