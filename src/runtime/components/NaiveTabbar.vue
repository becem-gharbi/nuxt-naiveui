<template>
  <div class="outer mobileOrTablet">
    <nuxt-link
      v-for="tabbarRoute of routesC"
      :key="tabbarRoute.to.path"
      :to="tabbarRoute.to"
      :style="{ textDecoration: 'none' }"
    >
      <n-button
        text
        :focusable="false"
        aria-label="tabbar-link-item"
        :type="tabbarRoute.to.path === route.path ? 'primary' : 'default'"
      >
        <div class="inner-item">
          <naive-icon
            :name="
              tabbarRoute.to.path === route.path
                ? tabbarRoute.iconSelected
                : tabbarRoute.iconUnselected
            "
            :size="iconSize"
          />
          <n-text
            :type="tabbarRoute.to.path === route.path? 'primary': 'default'"
          >
            {{ tabbarRoute.label }}
          </n-text>
        </div>
      </n-button>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
import type { TabbarRoute } from '#build/types/naiveui'
import { computed, useRoute, useThemeVars, useRouter } from '#imports'
import { NuxtLink, NaiveIcon } from '#components'

const props = withDefaults(
  defineProps<{
    routes: TabbarRoute[];
    iconSize?: number | string;
  }>(),
  {
    routes: () => [],
    iconSize: 24
  }
)

const naiveTheme = useThemeVars()
const route = useRoute()
const router = useRouter()

const routesC = computed(() => props.routes.map(r => ({
  label: r.label,
  iconSelected: r.iconSelected,
  iconUnselected: r.iconUnselected,
  to: router.resolve(r.to ?? r.path)
})))

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
