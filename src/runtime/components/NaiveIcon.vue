<template>
    <n-icon-wrapper v-if="icon" :size="sSize" :border-radius="borderRadius" :color="color" :icon-color="iconColor">
        <Icon :icon="icon" :width="sSize" :height="sSize" />
    </n-icon-wrapper>
</template>

<script setup lang="ts">
//@ts-ignore
import { computed, useRuntimeConfig } from '#imports'
import { Icon } from '@iconify/vue/dist/offline'
import { loadIcon } from '@iconify/vue'
import { NIconWrapper } from "naive-ui"

const config = useRuntimeConfig().public.naiveui

const props = defineProps<{ name: string; size?: number, color?: string, borderRadius?: number, iconColor?: string }>()

const sSize = computed(() => props.size || config.iconSize)

const icon = await loadIcon(props.name).catch(e => console.error("Failed to load icon"))
</script>

