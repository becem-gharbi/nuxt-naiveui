# NaiveTabbar

This component can be used for mobile & tablet navigation.

```ts
interface TabbarRoute {
  label: string;
  iconSelected: string;
  iconUnselected: string;
  to: RouteLocationRaw;
}
```

### Props

| **Name** | **Type**         | **Default** | **Note**                           |
| -------- | ---------------- | ----------- | ---------------------------------- |
| routes   | TabbarRoute      | \[ ]        | Recommended to not exceed 5 routes |
| iconSize | number \| string | 24          |                                    |
