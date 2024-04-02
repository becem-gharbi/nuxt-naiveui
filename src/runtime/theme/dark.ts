import type { Theme } from '../types'

export default {
  common: {
    lineHeight: 'normal',
    textColorBase: 'white',
    invertedColor: 'black',

    primaryColor: '#63e2b7',
    primaryColorHover: '#7fe7c4',
    primaryColorPressed: '#5acea7',
    primaryColorSuppl: 'rgb(42, 148, 125)',
    infoColor: '#70c0e8',
    infoColorHover: '#8acbec',
    infoColorPressed: '#66afd3',
    infoColorSuppl: 'rgb(56, 137, 197)',
    successColor: '#63e2b7',
    successColorHover: '#7fe7c4',
    successColorPressed: '#5acea7',
    successColorSuppl: 'rgb(42, 148, 125)',
    warningColor: '#f2c97d',
    warningColorHover: '#f5d599',
    warningColorPressed: '#e6c260',
    warningColorSuppl: 'rgb(240, 138, 0)',
    errorColor: '#e88080',
    errorColorHover: '#e98b8b',
    errorColorPressed: '#e57272',
    errorColorSuppl: 'rgb(208, 58, 82)',

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

    bodyColor: 'rgb(16, 16, 20)',
    baseColor: '#000',
    tableColor: 'rgb(24, 24, 28)',
    cardColor: 'rgb(24, 24, 28)',
    tagColor: 'rgba(51, 51, 51, 1)',
    modalColor: 'rgb(44, 44, 50)',
    popoverColor: 'rgb(72, 72, 78)'
  },
  Skeleton: {
    color: 'rgba(255, 255, 255, 0.12)',
    colorEnd: 'rgba(255, 255, 255, 0.18)'
  },
  Tag: {
    colorBordered: '#00000000'
  },
  Tooltip: {
    color: 'rgb(72, 72, 78)',
    textColor: 'rgba(255, 255, 255, 0.9)'
  },
  Slider: {
    indicatorColor: 'rgb(72, 72, 78)',
    indicatorTextColor: 'rgba(255, 255, 255, 0.9)'
  },
  Layout: {
    siderColor: 'rgb(16, 16, 20)',
    headerColor: 'rgb(16, 16, 20)',
    footerColor: 'rgb(16, 16, 20)'
  },
  IconWrapper: {
    color: 'transparent',
    iconColor: 'inherit'
  },
  Input: {
    lineHeightTextarea: '1.6'
  },
  LoadingBar: {
    height: '3px'
  },
  Form: {
    feedbackPadding: '8px 0px 10px 0px'
  }
} as Theme
