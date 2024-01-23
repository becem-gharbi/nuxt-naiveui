<template>
  <n-icon-wrapper
    :size="sSize"
    :border-radius="borderRadius"
    :color="color"
    :icon-color="iconColor"
  >
    <Icon
      v-if="icon"
      :key="key"
      :icon="icon"
      :width="sSize"
      :height="sSize"
    />
  </n-icon-wrapper>
</template>

<script setup lang="ts">
import type { PublicConfig } from "../types";
//@ts-ignore
import { computed, useRuntimeConfig, ref, watch, onMounted, useNuxtApp } from "#imports";
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

const sSize = computed(() => props.size ?? config.iconSize);
const sName = computed(() => props.name)
const icon = ref();
const key = ref(1)

const load = (name: string) => loadIcon(name).catch(() => console.error(`Failed to load icon ${name}`));

icon.value = await load(sName.value);

watch(sName, (value) =>load(value).then((res) => (icon.value = res)));

onMounted(() => {

  const { payload } = useNuxtApp();
  const isPrerendered = typeof payload.prerenderedAt === "number";

  if (isPrerendered) {
      key.value++
  }
})
</script>
