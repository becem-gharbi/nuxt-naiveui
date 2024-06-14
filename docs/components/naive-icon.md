# NaiveIcon

This component is a wrapper of [Iconify Vue](https://iconify.design/getting-started/) which provides a collection of +100 icon sets. [Icônes](https://icones.js.org) can be used for exploration and instant search. 

::: tip Info
The module uses the `Phosphor` icon set.
:::

### Props

| **Name**     | **Type**         | **Default**        | **Note**                        |
| ------------ | ---------------- | ------------------ | ------------------------------- |
| name         | string           |                    | This property is reactive       |
| size         | number \| string | `naiveui.iconSize` |                                 |
| iconColor    | string           |                    | Color of icon                   |
| color        | string           |                    | Background color of the wrapper |
| borderRadius | number           |                    | Border radius of the wrapper    |

### Offline

By default, icons are fetched at runtime from the Iconify API. By setting the `iconDownload` config option to `true`, icons can be downloaded and stored locally in the `public/iconify` directory. This takes place only at production build. The advantages are:

- ✔️ On the server side no need for network calls thus better loading time.
- ✔️ Takes benefit from Iconify client & server side caching (localStorage & memory).
- ✔️ Build offline applications.

For the module to find the used icons in your application, first it needs to collect all the existing icon sets. This takes place via a fetch request to `https://raw.githubusercontent.com/iconify/icon-sets/master/collections.json`. In case of network access limitations, it's possible to provide a custom proxy URL via the `iconCollectionsUrl` config option.
