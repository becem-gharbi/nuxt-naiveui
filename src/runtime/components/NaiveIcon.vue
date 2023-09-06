<template>
  <n-icon-wrapper
    v-if="icon"
    :size="sSize"
    :border-radius="borderRadius"
    :color="color"
    :icon-color="iconColor"
  >
    <Icon :icon="icon" :width="sSize" :height="sSize" />
  </n-icon-wrapper>
</template>

<script setup lang="ts">
import type { PublicConfig } from "../types";
//@ts-ignore
import { computed, useRuntimeConfig, ref, watchEffect } from "#imports";
import { Icon } from "@iconify/vue/dist/offline";
import { loadIcon } from "@iconify/vue";

const config = useRuntimeConfig().public.naiveui as PublicConfig;

const props = defineProps<{
  name: string;
  size?: number;
  color?: string;
  borderRadius?: number;
  iconColor?: string;
}>();

const sSize = computed(() => props.size || config.iconSize);

const load = (name: string) =>
  loadIcon(name).catch(() => console.error(`Failed to load icon ${name}`));

const icon = ref();

watchEffect(() => load(props.name).then((res) => (icon.value = res)));

icon.value = await load(props.name);
</script>
