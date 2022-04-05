# In Depth

## Projects

A Theatre Project is like a save file that holds all the animations and tweaks that you design in `@theatre/studio`. It is ultimately consumed by `@theatre/core` to run those animations and tweaks.

- All your work in Theatre is organized into Projects.
- A Theatre project is similar to a Project in After Effects, Figma, and other tools – it is a way to organize related work.
- You can create multiple Projects in a single web page, but often one project is sufficient for a whole website.

### `core.getProject()`

This is the main way to create a Project or access an existing one.

<<< @/docs/in-depth/Projects/1.ts

### Exporting

Learn how to export/import Projects, and save them to a repository. Currently explained in the [video tutorial](https://youtu.be/icR9EIS1q34?t=1383).

### Project state

The Project's state is the actual save file holding the data of your Project.

- All of the tweaks and animations that you create with Theatre are considered the project's state.
- `@theatre/core` uses project state to run your tweaks and animations.
- `@theatre/studio` is basically an editor for project state.
- A project's state is a JSON object.
- You can manually tweak your project's state if you want to. That's explained [in the video tutorial](https://youtu.be/icR9EIS1q34?t=1734).

## Sheets

A Sheet is analogous to a component in React, or a composition in After Effects. It contains a number of [Objects](#objects), and together, they comprise a self-contained unit of animation.

A [Project](#projects) can have multiple sheets. Each sheet could have multiple instances running at the same time.

::: details You can create multiple instances from a single Sheet

Here is an example of 3 instances of the same Sheet running at the same time. Each white box on the screen is attached to a different instance of the same Sheet. They all have the same animation Sequence, but the animation runs for each of them independently.

<VideoWithDescription src="/in-depth/multi-instance-preview.mp4">We have three copies of a white rectangle, and clicking on each makes it play an animation independently of the others. Two or more boxes may be playing the animation at the same time as well, with different progressions.</VideoWithDescription>

The video tutorial has [a section](https://youtu.be/icR9EIS1q34?t=3343) on multiple sheet instances.
:::

::: details Why is it called a 'Sheet?'

Conceptually, they're similar to 'sheets' in spreadsheets. A Sheet in Theatre contains **reactive values**, including animated sequences, or scripted values written in code. Also _(coming soon)_ these values can be driven by formulas, scripts, and constraints.

<VideoWithDescription src="/in-depth/spreadsheet.mp4">A screen recording of using a spreadsheet to assign values to two cells, and have the third cell's value be a formula using the first two cells' values.</VideoWithDescription>

:::

## Sequences

Each [Sheet](#sheets) has a single Sequence <sup>[(multi-Sequence Sheets are coming)](#multi-sequence-sheets)</sup>. The Sequence can be played or manually scrubbed in order to create time-driven animations, parallax effects, or more.

### Accessing the sequence

```ts
const sequence = sheet.sequence;
```

### `sequence.position`

Each Sequence has a `position` property that determines the amount of progress through the animation.

- If your sequence is time-based, then you can consider `position` to be in the unit of seconds. So, `position=60` would mean `1` minute of progression through the sequence.
- If your sequence is controlled by a dimension other than time (such as parallax effects), then the unit of `position` is determined by you. From Theatre's perspective, `sequence.position` is unit-less.

Usage:

<<< @/docs/in-depth/Sequences/examples.ts#position

### `sequence.play()`

This method is used in time-based Sequences. It basically plays the Sequence.

<<< @/docs/in-depth/Sequences/examples.ts#play-basic

The playback is customizable:

<<< @/docs/in-depth/Sequences/examples.ts#play-custom

### `sequence.pause()`

The counterpart to [`sequence.play()`](#sequence-play). It won't have an effect if no playback is running.

<<< @/docs/in-depth/Sequences/examples.ts#pause

### `sequence.attachAudio()`

Attaches an audio track to the Sequence. Read more in [Sound and Music](#sound-and-music).

### Planned features

#### Multi-sequence sheets

As of Theatre.js 0.4, each [Sheet](#sheets) has a single Sequence. We plan to support multiple Sequences in the future. Until then, you can divide your Sequence into multiple time ranges to simulate multiple Sequences.

If your use-case requires multiple Sequences, [let us know in the Discord server](https://discord.gg/bm9f8F9Y9N) or [open an issue](https://github.com/theatre-js/theatre/issues/new) so we can prioritize it.

#### Listening to playback state changes

We're working on exposing the playback state through events. Feel free to [chime in](https://github.com/theatre-js/theatre/issues/20) on this feature.

## Sound and Music

You can attach audio tracks to Sequences using `sequence.attachAudio()`. Theatre will then play the audio track every time the Sequence is played with the timings in sync.

<<< @/docs/in-depth/Sequences/attachAudio.ts#simple

In the above example, Theatre will:

1. [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) the audio file.
2. Create a [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) contex.

   👉 _If the browser is [blocking](https://developer.chrome.com/blog/autoplay/#webaudio) the audio context, Theatre will wait for a user gesture (eg. a click/touch/keydown) to initiate it. It's best to prompt the user to initiate audio playback by, for example, showing a `<button>Start</button>`. Once the user clicks on that button (or anywhere else), Theatre will initiate the audio context._

3. [Decode](https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData) the audio.
4. Resolve the returned Promise. After this, when you call `sequence.play()`, the audio track will play simultaneously and in sync.

If you would like to have more control over loading or the audio setup, you could provide your own audio graph.

<<< @/docs/in-depth/Sequences/attachAudio.ts#provide-graph

Or you re-use the Sequence's audio graph.

<<< @/docs/in-depth/Sequences/attachAudio.ts#reuse-graph

## Objects

Objects in Theatre are usually made to represent actual visual elements on the screen, such as a `<div>`, or a THREE.js `Object3D`.

- Calling `sheet.object("box", {prop1: 0})` returns an object with:
  - a `key` of `"box"`
  - a single prop called `prop1`
    - whose type is a number (ie. cannot be a string or boolean, etc.)
    - whose default value is `0`.

### Reading the values of objects

There are multiple ways to read the values of an Object

#### Static reads

You can read the _latest_ value of an Object through `obj.value`:

```ts
const obj = sheet.object("box", { x: 0 });
console.log(obj.value.x); // prints 0 or the current overridden value of x
```

#### Using `obj.onValuesChange()`

The method `obj.onValuesChange()` allows you to react to the values of the Object changing:

```ts
const obj = sheet.object("box", { x: 0, y: 0 });
// calls the callback every time any of the values change
const unsubscribe = obj.onValuesChange((newValues) => {
  // note that this will print the value of `x` even if only `y` has changed
  console.log(newValues.x);
});

// stop listening after 5 seconds
setTimeout(unsubscribe, 5000);
```

#### Using `obj.props`

If you wish to listen to only a certain set of values changing, you can use `obj.props` as a pointer. More documentation on this coming soon.

## Prop types

Each Object has one or more props (just like a React component). Once you define your props, you can start tweaking them in the studio.

Read more about props the [getting started guide](/getting-started/#create-an-object) or see how to use them in the [video tutorial](https://youtu.be/icR9EIS1q34?t=1942).

<sup> In the examples below, the variable `t` comes from `import {types as t} from '@theatre/core'`.</sup>

- **Numbers**

  - A floating point number with a default value of `0`

    ```ts
    // shorthand notation
    const obj = sheet.object("box", {
      x: 0,
    });

    // non-shorthand notation
    const obj = sheet.object("box", {
      x: t.number(0),
    });
    ```

    <VideoWithDescription cls="small"  src="/in-depth/prop-types/number/basic.mp4">A prop named "x" is displayed. The user nudges the prop by clicking and dragging, which increments/decrements its value by 1.0 for each pixel of dragging.</VideoWithDescription>

  - A number with a `range`

    ```ts
    const obj = sheet.object("box", {
      x: t.number(0, {
        range: [0, 20],
      }),
    });
    ```

    <VideoWithDescription cls="small"  src="/in-depth/prop-types/number/range.mp4">Like the video above, except a visual indicator grows what fraction of the range of 0..20 the current value represents.</VideoWithDescription>

  - A custom `nudgeMultiplier` is useful if you want to control how fast the number jumps as the user nudges it

    ```ts
    const obj = sheet.object("box", {
      x: t.number(0, {
        nudgeMultiplier: 0.25,
      }),
    });
    ```

    <VideoWithDescription cls="small" src="/in-depth/prop-types/number/nudgeMultiplier.mp4">Like the video above, except as the user nudges the prop, its value jumps in 0.25 increments, like 0, 0.25, 0.5, 0.75, and so on.</VideoWithDescription>

  - Using a `nudgeFn` is useful if you want to fully customize the nudging behavior

    ```ts
    const x = t.number({
      nudgeFn: (
        // the mouse movement (in pixels)
        deltaX: number,
        // the movement as a fraction of the width of the number editor's input
        deltaFraction: number,
        // A multiplier that's usually 1, but might be another number if user wants to nudge slower/faster
        magnitude: number,
        // the configuration of the number
        config: { nudgeMultiplier?: number; range?: [number, number] }
      ): number => {
        // use any of the arguments to determine the correct nudging amount
        return deltaX * magnitude;
      },
    });

    const obj = sheet.object("box", { x });
    ```

- **Strings**

  - A string with a default value of `"Animation loading"`.

    ```ts
    // shorthand:
    const obj = sheet.object("box", { message: "Animation loading" });

    // with a label:
    const obj = sheet.object("box", {
      message: t.string("Animation Loading", {
        label: "The Message",
      }),
    });
    ```

- **Booleans**

  - A boolean prop type with a default value of `true`.

  ```ts
  // shorthand:
  const obj = sheet.object("key", { isOn: true });

  // with a label:
  const obj = sheet.object("key", {
    isOn: t.boolean(true, {
      label: "Enabled",
    }),
  });
  ```

- **Compounds**

  - A compound prop type (basically an arbitrary JavaScript object) with a default value of `{ x: 0, y: 0 }`.

  ```ts
  // shorthand:
  const obj = sheet.object("box", { position: { x: 0, y: 0 } });

  // with additional options:
  const obj = sheet.object("box", {
    position: t.compound(
      { x: 0, y: 0 },
      // a custom label for the prop:
      { label: "Position" }
    ),
  });
  ```

- **String Literals**

  - A string which is limited to a given set of values, useful for building menus or radio buttons.

  ```ts
  // basic usage:
  const obj = sheet.object("box", {
    light: t.stringLiteral("r", { r: "Red", g: "Green" }),
  });

  // shown as a radio switch with a custom label:
  const obj = sheet.object(
    "box",
    {
      light: t.stringLiteral("r", { r: "Red", g: "Green" }),
    },
    { as: "switch", label: "Street Light" }
  );
  ```

## Extensions

Read about extensions [here](../extensions/README.md).

## Editor intellisense

The libraries come bundled with typescript definitions with [TSDoc](https://tsdoc.org) comments, so whether you're using JavaScript or TypeScript, you should be able to use autocomplete and API comments. If you're using JavaScript, consider adding some [JSDoc](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html) comments here and there to further enhance the editing experience.

<VideoWithDescription src="/in-depth/tsdoc.mp4">A screen recording showing the API documentation displayed in a code editor.</VideoWithDescription>

<sub>Note that Typescript is not required to use Theatre.js or see its API docs.</sub>

---

This documentation is a work in progress. In the meantime, check [the video tutorial](https://www.youtube.com/watch?v=icR9EIS1q34) which covers much of Theatre.js.
