import { useRequestHeaders } from '#imports'

export function useNaiveDevice () {
  const userAgent = process.client ? navigator.userAgent : useRequestHeaders()['user-agent'] ?? ''

  // https://github.com/matomo-org/device-detector/blob/967270594a8319745b34da14f08822b0799bac87/DeviceDetector.php#L46
  const isMobileOrTablet = /Mobi|Tablet|Android|Pad/i.test(userAgent)

  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent#mobile_tablet_or_desktop
  const isMobile = /Mobi/i.test(userAgent)

  return { isMobileOrTablet, isMobile }
}
