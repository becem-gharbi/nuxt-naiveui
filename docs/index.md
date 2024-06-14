---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: Nuxt Naive UI
  tagline: Unofficial Naive UI integration for Nuxt
  actions:
    - theme: brand
      text: Get Started
      link: /get-started/introduction

features:
  - title: Custom components
    icon: 🧩
    details: Adds custom components for routing.
  - title: Icones
    icon: 😊
    details: Provides +150k Iconify icons with +100 sets.
  - title: Fully customizable
    icon: 🛠️
    details: Supports theme customization based on device type and color mode.
---

<style>
  .VPFeatures .item {
    width: calc(100%/3) !important;
  }
  @media only screen and (max-width: 768px) {
    .VPFeatures .item {
      width: 100% !important;
    }
  }
</style>
