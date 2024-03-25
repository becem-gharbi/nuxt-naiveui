<template>
  <span :style="{display: 'inline-block', width: sSize, height: sSize}">
    <Icon
      v-if="icon"
      :key="key"
      :icon="icon"
      :width="sSize"
      :height="sSize"
      :style="{width: sSize, color: iconColor, backgroundColor: color, borderRadius: `${borderRadius}px`}"
    />
  </span>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/offline'
import { loadIcon } from '@iconify/vue'
import type { PublicConfig } from '../types'
import { computed, useRuntimeConfig, ref, watch, onMounted, useNuxtApp } from '#imports'

const config = useRuntimeConfig().public.naiveui as PublicConfig

const props = defineProps<{
  name: string;
  size?: number;
  color?: string;
  borderRadius?: number;
  iconColor?: string;
}>()

const sSize = computed(() => `${props.size ?? config.iconSize}px`)
const sName = computed(() => props.name)
const icon = ref()
const key = ref(1)

// eslint-disable-next-line no-console
const load = (name: string) => loadIcon(name).catch(() => console.error(`Failed to load icon ${name}`))

icon.value = await load(sName.value)

watch(sName, value => load(value).then(res => (icon.value = res)))

onMounted(() => {
  const isPrerendered = typeof useNuxtApp().payload.prerenderedAt === 'number'
  if (isPrerendered) { key.value++ }
})
</script>
