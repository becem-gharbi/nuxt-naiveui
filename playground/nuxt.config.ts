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
  css: ["~/assets/fonts/gellix/style.css"],
  modules: ["../src/module"],
  naiveui: {
    colorMode: "system",
  },
});
