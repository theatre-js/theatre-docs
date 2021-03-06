<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@theatre/core](./core.md) &gt; [types](./core.types.md) &gt; [stringLiteral](./core.types.stringliteral.md)

## types.stringLiteral() function

A stringLiteral prop type, useful for building menus or radio buttons.

<b>Signature:</b>

```typescript
export declare function stringLiteral<Opts extends {
    [key in string]: string;
}>(
defaultValue: Extract<keyof Opts, string>, 
options: Opts, 
opts?: {
    as?: 'menu' | 'switch';
} & PropTypeConfigOpts): PropTypeConfig_StringLiteral<Extract<keyof Opts, string>>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  defaultValue | Extract&lt;keyof Opts, string&gt; |  |
|  options | Opts |  |
|  opts | { as?: 'menu' \| 'switch'; } &amp; PropTypeConfigOpts |  |

<b>Returns:</b>

PropTypeConfig\_StringLiteral&lt;Extract&lt;keyof Opts, string&gt;&gt;

A stringLiteral prop type

## Example

Usage:

```ts
// Basic usage
const obj = sheet.object('key', {
  light: t.stringLiteral("r", {r: "Red", "g": "Green"})
})

// Shown as a radio switch with a custom label
const obj = sheet.object('key', {
  light: t.stringLiteral("r", {r: "Red", "g": "Green"})
}, {as: "switch", label: "Street Light"})
```

