# useNaiveDevice

This universal composable is intended to detect the deviceType based on the user agent.
It can be helpfull to lazy load components based on device in order to minimize page load time.

The exposed properties are `isMobileOrTablet` and `isMobile`.

In case of pre-rendering, it's recommended to be aware about hydration mismatch issues. In such case it's recommended to use these global CSS classes `mobileOrTablet` and `notMobileOrTablet` for responsive behaviour.
