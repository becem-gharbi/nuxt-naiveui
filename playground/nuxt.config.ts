export default defineNuxtConfig({
  ssr: true,
  css: ["~/assets/fonts/gellix/style.css"],
  modules: ["../src/module"],
  naiveui: {},
  devServer: {
    host: "127.0.0.1", // Fix body unusable ofetch error
  },
});
