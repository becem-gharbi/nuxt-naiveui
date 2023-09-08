import { defineAppConfig } from "#imports"

export default defineAppConfig({
  docus: {
    title: "Nuxt Naive UI",
    description:
      "Naive UI module for Nuxt 3",
    image:
      "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
    socials: {
      //  twitter: "nuxt_js",
      github: "becem-gharbi/nuxt-Naiveui",
      // nuxt: {
      //   label: "Nuxt",
      //   icon: "simple-icons:nuxtdotjs",
      //   href: "https://nuxt.com",
      // },
    },
    // github: {
    //   dir: "becem-gharbi/nuxt-auth",
    //   branch: "main",
    //   repo: "docus",
    //   owner: "nuxt-themes",
    //   edit: true,
    // },
    aside: {
      level: 0,
      collapsed: false,
      exclude: [],
    },
    main: {
      padded: true,
      fluid: true,
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true,
    },
  },
});
