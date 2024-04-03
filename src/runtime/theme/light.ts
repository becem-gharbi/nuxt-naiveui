import type { Theme } from '../types'

export default {
  common: {
    lineHeight: 'normal',
    textColorBase: 'black',
    bodyColor: 'white'
  },
  Menu: {
    itemTextColorHorizontalInverted: '#767c82',
    itemIconColorInverted: '#767c82',
    itemTextColorInverted: '#767c82',

    itemTextColorHoverHorizontalInverted: '#333639',
    itemIconColorHoverHorizontalInverted: '#333639',

    itemTextColorActiveHorizontalInverted: '#1f2225',
    itemIconColorActiveHorizontalInverted: '#1f2225',

    itemTextColorActiveHoverHorizontalInverted: '#333639',
    itemIconColorActiveHoverHorizontalInverted: '#333639',

    itemTextColorChildActiveHorizontalInverted: '#1f2225',
    itemIconColorChildActiveHorizontalInverted: '#1f2225',

    itemTextColorChildActiveHoverHorizontalInverted: '#333639',
    itemIconColorChildActiveHoverHorizontalInverted: '#333639',

    itemTextColorHoverInverted: '#333639',
    itemIconColorHoverInverted: '#333639',
    arrowColorHoverInverted: '#333639',

    itemTextColorChildActiveInverted: 'var(--n-item-color-active)',
    itemIconColorChildActiveHoverInverted: 'var(--n-item-color-active-hover)',
    itemIconColorChildActiveInverted: 'var(--n-item-color-active)',

    arrowColorChildActiveInverted: 'var(--n-item-color-active)',
    arrowColorChildActiveHoverInverted: 'var(--n-item-color-active-hover)',
    arrowColorActiveInverted: 'var(--n-item-color-active)',
    arrowColorActiveHoverInverted: 'var(--n-item-color-active-hover)'
  },
  Layout: {
    siderColor: 'white',
    headerColor: 'white',
    footerColor: 'white'
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
