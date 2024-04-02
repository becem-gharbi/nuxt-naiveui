import { generate } from '@ant-design/colors'
import type { ColorMode, Theme } from '../types'

interface Colors {
  primary: string;
  success: string;
  warning: string;
  error: string;
  info: string;
  neutral: string;
}

function generatePalette (mode: ColorMode, colors: Colors) {
  const gray = '#bfbfbf'
  const theme = mode === 'light' ? 'default' : 'dark'
  const neutral = theme === 'default' ? gray : colors.neutral

  return {
    primary: generate(colors.primary, { theme }),
    success: generate(colors.success, { theme }),
    warning: generate(colors.warning, { theme }),
    error: generate(colors.error, { theme }),
    info: generate(colors.info, { theme }),
    neutral: generate(neutral, { theme }),
    text: generate(gray, { theme })
  }
}

export function generateColorThemes (inputColors?: Partial<Colors>) {
  const colors = {
    primary: '#1677ff',
    success: '#52c41a',
    warning: '#faad14',
    error: '#f5222d',
    info: '#1677ff',
    neutral: '#64748b',
    ...inputColors
  }

  return {
    light: () => generateColorThemeLight(colors),
    dark: () => generateColorThemeDark(colors)
  }
}

function generateColorThemeLight (colors: Colors) {
  const palette = generatePalette('light', {
    primary: colors.primary,
    success: colors.success,
    warning: colors.warning,
    error: colors.error,
    info: colors.info,
    neutral: colors.neutral
  })

  return {
    defaults: false,

    common: {
      primaryColor: palette.primary[6],
      primaryColorHover: palette.primary[5],
      primaryColorPressed: palette.primary[7],
      primaryColorSuppl: palette.primary[8],
      infoColor: palette.info[6],
      infoColorHover: palette.info[5],
      infoColorPressed: palette.info[7],
      infoColorSuppl: palette.info[8],
      successColor: palette.success[6],
      successColorHover: palette.success[5],
      successColorPressed: palette.success[7],
      successColorSuppl: palette.success[8],
      warningColor: palette.warning[6],
      warningColorHover: palette.warning[5],
      warningColorPressed: palette.warning[7],
      warningColorSuppl: palette.warning[8],
      errorColor: palette.error[6],
      errorColorHover: palette.error[5],
      errorColorPressed: palette.error[7],
      errorColorSuppl: palette.error[8],

      bodyColor: palette.neutral[0],

      textColorBase: palette.text[9],
      textColorDisabled: palette.text[7],
      textColor1: palette.text[9],
      textColor2: palette.text[8],
      textColor3: palette.text[6]
    },
    Layout: {
      siderColor: palette.neutral[0],
      headerColor: palette.neutral[0],
      footerColor: palette.neutral[0]
    },

    Menu: {
      itemTextColorHorizontalInverted: palette.text[7],
      itemIconColorHorizontalInverted: palette.text[7],

      itemIconColorHoverHorizontalInverted: palette.text[8],
      itemTextColorHoverHorizontalInverted: palette.text[8],

      itemTextColorActiveHorizontalInverted: palette.text[9],
      itemIconColorActiveHorizontalInverted: palette.text[9],

      itemTextColorActiveHoverHorizontalInverted: palette.text[8],
      itemIconColorActiveHoverHorizontalInverted: palette.text[8],

      itemTextColorChildActiveHorizontalInverted: palette.text[9],
      itemIconColorChildActiveHorizontalInverted: palette.text[9],

      itemIconColorChildActiveHoverHorizontalInverted: palette.text[8],
      itemTextColorChildActiveHoverHorizontalInverted: palette.text[8],

      itemTextColorInverted: palette.text[8],
      itemIconColorInverted: palette.text[8],
      itemTextColorHoverInverted: palette.text[8],
      itemIconColorHoverInverted: palette.text[8],

      itemTextColorChildActiveHoverInverted: palette.primary[5],
      itemTextColorChildActiveInverted: palette.primary[6],
      itemIconColorChildActiveHoverInverted: palette.primary[5],
      itemIconColorChildActiveInverted: palette.primary[6],

      arrowColorInverted: palette.text[8],
      arrowColorHoverInverted: palette.text[8],
      arrowColorChildActiveInverted: palette.primary[6],
      arrowColorChildActiveHoverInverted: palette.primary[5],
      arrowColorActiveInverted: palette.primary[6],
      arrowColorActiveHoverInverted: palette.primary[5]
    }
  } as Theme
}

function generateColorThemeDark (colors: Colors) {
  const palette = generatePalette('dark', {
    primary: colors.primary,
    success: colors.success,
    warning: colors.warning,
    error: colors.error,
    info: colors.info,
    neutral: colors.neutral
  })

  return {
    defaults: false,

    common: {
      primaryColor: palette.primary[6],
      primaryColorHover: palette.primary[5],
      primaryColorPressed: palette.primary[7],
      primaryColorSuppl: palette.primary[8],
      infoColor: palette.info[6],
      infoColorHover: palette.info[5],
      infoColorPressed: palette.info[7],
      infoColorSuppl: palette.info[8],
      successColor: palette.success[6],
      successColorHover: palette.success[5],
      successColorPressed: palette.success[7],
      successColorSuppl: palette.success[8],
      warningColor: palette.warning[6],
      warningColorHover: palette.warning[5],
      warningColorPressed: palette.warning[7],
      warningColorSuppl: palette.warning[8],
      errorColor: palette.error[6],
      errorColorHover: palette.error[5],
      errorColorPressed: palette.error[7],
      errorColorSuppl: palette.error[8],

      tabColor: 'rgba(255, 255, 255, 0.04)',
      tableColorStriped: 'rgba(255, 255, 255, 0.05)',
      pressedColor: 'rgba(255, 255, 255, 0.05)',
      actionColor: 'rgba(255, 255, 255, 0.06)',
      tableHeaderColor: 'rgba(255, 255, 255, 0.06)',
      tableColorHover: 'rgba(255, 255, 255, 0.06)',
      inputColorDisabled: 'rgba(255, 255, 255, 0.06)',
      buttonColor2: 'rgba(255, 255, 255, 0.08)',
      buttonColor2Pressed: 'rgba(255, 255, 255, 0.08)',
      closeColorPressed: 'rgba(255, 255, 255, 0.08)',
      dividerColor: 'rgba(255, 255, 255, 0.09)',
      hoverColor: 'rgba(255, 255, 255, 0.09)',
      inputColor: 'rgba(255, 255, 255, 0.1)',
      buttonColor2Hover: 'rgba(255, 255, 255, 0.12)',
      closeColorHover: 'rgba(255, 255, 255, 0.12)',
      progressRailColor: 'rgba(255, 255, 255, 0.12)',
      codeColor: 'rgba(255, 255, 255, 0.12)',
      avatarColor: 'rgba(255, 255, 255, 0.18)',
      scrollbarColor: 'rgba(255, 255, 255, 0.2)',
      railColor: 'rgba(255, 255, 255, 0.2)',
      borderColor: 'rgba(255, 255, 255, 0.24)',
      placeholderColorDisabled: 'rgba(255, 255, 255, 0.28)',
      iconColorDisabled: 'rgba(255, 255, 255, 0.28)',
      iconColorPressed: 'rgba(255, 255, 255, 0.30)',
      clearColorPressed: 'rgba(255, 255, 255, 0.30)',
      scrollbarColorHover: 'rgba(255, 255, 255, 0.30)',
      placeholderColor: 'rgba(255, 255, 255, 0.38)',
      textColorDisabled: 'rgba(255, 255, 255, 0.38)',
      clearColor: 'rgba(255, 255, 255, 0.38)',
      iconColor: 'rgba(255, 255, 255, 0.38)',
      iconColorHover: 'rgba(255, 255, 255, 0.475)',
      clearColorHover: 'rgba(255, 255, 255, 0.48)',
      closeIconColorHover: 'rgba(255, 255, 255, 0.52)',
      closeIconColor: 'rgba(255, 255, 255, 0.52)',
      closeIconColorPressed: 'rgba(255, 255, 255, 0.52)',
      textColor3: 'rgba(255, 255, 255, 0.52)',
      textColor2: 'rgba(255, 255, 255, 0.82)',
      textColor1: 'rgba(255, 255, 255, 0.9)',

      textColorBase: 'white',
      invertedColor: 'black',

      bodyColor: palette.neutral[0],

      baseColor: palette.neutral[1],
      tableColor: palette.neutral[1],
      cardColor: palette.neutral[1],

      tagColor: palette.neutral[2],
      modalColor: palette.neutral[2],

      popoverColor: palette.neutral[3]
    },

    Layout: {
      siderColor: palette.neutral[0],
      headerColor: palette.neutral[0],
      footerColor: palette.neutral[0]
    },

    Tag: {
      colorBordered: 'rgba(0, 0, 0, 0)'
    },

    Tooltip: {
      color: palette.neutral[3],
      textColor: 'rgba(255, 255, 255, 0.9)'
    },

    Slider: {
      indicatorColor: palette.neutral[3],
      indicatorTextColor: 'rgba(255, 255, 255, 0.9)'
    },

    Skeleton: {
      color: 'rgba(255, 255, 255, 0.12)',
      colorEnd: 'rgba(255, 255, 255, 0.18)'
    }
  } as Theme
}
