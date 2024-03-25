<template>
  <span :style="{ display: 'inline-block', width: sSize, height: sSize }">
    <Icon
      v-if="icon"
      :key="key"
      :icon="icon"
      :width="sSize"
      :height="sSize"
      :style="{ width: sSize, color: iconColor, backgroundColor: color, borderRadius: `${borderRadius}px` }"
    />
  </span>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/offline'
import { _api, loadIcon } from '@iconify/vue'
import { getQuery, parseURL } from 'ufo'
import { defu } from 'defu'
import type { PublicConfig } from '../types'
import { computed, useRuntimeConfig, ref, watch, onMounted, useNuxtApp, callOnce } from '#imports'

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

await callOnce(`naiveui:icon-key-${process.server ? 0 : 1}`, () => {
  if (process.dev) { return }

  const imports = process.server
    ? import.meta.glob('~/public/iconify/*/*.json', { import: 'default' })
    : {}

  _api.setFetch(async (req) => {
    const url = req.toString()
    const prefix = parseURL(url).pathname.split('/').pop()!.replace('.json', '')
    const icons = getQuery<{ icons: string }>(url).icons.split(',')

    const iconsData = process.server
      ? await Promise.all<any>(icons.map(i => imports[`/public/iconify/${prefix}/${i}.json`]()))
      : await Promise.all(icons.map(i => $fetch(`/iconify/${prefix}/${i}.json`)))

    const iconsDataMerged = defu({}, ...iconsData)

    return new Response(JSON.stringify(iconsDataMerged), {
      status: 200,
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
  })
})

// eslint-disable-next-line no-console
const load = (name: string) => loadIcon(name).catch(() => console.error(`Failed to load icon ${name}`))

icon.value = await load(sName.value)

watch(sName, value => load(value).then(res => (icon.value = res)))

onMounted(() => {
  const isPrerendered = typeof useNuxtApp().payload.prerenderedAt === 'number'
  if (isPrerendered) { key.value++ }
})
</script>
