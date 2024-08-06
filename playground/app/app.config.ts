import { generateTailwindColorThemes } from '#naive-utils'
import { defineAppConfig } from '#imports'

export default defineAppConfig({
  naiveui: {
    themeConfig: {
      ...generateTailwindColorThemes(),
    },
  },
})
