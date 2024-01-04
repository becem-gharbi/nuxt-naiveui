# Changelog


## v1.8.1

[compare changes](https://github.com/becem-gharbi/nuxt-naiveui/compare/v1.8.0...v1.8.1)

### 🩹 Fixes

- Solve undefined `meta` when no page components defined ([571221f](https://github.com/becem-gharbi/nuxt-naiveui/commit/571221f))
- **NaiveMenuLink:** Solve undefined `path` when no page components defined ([a66a5c5](https://github.com/becem-gharbi/nuxt-naiveui/commit/a66a5c5))

### ❤️ Contributors

- Becem-gharbi <becem.gharbi@live.com>

## v1.8.0

[compare changes](https://github.com/becem-gharbi/nuxt-naiveui/compare/v1.7.4...v1.8.0)

### 🚀 Enhancements

- Set nuxt compatibility to `^3.9.0` ([0d0ff0a](https://github.com/becem-gharbi/nuxt-naiveui/commit/0d0ff0a))

### 🩹 Fixes

- **colorMode:** Update value on `page:loading:end` hook ([5cffac5](https://github.com/becem-gharbi/nuxt-naiveui/commit/5cffac5))
- **NaiveMenuLink:** Treat nested paths as parent path for active item ([642a0ee](https://github.com/becem-gharbi/nuxt-naiveui/commit/642a0ee))

### 💅 Refactors

- **NaiveLoadingBar:** Update navigation state on `page:loading` hook ([1cd313f](https://github.com/becem-gharbi/nuxt-naiveui/commit/1cd313f))
- **NaiveLayoutNavbar:** Add `drawerPlacement` prop ([905c46d](https://github.com/becem-gharbi/nuxt-naiveui/commit/905c46d))
- **NaiveMenuLink:** Fix typecheck errors ([e9d4b1e](https://github.com/becem-gharbi/nuxt-naiveui/commit/e9d4b1e))

### 📖 Documentation

- **Components:** Add `drawerPlacement` prop to NaiveLayout ([0e13bee](https://github.com/becem-gharbi/nuxt-naiveui/commit/0e13bee))
- No significant change ([e042427](https://github.com/becem-gharbi/nuxt-naiveui/commit/e042427))

### 🌊 Types

- **NaiveDrawerLink:** Specify `placement` type ([94e5e10](https://github.com/becem-gharbi/nuxt-naiveui/commit/94e5e10))

### 🏡 Chore

- **addComponent:** Auto-detect `mode` from `filePath` ([c31f084](https://github.com/becem-gharbi/nuxt-naiveui/commit/c31f084))

### ❤️ Contributors

- Becem-gharbi <becem.gharbi@live.com>
- Becem <becem.gharbi@live.com>

## v1.7.4

[compare changes](https://github.com/becem-gharbi/nuxt-naiveui/compare/v1.7.3...v1.7.4)

### 🎨 Styles

- Fix input auto-fill text color ([049a380](https://github.com/becem-gharbi/nuxt-naiveui/commit/049a380))

### ❤️ Contributors

- Becem-gharbi <becem.gharbi@live.com>

## v1.7.3

[compare changes](https://github.com/becem-gharbi/nuxt-naiveui/compare/v1.7.2...v1.7.3)

### 🩹 Fixes

- **colorMode:** Set colorModeForced correctly on initial page ([4054fc6](https://github.com/becem-gharbi/nuxt-naiveui/commit/4054fc6))

### 💅 Refactors

- **NaiveLayout:** Add `native-scrollbar` prop ([6e89ee9](https://github.com/becem-gharbi/nuxt-naiveui/commit/6e89ee9))
- **colorMode:** Only set `colorMode` on preference set/sync ([c5dcc33](https://github.com/becem-gharbi/nuxt-naiveui/commit/c5dcc33))
- Call `watch` on `setup` instead of `onMounted` hook ([ee5e0d8](https://github.com/becem-gharbi/nuxt-naiveui/commit/ee5e0d8))
- No significant change ([81dd8de](https://github.com/becem-gharbi/nuxt-naiveui/commit/81dd8de))

### 📖 Documentation

- **NaiveLayout:** Add `native-scrollbar` prop ([21cf494](https://github.com/becem-gharbi/nuxt-naiveui/commit/21cf494))

### 🏡 Chore

- **styles:** Remove input text color override ([b8d39cc](https://github.com/becem-gharbi/nuxt-naiveui/commit/b8d39cc))
- **playground:** Add favicon ([473f284](https://github.com/becem-gharbi/nuxt-naiveui/commit/473f284))

### ❤️ Contributors

- Becem-gharbi <becem.gharbi@live.com>

## v1.7.2

[compare changes](https://github.com/becem-gharbi/nuxt-naiveui/compare/v1.7.1...v1.7.2)

### 🩹 Fixes

- **NaiveLayout:** Inline height to avoid CLS ([9995dd8](https://github.com/becem-gharbi/nuxt-naiveui/commit/9995dd8))

### 💅 Refactors

- **NaiveLayoutSidebar:** Refactor styles ([f53d4dd](https://github.com/becem-gharbi/nuxt-naiveui/commit/f53d4dd))
- **NaiveLayout:** Set a single root element ([ddd9998](https://github.com/becem-gharbi/nuxt-naiveui/commit/ddd9998))

### 🏡 Chore

- **default theme:** Change Layout color ([1d1a0df](https://github.com/becem-gharbi/nuxt-naiveui/commit/1d1a0df))
- **playground:** Create default layout ([a8cd2c4](https://github.com/becem-gharbi/nuxt-naiveui/commit/a8cd2c4))

### ❤️ Contributors

- Becem-gharbi <becem.gharbi@live.com>

## v1.7.1

[compare changes](https://github.com/becem-gharbi/nuxt-naiveui/compare/v1.7.0...v1.7.1)

### 🩹 Fixes

- Provide `dvh`  fallback to unsupported browsers ([0c3319e](https://github.com/becem-gharbi/nuxt-naiveui/commit/0c3319e))

### 🏡 Chore

- **package.json:** Replace `repository` with `repository.url` ([c52b95e](https://github.com/becem-gharbi/nuxt-naiveui/commit/c52b95e))

### ❤️ Contributors

- Becem-gharbi <becem.gharbi@live.com>

## v1.7.0

[compare changes](https://github.com/becem-gharbi/nuxt-naiveui/compare/v1.6.2...v1.7.0)

### 🚀 Enhancements

- Create `NaiveLayout` ([55248d0](https://github.com/becem-gharbi/nuxt-naiveui/commit/55248d0))
- Add `useNaiveNotification` for outside `setup` usage ([#36](https://github.com/becem-gharbi/nuxt-naiveui/pull/36))
- Add `useNaiveLoadingBar` for outside `setup` usage ([7671ed6](https://github.com/becem-gharbi/nuxt-naiveui/commit/7671ed6))
- **loading bar:** Add navigation prop to show on page loading ([#13](https://github.com/becem-gharbi/nuxt-naiveui/pull/13))

### 🔥 Performance

- **naive layout:** Lazy load components based on device ([35dac1f](https://github.com/becem-gharbi/nuxt-naiveui/commit/35dac1f))

### 🩹 Fixes

- **colorModePreference:** Fix reactivity ([9f8b16c](https://github.com/becem-gharbi/nuxt-naiveui/commit/9f8b16c))

### 💅 Refactors

- **NaiveLayout:** Minor refactoring ([42b62e4](https://github.com/becem-gharbi/nuxt-naiveui/commit/42b62e4))
- Create separate components for navbar and sidebar layouts ([ac42fbc](https://github.com/becem-gharbi/nuxt-naiveui/commit/ac42fbc))
- **naive layout:** Add drawerWidth prop ([bac5e1f](https://github.com/becem-gharbi/nuxt-naiveui/commit/bac5e1f))
- **useNaiveColorMode:** Minor refactoring ([d2b911a](https://github.com/becem-gharbi/nuxt-naiveui/commit/d2b911a))
- **NaiveColorModeSwitch:** Minor refactoring ([ad1ba79](https://github.com/becem-gharbi/nuxt-naiveui/commit/ad1ba79))

### 📖 Documentation

- Update README.md ([2899e72](https://github.com/becem-gharbi/nuxt-naiveui/commit/2899e72))
- Add new features ([cbe462a](https://github.com/becem-gharbi/nuxt-naiveui/commit/cbe462a))

### 🌊 Types

- Expose MenuLinkRoute ([144fe49](https://github.com/becem-gharbi/nuxt-naiveui/commit/144fe49))

### 🏡 Chore

- **module:** Solve merge conflict ([eaf10cb](https://github.com/becem-gharbi/nuxt-naiveui/commit/eaf10cb))

### ❤️ Contributors

- Becem-gharbi <becem.gharbi@live.com>
- Becem <becem.gharbi@live.com>

## v1.6.2

[compare changes](https://github.com/becem-gharbi/nuxt-naiveui/compare/v1.6.1...v1.6.2)

### 🔥 Performance

- Fix failed bfcache ([51a3362](https://github.com/becem-gharbi/nuxt-naiveui/commit/51a3362))

### 🌊 Types

- **NaiveMenuLink:** Create appropriate type for `routes` prop ([39e34d7](https://github.com/becem-gharbi/nuxt-naiveui/commit/39e34d7))
- **useNaiveColorMode:** Assert colorModePreference get type ([d15cddb](https://github.com/becem-gharbi/nuxt-naiveui/commit/d15cddb))

### ❤️ Contributors

- Becem-gharbi <becem.gharbi@live.com>

## v1.6.1

[compare changes](https://github.com/becem-gharbi/nuxt-naiveui/compare/v1.6.0...v1.6.1)

### 🩹 Fixes

- **colorMode:** Sync preference when changed on another tab ([d3b83c7](https://github.com/becem-gharbi/nuxt-naiveui/commit/d3b83c7))
- **NaiveColorModeSwitch:** Sync preference when changed on another tab ([7d94914](https://github.com/becem-gharbi/nuxt-naiveui/commit/7d94914))

### 💅 Refactors

- **composables:** Use named export ([c48e2e4](https://github.com/becem-gharbi/nuxt-naiveui/commit/c48e2e4))

### ❤️ Contributors

- Becem-gharbi <becem.gharbi@live.com>

## v1.6.0

[compare changes](https://github.com/becem-gharbi/nuxt-naiveui/compare/v1.5.5...v1.6.0)

### 🚀 Enhancements

- Add NaiveMenuLink component ([0f3a1b0](https://github.com/becem-gharbi/nuxt-naiveui/commit/0f3a1b0))

### 🔥 Performance

- **NaiveNavbar:** Remove NMenu and use NaiveMenuLink instead ([b0f6fca](https://github.com/becem-gharbi/nuxt-naiveui/commit/b0f6fca))
- Remove colorMode middleware and replace it with navigation hook ([5efb5a5](https://github.com/becem-gharbi/nuxt-naiveui/commit/5efb5a5))
- **useNaiveDevice:** Reduce regex size ([d90b9ea](https://github.com/becem-gharbi/nuxt-naiveui/commit/d90b9ea))

### 💅 Refactors

- Use navigation hook instead of watching route ([bf1b455](https://github.com/becem-gharbi/nuxt-naiveui/commit/bf1b455))
- Avoid create color mode cookie if not needed ([#34](https://github.com/becem-gharbi/nuxt-naiveui/pull/34), [#22](https://github.com/becem-gharbi/nuxt-naiveui/pull/22))
- **theme:** Set height to 36px on mobileOrTablet of Pagination and Tag ([6b8316a](https://github.com/becem-gharbi/nuxt-naiveui/commit/6b8316a))
- Add colorModePreferenceCookieName config option ([b5430e0](https://github.com/becem-gharbi/nuxt-naiveui/commit/b5430e0))
- Use RegExp.exec() instead of match() ([7ac6a5b](https://github.com/becem-gharbi/nuxt-naiveui/commit/7ac6a5b))

### ❤️ Contributors

- Becem-gharbi <becem.gharbi@live.com>

## v1.5.5

[compare changes](https://github.com/becem-gharbi/nuxt-naiveui/compare/v1.5.4...v1.5.5)

### 🩹 Fixes

- **NaiveNavbar:** Fix CLS on SSR ([871751f](https://github.com/becem-gharbi/nuxt-naiveui/commit/871751f))

### ❤️ Contributors

- Becem-gharbi ([@becem-gharbi](http://github.com/becem-gharbi))

## v1.5.4

[compare changes](https://github.com/becem-gharbi/nuxt-naiveui/compare/v1.5.3...v1.5.4)

### 🩹 Fixes

- Fix [vue warn] onScopeDispose warning ([#34](https://github.com/becem-gharbi/nuxt-naiveui/pull/34))
- **NaiveNavbar:** Fix backgroundColor on pre-rendered dark mode ([8306bf5](https://github.com/becem-gharbi/nuxt-naiveui/commit/8306bf5))
- **NaiveIcon:** Force IconifyIcon update on pre-rendered pages ([7ee6287](https://github.com/becem-gharbi/nuxt-naiveui/commit/7ee6287))
- **NInput:** Set min-height for textarea ([#32](https://github.com/becem-gharbi/nuxt-naiveui/pull/32))

### 💅 Refactors

- **NaiveConfig:** Minor refactoring ([b8962c6](https://github.com/becem-gharbi/nuxt-naiveui/commit/b8962c6))
- **NaiveConfig:** Minor refactoring ([04a2f13](https://github.com/becem-gharbi/nuxt-naiveui/commit/04a2f13))

### 🏡 Chore

- Set NInput default textColor ([a1f53df](https://github.com/becem-gharbi/nuxt-naiveui/commit/a1f53df))
- Fix lint issues ([91d82a7](https://github.com/becem-gharbi/nuxt-naiveui/commit/91d82a7))

### ❤️ Contributors

- Becem-gharbi ([@becem-gharbi](http://github.com/becem-gharbi))

## v1.5.3

[compare changes](https://github.com/becem-gharbi/nuxt-naiveui/compare/v1.5.2...v1.5.3)

### 🩹 Fixes

- **NaiveConfig:** Missing end delimiter ([d2ab9c1](https://github.com/becem-gharbi/nuxt-naiveui/commit/d2ab9c1))
- **NaiveIcon:** Avoid duplicate fetch calls ([ab9817a](https://github.com/becem-gharbi/nuxt-naiveui/commit/ab9817a))
- **NInput:** Set numeric default value for lineHeightTextarea ([#32](https://github.com/becem-gharbi/nuxt-naiveui/pull/32))

### 💅 Refactors

- **NaiveConfig:** Minor refactoring ([9174300](https://github.com/becem-gharbi/nuxt-naiveui/commit/9174300))
- **NaiveNavbar:** Remove lazy loading of n-drawer-content ([f7e36f0](https://github.com/becem-gharbi/nuxt-naiveui/commit/f7e36f0))

### ❤️ Contributors

- Becem-gharbi ([@becem-gharbi](http://github.com/becem-gharbi))
- Seekwe ([@sohaha](http://github.com/sohaha))

## v1.5.2

[compare changes](https://github.com/becem-gharbi/nuxt-naiveui/compare/v1.5.1...v1.5.2)

### 🔥 Performance

- **NaiveNavbar:** Render drawer on client-side only ([774f14a](https://github.com/becem-gharbi/nuxt-naiveui/commit/774f14a))

### 🩹 Fixes

- **NaiveNavbar:** Inline styles to avoid potential CLS ([8c01aa0](https://github.com/becem-gharbi/nuxt-naiveui/commit/8c01aa0))

### 📖 Documentation

- Upgrade to nuxt 3.8 ([c02ea52](https://github.com/becem-gharbi/nuxt-naiveui/commit/c02ea52))
- Remove unused nuxt-naiveui module ([3c17701](https://github.com/becem-gharbi/nuxt-naiveui/commit/3c17701))

### ❤️ Contributors

- Becem-gharbi <becem.gharbi@live.com>

## v1.5.1

[compare changes](https://github.com/becem-gharbi/nuxt-naiveui/compare/v1.4.7...v1.5.1)

### 🩹 Fixes

- Fix Missing './esm/formatInTimeZone' ([#26](https://github.com/becem-gharbi/nuxt-naiveui/pull/26))

### 🏡 Chore

- Upgrade naive-ui to v2.35 ([50ebb04](https://github.com/becem-gharbi/nuxt-naiveui/commit/50ebb04))
- Refresh lockfile ([3b2f468](https://github.com/becem-gharbi/nuxt-naiveui/commit/3b2f468))
- Bump version to 1.5 ([b73c13b](https://github.com/becem-gharbi/nuxt-naiveui/commit/b73c13b))

### ❤️ Contributors

- Becem-gharbi <becem.gharbi@live.com>

## v1.4.7

[compare changes](https://github.com/becem-gharbi/nuxt-naiveui/compare/v1.4.6...v1.4.7)

### 🩹 Fixes

- Remove input autofill white background color ([5320bf7](https://github.com/becem-gharbi/nuxt-naiveui/commit/5320bf7))

### 📖 Documentation

- Fix comments on theme config ([4155a39](https://github.com/becem-gharbi/nuxt-naiveui/commit/4155a39))

### 🏡 Chore

- Add funding btn ([8efcb35](https://github.com/becem-gharbi/nuxt-naiveui/commit/8efcb35))
- Upgrade dependencies ([4738a60](https://github.com/becem-gharbi/nuxt-naiveui/commit/4738a60))

### ❤️ Contributors

- Becem-gharbi <becem.gharbi@live.com>
- Becem Gharbi <becem.gharbi@live.com>
- Sebastian Di Luzio <sebidiluzio@gmail.com>

## v1.4.6

[compare changes](https://github.com/becem-gharbi/nuxt-naiveui/compare/v1.4.5...v1.4.6)

### 🌊 Types

- **NaiveNavbar:** Fix sticky type error ([eb119fa](https://github.com/becem-gharbi/nuxt-naiveui/commit/eb119fa))

### 🏡 Chore

- Add typecheck to release workflow ([a77ad8c](https://github.com/becem-gharbi/nuxt-naiveui/commit/a77ad8c))

### ❤️ Contributors

- Becem Gharbi <becem.gharbi@live.com>

## v1.4.5

[compare changes](https://github.com/becem-gharbi/nuxt-naiveui/compare/v1.4.4...v1.4.5)

### 🩹 Fixes

- **NaiveNavbar:** Fix layout ([ad018c8](https://github.com/becem-gharbi/nuxt-naiveui/commit/ad018c8))

### ❤️ Contributors

- Becem Gharbi <becem.gharbi@live.com>

## v1.4.4

[compare changes](https://github.com/becem-gharbi/nuxt-naiveui/compare/v1.4.3...v1.4.4)

### 🔥 Performance

- On load only update dom on pre-rendered pages ([a2eeea2](https://github.com/becem-gharbi/nuxt-naiveui/commit/a2eeea2))

### 🩹 Fixes

- **NaiveNavbar:** Fix left and right menu placement ([9d39c4c](https://github.com/becem-gharbi/nuxt-naiveui/commit/9d39c4c))
- Fix CLS on pre-rendered pages by allowing disable of theme defaults ([e9d28de](https://github.com/becem-gharbi/nuxt-naiveui/commit/e9d28de))

### 📖 Documentation

- Update content ([c967fa9](https://github.com/becem-gharbi/nuxt-naiveui/commit/c967fa9))

### 🏡 Chore

- **playground:** Add transitions ([7c86f22](https://github.com/becem-gharbi/nuxt-naiveui/commit/7c86f22))
- Fix lint issues ([19ee949](https://github.com/becem-gharbi/nuxt-naiveui/commit/19ee949))

### ❤️ Contributors

- Becem Gharbi <becem.gharbi@live.com>

## v1.4.3

[compare changes](https://github.com/becem-gharbi/nuxt-naiveui/compare/v1.4.2...v1.4.3)

### 💅 Refactors

- **NaiveNavbar:** Set default value for drawerClosable ([ba16d6f](https://github.com/becem-gharbi/nuxt-naiveui/commit/ba16d6f))

### 📖 Documentation

- Create docus app and define architecture ([1c367b2](https://github.com/becem-gharbi/nuxt-naiveui/commit/1c367b2))
- Add content ([11e7db5](https://github.com/becem-gharbi/nuxt-naiveui/commit/11e7db5))
- **readme:** Add documentation section ([f7f7de1](https://github.com/becem-gharbi/nuxt-naiveui/commit/f7f7de1))
- Update naive-icon section ([944e7b2](https://github.com/becem-gharbi/nuxt-naiveui/commit/944e7b2))
- Update naive-icon section ([72e05eb](https://github.com/becem-gharbi/nuxt-naiveui/commit/72e05eb))

### ❤️ Contributors

- Becem Gharbi <becem.gharbi@live.com>

## v1.4.2

[compare changes](https://github.com/becem-gharbi/nuxt-naiveui/compare/v1.4.1...v1.4.2)

### 🔥 Performance

- **NaiveNavbar:** Lazy load horizontal menu based on device ([b5cee22](https://github.com/becem-gharbi/nuxt-naiveui/commit/b5cee22))

### 💅 Refactors

- **NaiveNavbar:** Add drawerRoutes prop to override routes on drawer's menu ([c1e5e20](https://github.com/becem-gharbi/nuxt-naiveui/commit/c1e5e20))

### ❤️ Contributors

- Becem Gharbi <becem.gharbi@live.com>

## v1.4.1

[compare changes](https://github.com/becem-gharbi/nuxt-naiveui/compare/v1.3.1...v1.4.1)

### 🔥 Performance

- **NaiveNavbar:** Lazy load drawer ([9f16999](https://github.com/becem-gharbi/nuxt-naiveui/commit/9f16999))
- **useNaiveTheme:** Remove it! useThemeVars instead ([b95a1e8](https://github.com/becem-gharbi/nuxt-naiveui/commit/b95a1e8))
- **colorMode:** Remove preference reactivity ([db95976](https://github.com/becem-gharbi/nuxt-naiveui/commit/db95976))
- **NaiveIcon:** Add reactivity ([a4b9870](https://github.com/becem-gharbi/nuxt-naiveui/commit/a4b9870))
- **NaiveConfig:** Lazy load default themes ([e2c8f08](https://github.com/becem-gharbi/nuxt-naiveui/commit/e2c8f08))
- **NaiveNavbar:** Prevent horizontal menu load on mobileOrTablet ([337d601](https://github.com/becem-gharbi/nuxt-naiveui/commit/337d601))

### 🩹 Fixes

- Don't try to display icon if name is wrong ([4e9f0c5](https://github.com/becem-gharbi/nuxt-naiveui/commit/4e9f0c5))

### 💅 Refactors

- Remove extra imports ([96c22d5](https://github.com/becem-gharbi/nuxt-naiveui/commit/96c22d5))
- **NaiveNavbar:** Move dynamic styles to style tag> ([8b26570](https://github.com/becem-gharbi/nuxt-naiveui/commit/8b26570))
- **NaiveTabbar:** Move dynamic styles to style tag ([a6de872](https://github.com/becem-gharbi/nuxt-naiveui/commit/a6de872))
- **NaiveConfig:** Move global styles to assets ([18c274d](https://github.com/becem-gharbi/nuxt-naiveui/commit/18c274d))
- **NaiveNavbar:** Remove conditional rendering based on menuOptions's length ([f1d2b42](https://github.com/becem-gharbi/nuxt-naiveui/commit/f1d2b42))

### 📖 Documentation

- Update Usage section ([6c78d65](https://github.com/becem-gharbi/nuxt-naiveui/commit/6c78d65))

### 🌊 Types

- Fix nuxi typecheck errors ([eed57a0](https://github.com/becem-gharbi/nuxt-naiveui/commit/eed57a0))
- **volar:** Push naive types via preferences only ([74194f3](https://github.com/becem-gharbi/nuxt-naiveui/commit/74194f3))

### 🏡 Chore

- Upgrade dependencies ([fa039d1](https://github.com/becem-gharbi/nuxt-naiveui/commit/fa039d1))
- Fix ESLint issues ([4edeab2](https://github.com/becem-gharbi/nuxt-naiveui/commit/4edeab2))
- Add benchmark initial ([71534fa](https://github.com/becem-gharbi/nuxt-naiveui/commit/71534fa))
- Upgrade nuxt ([6828f29](https://github.com/becem-gharbi/nuxt-naiveui/commit/6828f29))
- Remove benchmark ([3d5846f](https://github.com/becem-gharbi/nuxt-naiveui/commit/3d5846f))
- Bump version to 1.4 ([f591029](https://github.com/becem-gharbi/nuxt-naiveui/commit/f591029))

### ❤️ Contributors

- Becem Gharbi <becem.gharbi@live.com>
- Tobias Diez <code@tobiasdiez.com>

## v1.3.1

[compare changes](https://github.com/becem-gharbi/nuxt-naiveui/compare/v1.2.7...v1.3.1)

### 🩹 Fixes

- Nuxt 3.7 support ([31271ce](https://github.com/becem-gharbi/nuxt-naiveui/commit/31271ce))

### 🏡 Chore

- Sync lock ([2beb529](https://github.com/becem-gharbi/nuxt-naiveui/commit/2beb529))

### ❤️ Contributors

- Harlan Wilton ([@harlan-zw](http://github.com/harlan-zw))

## v1.2.7

[compare changes](https://github.com/becem-gharbi/nuxt-naiveui/compare/v1.2.6...v1.2.7)

### 🩹 Fixes

- Fixes types generation with nuxt v3.7 (becem-gharbi/nuxt-naiveui#15) ([#15](https://github.com/becem-gharbi/nuxt-naiveui/issues/15))
- Add missing style tags on ssr (related to nuxt 3.7) ([8d4769d](https://github.com/becem-gharbi/nuxt-naiveui/commit/8d4769d))

### 🏡 Chore

- Upgrade nuxt to v3.7 ([2dcc191](https://github.com/becem-gharbi/nuxt-naiveui/commit/2dcc191))
- Strict nuxt compatibility to >=3.7 ([3987893](https://github.com/becem-gharbi/nuxt-naiveui/commit/3987893))

### ❤️ Contributors

- Becem Gharbi <becem.gharbi@live.com>
- Sanjay Soundarajan <sanjay.16@live.com>

## v1.2.6

[compare changes](https://github.com/becem-gharbi/nuxt-naiveui/compare/v1.2.5...v1.2.6)

### 🩹 Fixes

- **colorMode:** Replace session cookie with long-lived cookie ([b89eff4](https://github.com/becem-gharbi/nuxt-naiveui/commit/b89eff4))

### 🏡 Chore

- Set tag to latest ([cc9ee29](https://github.com/becem-gharbi/nuxt-naiveui/commit/cc9ee29))

### ❤️  Contributors

- Becem Gharbi <becem.gharbi@live.com>

## v1.2.5

[compare changes](https://github.com/becem-gharbi/nuxt-naiveui/compare/v1.2.4...v1.2.5)

### 🩹 Fixes

- **colorMode:** Wait until suspense resolved to set colorMode ([841dde5](https://github.com/becem-gharbi/nuxt-naiveui/commit/841dde5))

### ❤️  Contributors

- Becem Gharbi <becem.gharbi@live.com>

## v1.2.4

[compare changes](https://github.com/becem-gharbi/nuxt-naiveui/compare/v1.2.3...v1.2.4)

### 🩹 Fixes

- **colorMode:** Wait until suspense resolved to set forced colorMode ([bc36150](https://github.com/becem-gharbi/nuxt-naiveui/commit/bc36150))

### 💅 Refactors

- Use #imports instead of relative paths ([57135af](https://github.com/becem-gharbi/nuxt-naiveui/commit/57135af))

### 🏡 Chore

- Update package description ([0d7c882](https://github.com/becem-gharbi/nuxt-naiveui/commit/0d7c882))
- Move plugins under /plugins ([7f67f12](https://github.com/becem-gharbi/nuxt-naiveui/commit/7f67f12))
- Set package tag to latest ([f240574](https://github.com/becem-gharbi/nuxt-naiveui/commit/f240574))

### ❤️  Contributors

- Becem Gharbi <becem.gharbi@live.com>

## v1.2.3

[compare changes](https://github.com/becem-gharbi/nuxt-naiveui/compare/v1.2.2...v1.2.3)

### 🩹 Fixes

- **n-button:** Fix unapplied  hover state ([47605cb](https://github.com/becem-gharbi/nuxt-naiveui/commit/47605cb))

### 🏡 Chore

- Upgrade dependencies ([85778ec](https://github.com/becem-gharbi/nuxt-naiveui/commit/85778ec))

### ❤️  Contributors

- Becem Gharbi <becem.gharbi@live.com>

## v1.2.2

[compare changes](https://github.com/becem-gharbi/nuxt-naiveui/compare/v1.2.1...v1.2.2)

### 🩹 Fixes

- Solve NButton bg color conflict with tailwind in prod ([6fd509c](https://github.com/becem-gharbi/nuxt-naiveui/commit/6fd509c))

### 📖 Documentation

- Fix fontfamily config ([fec3db0](https://github.com/becem-gharbi/nuxt-naiveui/commit/fec3db0))

### 🏡 Chore

- Upgrade dependencies ([e753428](https://github.com/becem-gharbi/nuxt-naiveui/commit/e753428))

### ❤️  Contributors

- Becem Gharbi <becem.gharbi@live.com>
- Tobias Diez <code@tobiasdiez.com>

## v1.2.1

[compare changes](https://github.com/becem-gharbi/nuxt-naiveui/compare/v1.2.0...v1.2.1)

### 🩹 Fixes

- **useNaiveForm:** Set edited to false on submit success ([802bfe5](https://github.com/becem-gharbi/nuxt-naiveui/commit/802bfe5))
- **NaiveColorModeSwitch:** Add a fallback icon ([3b34dcd](https://github.com/becem-gharbi/nuxt-naiveui/commit/3b34dcd))
- **NaiveNavbar:** Set active path to page's root path ([59fb6d1](https://github.com/becem-gharbi/nuxt-naiveui/commit/59fb6d1))
- **NaiveTabbar:** Set active path to page's root path ([a9d8a04](https://github.com/becem-gharbi/nuxt-naiveui/commit/a9d8a04))

### 💅 Refactors

- **NaiveNavbar:** Remove adaptive behaviour ([7660a85](https://github.com/becem-gharbi/nuxt-naiveui/commit/7660a85))
- **NaiveTabbar:** Remove adaptive behaviour ([88fb7b9](https://github.com/becem-gharbi/nuxt-naiveui/commit/88fb7b9))

### 🏡 Chore

- Configure Renovate ([532578f](https://github.com/becem-gharbi/nuxt-naiveui/commit/532578f))
- Upgrade dependencies ([3cd0e72](https://github.com/becem-gharbi/nuxt-naiveui/commit/3cd0e72))
- **playground:** Add tailwindCSS ([41bb480](https://github.com/becem-gharbi/nuxt-naiveui/commit/41bb480))
- **readme:** Set tailwind color mode integration snippet in ts ([dc01e04](https://github.com/becem-gharbi/nuxt-naiveui/commit/dc01e04))

### ❤️  Contributors

- Becem Gharbi ([@becem-gharbi](http://github.com/becem-gharbi))

## v1.2.0

[compare changes](https://github.com/becem-gharbi/nuxt-naiveui/compare/v1.1.3...v1.2.0)


### 🚀 Enhancements

  - Add reset method to useNaiveForm ([a553396](https://github.com/becem-gharbi/nuxt-naiveui/commit/a553396))
  - Add edited variable to useNaiveForm ([1483dd3](https://github.com/becem-gharbi/nuxt-naiveui/commit/1483dd3))

### 🩹 Fixes

  - Remove logs errors on invalid form submit ([b36850e](https://github.com/becem-gharbi/nuxt-naiveui/commit/b36850e))
  - **navbar:** Update active item on route change ([64fcddb](https://github.com/becem-gharbi/nuxt-naiveui/commit/64fcddb))

### 💅 Refactors

  - Set tabs font size to 16px on mobileOrTablet ([6df60d6](https://github.com/becem-gharbi/nuxt-naiveui/commit/6df60d6))

### ❤️  Contributors

- Becem Gharbi ([@becem-gharbi](http://github.com/becem-gharbi))

## v1.1.3

[compare changes](https://github.com/becem-gharbi/nuxt-naiveui/compare/v1.1.2...v1.1.3)


### 🩹 Fixes

  - **navbar:** Center menu relative to page ([106c730](https://github.com/becem-gharbi/nuxt-naiveui/commit/106c730))

### ❤️  Contributors

- Becem Gharbi ([@becem-gharbi](http://github.com/becem-gharbi))

## v1.1.2

[compare changes](https://github.com/becem-gharbi/nuxt-naiveui/compare/v1.1.1...v1.1.2)


### 📖 Documentation

  - Remove body unusable note ([d781d3b](https://github.com/becem-gharbi/nuxt-naiveui/commit/d781d3b))

### 🏡 Chore

  - Upgrade dependecies ([bc1bd42](https://github.com/becem-gharbi/nuxt-naiveui/commit/bc1bd42))

### ❤️  Contributors

- Becem Gharbi ([@becem-gharbi](http://github.com/becem-gharbi))

## v1.1.1

[compare changes](https://github.com/becem-gharbi/nuxt-naiveui/compare/v1.1.0...v1.1.1)


### 🩹 Fixes

  - Fix extends base type resolver ([ceb0b1d](https://github.com/becem-gharbi/nuxt-naiveui/commit/ceb0b1d))

### ❤️  Contributors

- Becem-gharbi

## v1.1.0

[compare changes](https://github.com/becem-gharbi/nuxt-naiveui/compare/v1.0.11...v1.1.0)


### 🚀 Enhancements

  - Set NaiveColorModeSwitch props as NButton for typed fallthrough ([f4f62fd](https://github.com/becem-gharbi/nuxt-naiveui/commit/f4f62fd))

### 🩹 Fixes

  - Define NTooltip colors on dark mode ([03f0263](https://github.com/becem-gharbi/nuxt-naiveui/commit/03f0263))
  - Set NSlider indicator color on dark theme ([311818f](https://github.com/becem-gharbi/nuxt-naiveui/commit/311818f))

### 📖 Documentation

  - Display total downloads ([ea82008](https://github.com/becem-gharbi/nuxt-naiveui/commit/ea82008))

### 🏡 Chore

  - Update deps ([bd54efe](https://github.com/becem-gharbi/nuxt-naiveui/commit/bd54efe))

### ❤️  Contributors

- Becem-gharbi

## v1.0.11

[compare changes](https://github.com/becem-gharbi/nuxt-naiveui/compare/v1.0.10...v1.0.11)


### 🩹 Fixes

  - **naivenavbar:** Nav layout ([46355ed](https://github.com/becem-gharbi/nuxt-naiveui/commit/46355ed))

### ❤️  Contributors

- Becem-gharbi

## v1.0.10

[compare changes](https://github.com/becem-gharbi/nuxt-naiveui/compare/v1.0.9...v1.0.10)


### 🩹 Fixes

  - Remove class light in html tag ([9583360](https://github.com/becem-gharbi/nuxt-naiveui/commit/9583360))
  - Remove undefined global styles ([c86f116](https://github.com/becem-gharbi/nuxt-naiveui/commit/c86f116))

### 💅 Refactors

  - Display mobileOrTablet components based on media query only ([c82e050](https://github.com/becem-gharbi/nuxt-naiveui/commit/c82e050))
  - **naivenavbar:** Set default drawer width to 100% ([cc45ff9](https://github.com/becem-gharbi/nuxt-naiveui/commit/cc45ff9))

### 📖 Documentation

  - Update README ([89f00f1](https://github.com/becem-gharbi/nuxt-naiveui/commit/89f00f1))

### 🏡 Chore

  - Remove demo app ([bbb2bd1](https://github.com/becem-gharbi/nuxt-naiveui/commit/bbb2bd1))

### ❤️  Contributors

- Becem-gharbi

## v1.0.9

[compare changes](https://github.com/becem-gharbi/nuxt-naiveui/compare/v1.0.8...v1.0.9)


### 💅 Refactors

  - Watch color mode changes on app mounted hook ([a2b8593](https://github.com/becem-gharbi/nuxt-naiveui/commit/a2b8593))

### 📖 Documentation

  - Add caveats to README ([be7d7a3](https://github.com/becem-gharbi/nuxt-naiveui/commit/be7d7a3))

### ❤️  Contributors

- Becem-gharbi

## v1.0.8

[compare changes](https://github.com/becem-gharbi/nuxt-naiveui/compare/v1.0.7...v1.0.8)


### 🩹 Fixes

  - Load device specific components conditionally ([941c4e4](https://github.com/becem-gharbi/nuxt-naiveui/commit/941c4e4))

### 🏡 Chore

  - Upgrade demo app deps ([a913011](https://github.com/becem-gharbi/nuxt-naiveui/commit/a913011))

### ❤️  Contributors

- Becem-gharbi

## v1.0.7

[compare changes](https://github.com/becem-gharbi/nuxt-naiveui/compare/v1.0.6...v1.0.7)


### 🩹 Fixes

  - Set watchEffect client side only ([ef511be](https://github.com/becem-gharbi/nuxt-naiveui/commit/ef511be))

### ❤️  Contributors

- Becem-gharbi

## v1.0.6

[compare changes](https://github.com/becem-gharbi/nuxt-naiveui/compare/v1.0.5...v1.0.6)


### 🩹 Fixes

  - Force new release ([a75134e](https://github.com/becem-gharbi/nuxt-naiveui/commit/a75134e))
  - Update n-config-provider to fix mismatch on SSG ([b48e4f0](https://github.com/becem-gharbi/nuxt-naiveui/commit/b48e4f0))
  - Set NaiveNavbar & NaiveTabbar to responsive, fix mismatch on SSG ([c03a175](https://github.com/becem-gharbi/nuxt-naiveui/commit/c03a175))

### 💅 Refactors

  - Use watchEffect in colorMode plugin ([f301cf7](https://github.com/becem-gharbi/nuxt-naiveui/commit/f301cf7))
  - Catch NaiveIcon errors ([bf1c72e](https://github.com/becem-gharbi/nuxt-naiveui/commit/bf1c72e))

### 📖 Documentation

  - Update readme ([c54bf68](https://github.com/becem-gharbi/nuxt-naiveui/commit/c54bf68))

### ❤️  Contributors

- Becem-gharbi

## v1.0.5

[compare changes](https://github.com/becem-gharbi/nuxt-naiveui/compare/v1.0.0...v1.0.5)


### 🏡 Chore

  - Remove semantic-release & github workflow ([bd4fa5d](https://github.com/becem-gharbi/nuxt-naiveui/commit/bd4fa5d))

### ❤️  Contributors

- Becem-gharbi

