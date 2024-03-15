<template>
  <div class="outer mobileOrTablet">
    <NuxtLink
      v-for="tabbarRoute of routes"
      :key="tabbarRoute.path"
      :to="tabbarRoute.path"
      :style="{ textDecoration: 'none' }"
    >
      <n-button
        quaternary
        :focusable="false"
        :type="tabbarRoute.path === route.path ? 'primary' : 'default'"
      >
        <div class="inner-item">
          <NaiveIcon
            :name="
              tabbarRoute.path === route.path
                ? tabbarRoute.iconSelected
                : tabbarRoute.iconUnselected
            "
            :size="iconSize"
          />
          <n-text
            :type="
              tabbarRoute.path === route.path
                ? 'primary'
                : 'default'
            "
          >
            {{ tabbarRoute.label }}
          </n-text>
        </div>
      </n-button>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { TabbarRoute } from '../types'
import { computed, useRoute, useThemeVars } from '#imports'
import { NuxtLink, NaiveIcon } from '#components'

withDefaults(
  defineProps<{
    routes: TabbarRoute[];
    iconSize?: number;
  }>(),
  {
    iconSize: 24
  }
)

const naiveTheme = useThemeVars()
const route = useRoute()
const backgroundColor = computed(() => naiveTheme.value.bodyColor)
</script>

<style scoped>
.outer {
  position: sticky;
  background-color: v-bind(backgroundColor);
  bottom: 0;
  z-index: 100;
  box-shadow: 0px 0px 2px 0px #a3a3a3;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 0;
  width: 100vw;
  height: 56px;
  box-sizing: border-box;
}

.inner-item {
  display: flex;
  flex-direction: column;
  gap: 0;
  justify-content: space-around;
  align-items: center;
  font-size: small;
}
</style>
