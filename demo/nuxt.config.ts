// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Nuxt Naive UI",
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  ssr: true,
  modules: ["@bg-dev/nuxt-naiveui", "@nuxtjs/tailwindcss", "@nuxt/devtools"],
  css: ["~/assets/fonts/gellix/style.css"],
  vite: {
    server: {
      fs: {
        allow: ["../package"],
      },
    },
  },
  naiveui: {
   // colorModePreference: "light",
  },
});
