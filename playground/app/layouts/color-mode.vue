<template>
  <div class="flex flex-col gap-4 items-start w-fit">
    <p data-testid="color-mode-value">
      {{ colorMode }}
    </p>

    <p data-testid="color-mode-forced">
      {{ colorModeForced }}
    </p>

    <nuxt-link to="/color-mode/forced">
      Go to forced
    </nuxt-link>

    <nuxt-link to="/color-mode">
      Go to not forced
    </nuxt-link>

    <color-mode-select />

    <n-button type="primary">
      Button
    </n-button>

    <slot />
  </div>
</template>

<script setup>
import { useNaiveColorMode } from '#imports'

const { colorMode, colorModeForced } = useNaiveColorMode()
</script>
