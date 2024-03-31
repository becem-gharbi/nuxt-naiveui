import { generate } from '@ant-design/colors'
import type { GlobalThemeOverrides } from 'naive-ui'
import type { ColorMode } from '../types'

interface Colors {
  primary: string;
  success: string;
  warning: string;
  error: string;
  info: string;
  neutral: string;
}

interface PaletteOptions extends Colors {
  theme: ColorMode;
}

function generatePalette (paletteOptions: PaletteOptions) {
  const gray = '#bfbfbf'
  const theme = paletteOptions.theme === 'light' ? 'default' : 'dark'
  const neutral = theme === 'default' ? gray : paletteOptions.neutral

  return {
    primary: generate(paletteOptions.primary, { theme }),
    success: generate(paletteOptions.success, { theme }),
    warning: generate(paletteOptions.warning, { theme }),
    error: generate(paletteOptions.error, { theme }),
    info: generate(paletteOptions.info, { theme }),
    neutral: generate(neutral, { theme }),
    text: generate(gray, { theme })
  }
}

function generateColorTheme (mode: ColorMode = 'light', colors: Colors) {
  const palette = generatePalette({
    theme: mode,
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
      cardColor: palette.neutral[0],
      inputColor: palette.neutral[0],
      inputColorDisabled: palette.neutral[0],

      tabColor: palette.neutral[1],
      popoverColor: palette.neutral[1],
      modalColor: palette.neutral[1],
      tagColor: palette.neutral[1],
      baseColor: palette.neutral[1],
      codeColor: palette.neutral[1],

      dividerColor: palette.neutral[2],
      avatarColor: palette.neutral[3],
      hoverColor: palette.neutral[2],
      actionColor: palette.neutral[1],
      borderColor: palette.neutral[2],

      textColorBase: palette.text[9],
      textColorDisabled: palette.text[6],
      textColor1: palette.text[8],
      textColor2: palette.text[7],
      textColor3: palette.text[6],

      placeholderColor: palette.text[5],
      placeholderColorDisabled: palette.text[5],

      closeIconColor: palette.neutral[7],
      closeIconColorHover: palette.neutral[6],
      closeIconColorPressed: palette.neutral[6],
      closeColorHover: palette.neutral[2],
      closeColorPressed: palette.neutral[3],

      clearColor: palette.neutral[7],
      clearColorHover: palette.neutral[6],
      clearColorPressed: palette.neutral[6],

      scrollbarColor: palette.neutral[2],
      scrollbarColorHover: palette.neutral[3],

      progressRailColor: palette.neutral[2],
      railColor: palette.neutral[2],

      buttonColor2: palette.neutral[1],
      buttonColor2Hover: palette.neutral[2],
      buttonColor2Pressed: palette.neutral[3],

      tableColor: palette.neutral[1],
      tableHeaderColor: palette.neutral[1],
      tableColorStriped: palette.neutral[1],
      tableColorHover: palette.neutral[1]
    },
    Skeleton: {
      color: palette.neutral[2],
      colorEnd: palette.neutral[3]
    },
    Tag: {
      colorBordered: palette.neutral[1]
    },
    Tooltip: {
      color: palette.neutral[1],
      textColor: palette.text[8]
    },
    Slider: {
      indicatorColor: palette.neutral[1],
      indicatorTextColor: palette.text[8]
    },
    Layout: {
      siderColor: palette.neutral[0],
      headerColor: palette.neutral[0],
      footerColor: palette.neutral[0]
    },
    Icon: {
      color: palette.text[8]
    },
    Switch: {
      railColor: palette.neutral[2]
    },
    Tabs: {
      tabColorSegment: palette.neutral[0]
    },
    Form: {
      feedbackPadding: '8px 0px 10px 0px' // Patch
    }
  } as GlobalThemeOverrides
}

export function generateColorThemes (inputColors?: Partial<Colors>) {
  const colors = {
    primary: '#1677ff',
    success: '#52c41a',
    warning: '#faad14',
    error: '#f5222d',
    info: '#1677ff',
    neutral: '#71717a',
    ...inputColors
  }

  return {
    light: generateColorTheme('light', colors),
    dark: generateColorTheme('dark', colors)
  }
}
