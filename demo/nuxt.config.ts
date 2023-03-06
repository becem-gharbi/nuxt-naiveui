// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  modules: ["@bg-dev/nuxt-naiveui"],
  css: ["~/assets/fonts/gellix/style.css"],
  vite: {
    server: {
      fs: {
        allow: ["../package"],
      },
    },
  },
});
