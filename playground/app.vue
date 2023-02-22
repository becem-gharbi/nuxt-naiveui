<template>
  <NaiveConfig :theme-config="themeConfig">
    <NaiveNavbar :routes="navbarRoutes">

      <template #brand>
        <NaiveIcon name="logos:naiveui"></NaiveIcon>
        <n-text strong>nuxt-naiveui</n-text>
      </template>

      <template #extra>
        <NuxtLink to="https://github.com/becem-gharbi/nuxt-naiveui" target="_">
          <n-button text>
            <NaiveIcon name="fontisto:github" />
          </n-button>
        </NuxtLink>
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
    path: "/"
  },
  {
    label: "Blogs",
    icon: "icomoon-free:blog",
    path: "/blogs"
  },
  {
    label: "Categories",
    icon: "mdi:bookmark-multiple-outline",
    children: [
      {
        label: "Books",
        icon: "material-symbols:menu-book-outline-rounded",
        path: "/books"
      },
      {
        label: "Computers",
        icon: "material-symbols:computer-outline",
        path: "/computers"
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
  mobileOrTablet: {
    common: {
      fontSize: "17px",
      heightMedium: "50px"
    }
  }
}
</script>
