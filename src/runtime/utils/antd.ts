import { generate } from '@ant-design/colors'
import type { ColorMode, Theme } from '../types'

interface Colors {
  primary: string
  success: string
  warning: string
  error: string
  info: string
  neutral: string
}

function generatePalette(mode: ColorMode, colors: Colors) {
  const theme = mode === 'light' ? 'default' : 'dark'

  return {
    primary: generate(colors.primary, { theme }),
    success: generate(colors.success, { theme }),
    warning: generate(colors.warning, { theme }),
    error: generate(colors.error, { theme }),
    info: generate(colors.info, { theme }),
    neutral: generate(colors.neutral, { theme }),
  }
}

export function generateAntdColorThemes(inputColors?: Partial<Colors>) {
  const colors = {
    primary: '#2080F0FF',
    success: '#18A058FF',
    warning: '#F0A020FF',
    error: '#D03050FF',
    info: '#2080F0FF',
    neutral: '#4b5563',
    ...inputColors,
  }

  return {
    light: generateColorThemeLight(colors),
    dark: generateColorThemeDark(colors),
  }
}

function generateColorThemeLight(colors: Colors) {
  const palette = generatePalette('light', {
    primary: colors.primary,
    success: colors.success,
    warning: colors.warning,
    error: colors.error,
    info: colors.info,
    neutral: colors.neutral,
  })

  return {
    defaults: true,

    common: {
      primaryColor: palette.primary[5],
      primaryColorHover: palette.primary[4],
      primaryColorPressed: palette.primary[6],
      primaryColorSuppl: palette.primary[7],
      infoColor: palette.info[5],
      infoColorHover: palette.info[4],
      infoColorPressed: palette.info[6],
      infoColorSuppl: palette.info[7],
      successColor: palette.success[5],
      successColorHover: palette.success[4],
      successColorPressed: palette.success[6],
      successColorSuppl: palette.success[7],
      warningColor: palette.warning[5],
      warningColorHover: palette.warning[4],
      warningColorPressed: palette.warning[6],
      warningColorSuppl: palette.warning[7],
      errorColor: palette.error[5],
      errorColorHover: palette.error[4],
      errorColorPressed: palette.error[6],
      errorColorSuppl: palette.error[7],
    },
  } as Theme
}

function generateColorThemeDark(colors: Colors) {
  const palette = generatePalette('dark', {
    primary: colors.primary,
    success: colors.success,
    warning: colors.warning,
    error: colors.error,
    info: colors.info,
    neutral: colors.neutral,
  })

  return {
    defaults: true,

    common: {
      primaryColor: palette.primary[5],
      primaryColorHover: palette.primary[4],
      primaryColorPressed: palette.primary[6],
      primaryColorSuppl: palette.primary[7],
      infoColor: palette.info[5],
      infoColorHover: palette.info[4],
      infoColorPressed: palette.info[6],
      infoColorSuppl: palette.info[7],
      successColor: palette.success[5],
      successColorHover: palette.success[4],
      successColorPressed: palette.success[6],
      successColorSuppl: palette.success[7],
      warningColor: palette.warning[5],
      warningColorHover: palette.warning[4],
      warningColorPressed: palette.warning[6],
      warningColorSuppl: palette.warning[7],
      errorColor: palette.error[5],
      errorColorHover: palette.error[4],
      errorColorPressed: palette.error[6],
      errorColorSuppl: palette.error[7],

      bodyColor: palette.neutral[0],

      baseColor: palette.neutral[1],
      invertedColor: palette.neutral[1],
      tableColor: palette.neutral[1],
      cardColor: palette.neutral[1],

      tagColor: palette.neutral[2],
      modalColor: palette.neutral[2],

      popoverColor: palette.neutral[3],
    },

    Layout: {
      siderColor: palette.neutral[0],
      headerColor: palette.neutral[0],
      footerColor: palette.neutral[0],
    },

    Tooltip: {
      color: palette.neutral[3],
    },

    Slider: {
      indicatorColor: palette.neutral[3],
    },
  } as Theme
}
