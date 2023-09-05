<template>
  <div :style="navbarStyle">
    <div class="outer">
      <div :style="menuPlacement === 'center' ? { flex: 1 } : {}">
        <div class="inner-start">
          <n-button
            v-if="backIcon"
            class="mobileOrTablet"
            text
            tag="span"
            :focusable="false"
            @click="() => router.back()"
          >
            <NaiveIcon
              name="ph:arrow-left"
              :size="backIconSize"
            />
          </n-button>

          <slot name="start" />
        </div>
      </div>

      <div
        class="notMobileOrTablet"
        :style="{ flexGrow: 1, textAlign: menuPlacement }"
      >
        <n-menu
          v-model:value="activePath"
          :inverted="menuInverted"
          mode="horizontal"
          :options="menuOptions"
        />
      </div>

      <div :style="menuPlacement === 'center' ? { flex: 1 } : {}">
        <div class="inner-end">
          <slot name="end" />

          <n-button
            v-if="menuOptions.length > 0"
            class="mobileOrTablet"
            text
            tag="span"
            :focusable="false"
            @click="() => drawerActive = true"
          >
            <slot name="toggle">
              <NaiveIcon
                :name="menuToggleIcon"
                :size="menuToggleIconSize"
              />
            </slot>
          </n-button>
        </div>
      </div>
    </div>

    <n-drawer
      v-if="menuOptions.length > 0"
      v-model:show="drawerActive"
      :placement="drawerPlacement"
      :width="drawerWidth"
    >
      <n-drawer-content
        title="Menu"
        :body-content-style="{ padding: 0 }"
        :header-style="{
          padding: '15px'
        }"
        :footer-style="{ justifyContent: 'start' }"
        :closable="drawerClosable"
      >
        <template #header>
          <slot name="drawer-header" />
        </template>

        <n-menu
          v-model:value="activePath"
          mode="vertical"
          :inverted="menuInverted"
          :options="menuOptions"
        />

        <template #footer>
          <slot name="drawer-footer" />
        </template>
      </n-drawer-content>
    </n-drawer>
  </div>
</template>

<script setup lang = "ts">
import { ref, computed, h, useRoute, useRouter, watchEffect, useNaiveTheme } from "#imports"
import { NuxtLink, NaiveIcon } from "#components"
import type { StyleValue , Component} from "vue"
import type { MenuOption } from "naive-ui"
import type { NavbarRoute } from "../types"

const drawerActive = ref(false)
const route = useRoute()
const router = useRouter()
const activePath = ref()

watchEffect(() => {
    activePath.value = "/" + route.path.split("/")[1]
    drawerActive.value = false
})

const props = withDefaults(defineProps<{
    routes?: NavbarRoute[],
    menuToggleIcon?: string,
    menuToggleIconSize?: number,
    backIcon?: boolean,
    backIconSize?: number,
    menuInverted?: boolean,
    menuPlacement?: "right" | "left" | "center",
    drawerPlacement?: "top" | "right" | "bottom" | "left",
    sticky?: boolean,
    drawerClosable?: boolean,
    drawerWidth?: string | number,
}>(), {
    routes: () => [],
    menuToggleIcon: "ph:equals",
    menuPlacement: "left",
    drawerPlacement: "left",
    menuInverted: false,
    sticky: true,
    menuToggleIconSize: 26,
    backIcon: false,
    backIconSize: 26,
    drawerWidth: "100%",
})

const naiveTheme = useNaiveTheme()

const navbarStyle = computed<StyleValue>(() => ({
    position: props.sticky ? 'sticky' : 'static',
    backgroundColor: naiveTheme.value?.common?.bodyColor,
    top: 0,
    zIndex: 100
}))


const menuOptions = computed<MenuOption[]>(() => {
    const cb = (routes: NavbarRoute[]) => routes.map(route => {

        const menuOption: MenuOption =
        {
            label: route.path ? () => h(NuxtLink, { to: route.path }, { default: () => route.label }) : route.label,
            icon: route.icon ? () => h(NaiveIcon as Component, { name: route.icon }) : undefined,
            key: route.path || route.label,
        }

        if (route.children) {
            menuOption.children = cb(route.children);
        }

        return menuOption;
    });

    return cb(props.routes)
})
</script>


<style scoped>
.outer {
    height: 56px;
    padding: 0 16px;
    box-shadow: 0px 0px 2px 0px #a3a3a3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
}

.inner-start {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
}

.inner-end {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;
}
</style>