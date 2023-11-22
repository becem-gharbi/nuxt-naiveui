<template>
  <n-menu
    v-model:value="activePath"
    :options="menuOptions"
  />
</template>

<script setup lang="ts">
import { ref, useRouter, computed, h } from "#imports";
import { NuxtLink, NaiveIcon } from "#components";
import type { Component } from "vue";
import type { MenuProps, MenuOption } from "naive-ui";
import type { NavbarRoute } from "../types";

interface NaiveMenuLinkProps
    extends /* @vue-ignore */ Omit<MenuProps, "options" | "value"> {
    routes: NavbarRoute[];
}

const props = defineProps<NaiveMenuLinkProps>();

const router = useRouter();
const activePath = ref(router.currentRoute.value.path.toString());

router.afterEach((to)=> activePath.value = to.path.toString())

const menuOptions = computed<MenuOption[]>(() => {
    const cb = (routes: NavbarRoute[]) =>
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
