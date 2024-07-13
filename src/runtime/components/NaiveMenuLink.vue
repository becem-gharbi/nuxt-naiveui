<template>
  <n-menu
    :value="activeKey"
    :options="menuOptions"
  />
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import type { MenuProps, MenuOption } from 'naive-ui'
import { NuxtLink, NaiveIcon } from '#components'
import { computed, h, useRouter } from '#imports'
import type { MenuLinkRoute } from '#build/types/naiveui'

interface NaiveMenuLinkProps
  extends /* @vue-ignore */ Omit<MenuProps, 'options' | 'value'> {
  routes: MenuLinkRoute[]
  /**
   * Since v1.11.0, please refer to [#51](https://github.com/becem-gharbi/nuxt-naiveui/pull/51)
   */
  activeBy?: 'path' | 'name'
}

const props = withDefaults(
  defineProps<NaiveMenuLinkProps>(),
  {
    routes: () => [],
    activeBy: 'path',
  },
)

const router = useRouter()

if (!router.currentRoute.value) {
  console.warn('[nuxt-naiveui] make sure to create page components when using `NaiveMenuLink`')
}

// The menu's active key
const activeKey = computed(() => getActiveKey(router.currentRoute.value))

function getActiveKey(activeRoute: typeof router.currentRoute.value) {
  if (props.activeBy === 'name') {
    return activeRoute.name?.toString()
  }

  const activePath = activeRoute.path
  let activeKey = activePath

  const cb = (routes: MenuLinkRoute[]) => {
    for (const route of routes) {
      const path = route.to && router.resolve(route.to).path
      if (path && activePath === path) {
        activeKey = path
        break
      }
      if (path && activePath.startsWith(`${path}/`)) {
        activeKey = path
      }
      if (route.children) {
        cb(route.children)
      }
    }
  }

  cb(props.routes)
  return activeKey
}

const menuOptions = computed<MenuOption[]>(() => {
  const cb = (routes: MenuLinkRoute[]) =>
    routes.map((route) => {
      const name = route.to && router.resolve(route.to).name?.toString()
      const path = route.to && router.resolve(route.to).path
      const key = (props.activeBy === 'name' ? name : path) ?? route.label

      const menuOption: MenuOption = {
        label: route.to
          ? () => h(NuxtLink, { to: route.to }, { default: () => route.label })
          : route.label,
        icon: route.icon
          ? () => h(NaiveIcon as Component, { name: route.icon })
          : undefined,
        key,
      }
      if (route.children) {
        menuOption.children = cb(route.children)
      }
      return menuOption
    })

  return cb(props.routes)
})
</script>
