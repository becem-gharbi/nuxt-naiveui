# NaiveLayoutSidebar

This component can be used for page layout with sidebar. It's based on `naive-ui` [layout](https://www.naiveui.com/en-US/os-theme/components/layout).

```ts
interface MenuLinkRoute {
  label: string;
  icon?: string;
  to?: RouteLocationRaw;
  children?: MenuLinkRoute[];
}
```

### Props

| **Name**        | **Type**                       | **Default** | **Note**                                                                                                    |
| --------------- | ------------------------------ | ----------- | ----------------------------------------------------------------------------------------------------------- |
| nativeScrollbar | boolean                        | false       |                                                                                                             |
| routes          | MenuLinkRoute                  | \[ ]        | The routes for the sidebar                                                                                  |
| drawerRoutes    | MenuLinkRoute                  | \[ ]        | The routes for the drawer                                                                                   |
| drawerClosable  | boolean                        | true        | Whether the drawer content is closable                                                                      |
| drawerWidth     | string \| number               | 100%        |                                                                                                             |
| drawerPlacement | top \| right \| bottom \| left | left        |                                                                                                             |
| toggleIcon      | string                         | `ph:equals` |                                                                                                             |
| togglePlacement | right \| left                  | right       |                                                                                                             |
| sider           | LayoutSiderProps               |             | Passed to `n-layout-sider`, [docs](https://www.naiveui.com/en-US/dark/components/layout#Layout-Sider-Props) |

### Slots

- `start`, placed at the top of the sidebar.
- `end`, placed at the bottom of the sidebar.
- `drawer-header`, placed at the top of the drawer.
- `drawer-footer`, placed at the bottom of the drawer.
- `default`, the content of the page.
