export default defineNuxtConfig({
  ssr: false,

  app: {
    head: {
      title: "Nuxt Naive UI",
      htmlAttrs: {
        lang: "en",
      },
    },
  },

  css: ["~/assets/fonts/gellix/style.css"],
  modules: ["../src/module", "@nuxtjs/tailwindcss"],
  naiveui: {
    colorModePreference: "light",
  },

  tailwindcss: {
    exposeConfig: true,
  },
});
