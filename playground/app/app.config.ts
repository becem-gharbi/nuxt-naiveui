import { generateColorThemes } from '#naive-utils'
import { defineAppConfig } from '#imports'

export default defineAppConfig({
  naiveui: {
    themeConfig: {
      ...generateColorThemes({ primary: '#3b82f6' }),
    },
  },
})
