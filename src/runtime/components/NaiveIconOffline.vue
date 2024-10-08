<template>
  <span :style="{ display: 'inline-block', width: sSize, height: sSize }">
    <Icon
      v-if="icon"
      :key="key"
      :icon="icon"
      :width="sSize"
      :height="sSize"
      :style="{
        width: sSize,
        color: iconColor,
        backgroundColor: color,
        borderRadius: borderRadius && `${borderRadius}px`,
      }"
    />
  </span>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/offline'
import { _api, loadIcon } from '@iconify/vue'
import { getQuery, parseURL } from 'ufo'
import { defu } from 'defu'
import type { IconifyJSON } from '@iconify/vue'
import type { PublicConfig } from '../types'
import { computed, useRuntimeConfig, ref, watch, onMounted, useNuxtApp, callOnce } from '#imports'

const config = useRuntimeConfig().public.naiveui as PublicConfig

const props = defineProps<{
  name: string
  size?: number | string
  color?: string
  borderRadius?: number
  iconColor?: string
}>()

const _sSize = computed(() => props.size ?? config.iconSize)
const sSize = computed(() => typeof _sSize.value === 'string' ? _sSize.value : `${_sSize.value}px`)
const sName = computed(() => props.name)
const icon = ref()
const key = ref(1)

if (!import.meta.dev) {
  await callOnce(`naiveui:icon-key-${import.meta.server ? 'server' : 'client'}`, () => {
    const imports = import.meta.server && import.meta.glob<IconifyJSON>('~~/public/iconify/*/*.json', { import: 'default' })

    _api.setFetch(async (req) => {
      const url = req.toString()
      const prefix = parseURL(url).pathname.split('/').pop()!.replace('.json', '')
      const icons = getQuery<{ icons: string }>(url).icons.split(',')

      // On server-side, icons are imported from `public` dir respecting different dir structures.
      // On client-side, icons are fetched as static content.
      const iconsData = imports
        ? await Promise.all(icons.map(i => (imports[`../public/iconify/${prefix}/${i}.json`] ?? imports[`/public/iconify/${prefix}/${i}.json`])!()))
        : await Promise.all(icons.map(i => $fetch<IconifyJSON>(`/iconify/${prefix}/${i}.json`)))

      const iconsDataMerged = defu({}, ...iconsData)

      return new Response(JSON.stringify(iconsDataMerged), {
        status: 200,
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
      })
    })
  })
}

const load = (name: string) => loadIcon(name).catch(() => console.error(`[nuxt-naiveui] failed to load icon ${name}`))

icon.value = await load(sName.value)

watch(sName, (value) => {
  load(value).then((res) => {
    icon.value = res
  })
})

onMounted(() => {
  const isPrerendered = typeof useNuxtApp().payload.prerenderedAt === 'number'
  if (isPrerendered) {
    key.value++
  }
})
</script>
