# useNaiveDevice

This universal composable is intended to detect the device type based on the user agent.
It can be helpful to lazy load components based on the device type to minimize page load time.

The exposed properties are `isMobileOrTablet` and `isMobile`.

In the case of pre-rendering, it's recommended to be aware of hydration mismatch issues. In such a case, it's recommended to use these global CSS classes `mobileOrTablet` and `notMobileOrTablet` for responsive behavior.
