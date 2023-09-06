<template>
  <n-button
    text
    tag="span"
    :focusable="false"
    @click="toggleColorMode"
  >
    <NaiveIcon
      v-if="preference === 'dark'"
      name="ph:moon"
    />
    <NaiveIcon
      v-else-if="preference === 'light'"
      name="ph:sun"
    />
    <NaiveIcon
      v-else-if="preference === 'system'"
      name="ph:monitor"
    />
    <NaiveIcon
      v-else
      name="ph:dots-three"
    />
  </n-button>
</template>

<script setup lang="ts">
import { useNaiveColorMode, ref } from "#imports";
import type { ButtonProps } from "naive-ui";

interface Props extends /* @vue-ignore */ ButtonProps {}
defineProps<Props>();

const { colorModePreference } = useNaiveColorMode();

const preference = ref(colorModePreference.get());

function toggleColorMode() {
  switch (preference.value) {
    case "light":
      colorModePreference.set("dark");
      preference.value = "dark";
      break;
    case "dark":
      colorModePreference.set("system");
      preference.value = "system";
      break;
    case "system":
      colorModePreference.set("light");
      preference.value = "light";
      break;
  }
}
</script>
