import type { GlobalThemeOverrides } from 'naive-ui'

export default {
  common: {
    lineHeight: 'normal',
    bodyColor: 'white',
    textColorBase: 'black',
    textColor1: '#262626',
    textColor2: '#525252',
    textColor3: '#a3a3a3'
  },
  IconWrapper: {
    color: 'transparent',
    iconColor: 'inherit'
  },
  Menu: {
    itemIconColor: '#525252',
    itemTextColor: '#525252',

    itemTextColorHorizontal: '#525252',
    itemIconColorHorizontal: '#525252',

    itemIconColorHoverHorizontalInverted: '#525252',
    itemTextColorHoverHorizontalInverted: '#525252',

    itemTextColorActiveHorizontalInverted: '#525252',
    itemIconColorActiveHorizontalInverted: '#525252',

    itemTextColorActiveHoverHorizontalInverted: '#525252',
    itemIconColorActiveHoverHorizontalInverted: '#525252',

    itemTextColorInverted: '#a3a3a3',
    itemIconColorInverted: '#a3a3a3',

    itemTextColorHoverInverted: '#a3a3a3',
    itemIconColorHoverInverted: '#a3a3a3',

    itemTextColorChildActiveHorizontalInverted: '#525252',
    itemIconColorChildActiveHorizontalInverted: '#525252',

    itemIconColorChildActiveHoverHorizontalInverted: '#525252',
    itemTextColorChildActiveHoverHorizontalInverted: '#525252',

    itemTextColorChildActiveHoverInverted: '#525252',
    itemTextColorChildActiveInverted: '#525252',
    itemIconColorChildActiveHoverInverted: '#525252',
    itemIconColorChildActiveInverted: '#525252'
  },
  Input: {
    lineHeightTextarea: '1.6',
    textColor: '#525252'
  },
  LoadingBar: {
    height: '3px'
  },
  Layout: {
    siderColor: 'white',
    headerColor: 'white',
    footerColor: 'white'
  },
  Form: {
    feedbackPadding: '8px 0px 10px 0px'
  }
} as GlobalThemeOverrides
