<template>
  <NaiveConfig :theme-config="themeConfig">
    <!-- <NaiveNavbar
      :routes="navbarRoutes"
      :drawer-routes="drawerRoutes"
      :menu-inverted="false"
      drawer-closable
      menu-placement="center"
    >
      <template #start>
        <nuxt-link to="/">
          <NaiveIcon name="logos:naiveui" />
        </nuxt-link>
      </template>

      <template #end>
        <NuxtLink
          to="https://github.com/becem-gharbi/nuxt-naiveui"
          target="_"
          aria-label="source-code"
        >
          <n-button
            text
            tag="span"
          >
            <NaiveIcon name="cib:github" />
          </n-button>
        </NuxtLink>
        <NaiveColorModeSwitch />
      </template>

      <template #drawer-header>
        <n-text>Header</n-text>
      </template>

      <template #drawer-footer>
        <n-text>Footer</n-text>
      </template>
    </NaiveNavbar> -->

    <NaiveLayout
      layout="sidebar"
      :routes="navbarRoutes"
      :drawer-routes="navbarRoutes"
    >
      <template #start>
        <nuxt-link to="/">
          <NaiveIcon name="logos:naiveui" />
        </nuxt-link>
      </template>

      <template #end>
        <NaiveColorModeSwitch />
      </template>

      <template #drawer-header>
        <n-text>Header</n-text>
      </template>

      <template #drawer-footer>
        <n-text>Footer</n-text>
      </template>

      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </NaiveLayout>

    <!-- <NaiveTabbar :routes="tabBarRoutes" /> -->
  </NaiveConfig>
</template>

<script setup lang="ts">
import type { ThemeConfig, NavbarRoute, TabbarRoute } from "../src/module";

const navbarRoutes: NavbarRoute[] = [
  {
    label: "Sample, this is a long long lable",
    icon: "ri:home-4-line",
    path: "/",
  },
  {
    label: "Computers",
    icon: "material-symbols:computer-outline",
    path: "/computers",
  },
  {
    label: "Categories",
    icon: "mdi:bookmark-multiple-outline",
    children: [
      {
        label: "Books",
        icon: "material-symbols:menu-book-outline-rounded",
        path: "/books",
      },
    ],
  },
];

const drawerRoutes: NavbarRoute[] = [
  {
    label: "Sample, this is a long long lable",
    icon: "ri:home-4-line",
    path: "/",
  },
];
const tabBarRoutes: TabbarRoute[] = [
  {
    label: "Sample",
    iconUnselected: "ri:home-4-line",
    iconSelected: "material-symbols:home-sharp",
    path: "/",
  },
  {
    label: "Books",
    iconUnselected: "material-symbols:menu-book-outline-rounded",
    iconSelected: "material-symbols:menu-book-sharp",
    path: "/books",
  },
  {
    label: "Computers",
    iconUnselected: "material-symbols:computer-outline",
    iconSelected: "material-symbols:computer",
    path: "/computers",
  },
];

const themeConfig: ThemeConfig = {
  // shared: {
  //   common: {
  //     fontFamily: theme.fontFamily.sans.join(", "),
  //     lineHeight: theme.lineHeight.normal,
  //   },
  // },
  // light: {
  //   common: {
  //     primaryColor: theme.colors.blue[600],
  //     primaryColorHover: theme.colors.blue[500],
  //     primaryColorPressed: theme.colors.blue[700],
  //   },
  // },
  // dark: {
  //   common: {
  //     primaryColor: theme.colors.blue[500],
  //     primaryColorHover: theme.colors.blue[400],
  //     primaryColorPressed: theme.colors.blue[600],
  //   },
  // },
};
</script>

<style>
.brand {
  display: flex;
  align-items: center;
  gap: 1em;
}

.page-enter-active,
.page-leave-active {
  transition: all 1s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}


.layout-enter-active,
.layout-leave-active {
  transition: all 1s;
}

.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
