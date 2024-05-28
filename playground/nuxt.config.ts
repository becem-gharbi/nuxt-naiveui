export default defineNuxtConfig({
  devtools: {
    enabled: false,
  },

  ssr: true,

  app: {
    head: {
      title: 'Nuxt Naive UI',
    },
  },

  modules: ['../src/module', '@nuxtjs/tailwindcss'],

  naiveui: {
    colorModePreference: 'light',
    iconDownload: true,
    spaLoadingTemplate: {
      name: 'bar-scale',
    },
  },

  tailwindcss: {
    viewer: false,
  },
})
