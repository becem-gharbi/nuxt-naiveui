<template>
  <n-menu
    v-model:value="activeKey"
    :options="menuOptions"
  />
</template>

<script setup lang="ts">
import { ref, useRouter, computed, h } from "#imports";
import { NuxtLink, NaiveIcon } from "#components";
import type { Component } from "vue";
import type { MenuProps, MenuOption } from "naive-ui";
import type { MenuLinkRoute } from "../types";

interface NaiveMenuLinkProps
    extends /* @vue-ignore */ Omit<MenuProps, "options" | "value"> {
    routes: MenuLinkRoute[];
}

const props = defineProps<NaiveMenuLinkProps>();
const router = useRouter()
const activeKey = ref(getActiveKey(router.currentRoute.value.path.toString()));

router.afterEach((to) => {
    activeKey.value = getActiveKey(to.path.toString())
});

function getActiveKey(activePath: string) {
    let activeKey = activePath

    const cb = (routes: MenuLinkRoute[]) => {
        for (const route of routes) {
            if (route.path === activePath) {
                activeKey = route.path
                break
            }
            if (activePath.startsWith(`${route.path}/`)) {
                activeKey = route.path;
            }
            if (route.children) {
                cb(route.children);
            }
        }
    };

    cb(props.routes)
    return activeKey
}

const menuOptions = computed<MenuOption[]>(() => {
    const cb = (routes: MenuLinkRoute[]) =>
        routes.map((route) => {
            const menuOption: MenuOption = {
                label: route.path
                    ? () =>
                        h(NuxtLink, { to: route.path }, { default: () => route.label })
                    : route.label,
                icon: route.icon
                    ? () => h(NaiveIcon as Component, { name: route.icon })
                    : undefined,
                key: route.path ?? route.label,
            };
            if (route.children) {
                menuOption.children = cb(route.children);
            }
            return menuOption;
        });

    return cb(props.routes);
});
</script>
