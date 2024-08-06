import { defineAppConfig } from '#imports'

export default defineAppConfig({
  naiveui: {
    themeConfig: {
      light: {
        common: {
          primaryColor: 'rgb(29, 78, 216)',
        },
      },
      dark: {
        common: {
          bodyColor: 'rgb(16, 16, 20)',
          primaryColor: 'rgb(96, 165, 250)',
        },
      },
    },
  },
})
