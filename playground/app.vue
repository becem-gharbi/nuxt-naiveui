<template>
  <NaiveConfig :theme-config="themeConfig">
    <NaiveNavbar :routes="navbarRoutes">
      <template #brand>
        <n-text>My Website</n-text>
      </template>
      <template #extra>
        <NaiveColorModeSwitch />
      </template>
    </NaiveNavbar>
    <NuxtPage></NuxtPage>
  </NaiveConfig>
</template>


<script setup lang="ts">
import { ThemeConfig, NavbarRoute } from "@bg-dev/nuxt-naiveui"

const navbarRoutes: NavbarRoute[] = [
  {
    label: "Home",
    icon: "ri:home-4-line",
    to: "/"
  },
  {
    label: "Blogs",
    icon: "icomoon-free:blog",
    to: "blogs"
  },
  {
    label: "Categories",
    icon: "mdi:bookmark-multiple-outline",
    children: [
      {
        label: "Books",
        icon: "material-symbols:menu-book-outline-rounded",
        to: "books"
      },
      {
        label: "Computers",
        icon: "material-symbols:computer-outline",
        to: "computers"
      }
    ]
  }
]

const themeConfig: ThemeConfig = {
  shared: {
    common: {
      fontFamily: "Gellix",
    }
  },
  dark: {
    common: {
    },
  },
  mobileOrTablet: {
    common: {
      fontSize: "17px",
      heightMedium: "50px"
    }
  }
}
</script>
