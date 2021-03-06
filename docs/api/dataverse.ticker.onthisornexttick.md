<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@theatre/dataverse](./dataverse.md) &gt; [Ticker](./dataverse.ticker.md) &gt; [onThisOrNextTick](./dataverse.ticker.onthisornexttick.md)

## Ticker.onThisOrNextTick() method

Registers for fn to be called either on this tick or the next tick.

If registerSideEffect() is called while Ticker.tick() is running, the side effect \_will\_ be called within the running tick. If you don't want this behavior, you can use registerSideEffectForNextTick().

Note that fn will be added to a Set(). Which means, if you call registerSideEffect(fn) with the same fn twice in a single tick, it'll only run once.

<b>Signature:</b>

```typescript
onThisOrNextTick(fn: ICallback): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  fn | ICallback |  |

<b>Returns:</b>

void

