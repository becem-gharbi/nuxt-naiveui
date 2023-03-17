export default defineNuxtConfig({
  app: {
    head: {
      title: "Nuxt Naive UI",
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  ssr: false,
  css: ["~/assets/fonts/gellix/style.css"],
  modules: ["../src/module"],
});
