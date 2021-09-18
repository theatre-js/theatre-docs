# In Depth

## Projects

A Theatre `Project` is like a save file that holds all the animations and tweaks made in `@theatre/studio`. It is ultimately consumed by `@theatre/core` to run those animations and tweaks.

* All your work in Theatre is organized into `Project`s.
* A Theatre `Project` is similar to a project in After Effects, Figma, and other tools – it is a way to organize related work.
* You can create multiple `Project`s in a single web page, but often one `Project` is sufficient for a whole website.

### `core.getProject()`

This is the main way to create a project or access an existing one. 

<<< @/docs/in-depth/Projects/1.ts

### Exporting

Learn how to export/import projects, and save them to a repository. Currently explained in the [video tutorial](https://youtu.be/icR9EIS1q34?t=1383).

### Project state

The Project's state is the actual save file holding the data of your project.

* All of the tweaks and animations that you create with Theatre are considered the project's state.
* `@theatre/core` uses Project State to run your tweaks and animations.
* `@theatre/studio` is basically an editor for Project State.
* A project's state is a JSON object.
* You can manually tweak your project's state if you want to. That's explained [in the video tutorial](https://youtu.be/icR9EIS1q34?t=1734).

## Sheets

A Sheet is analogous to a component in React, or a composition in After Effects. It contains a number of [Objects](#objects), and together, they comprise a self-contained unit of animation.

A [Project](#projects) can have multiple Sheets. Each Sheet could have multiple instances running at the same time.

::: details You can create mutilple instances from a single Sheet

Here is an example of 3 instances of the same sheet running at the same time. Each white box on the screen is attached to a different instance of the same sheet. They all have the same sequence of animation, but the animation runs for each of them independently.

<VideoWithDescription src="/in-depth/multi-instance-preview.mp4">We have three copies of a white rectangle, and clicking on each makes it play an animation independently of the others. Two or more boxes may be playing the animation at the same time as well, with different progressions.</VideoWithDescription>

The video tutorial has [a section](https://youtu.be/icR9EIS1q34?t=3343) on multiple Sheet instances.
:::

::: details Why is it called a 'Sheet?'

Conceptually, they're similar to 'sheets' in spreadsheets. A Sheet in Theatre contains **reactive values**, including animated sequences, or scripted values written in code. Also *(coming soon)* these values can be driven by formulas, scripts, and constraints.

<VideoWithDescription src="/in-depth/spreadsheet.mp4">A screen recording of using a spreadsheet to assign values to two cells, and have the third cell's value be a formula using the first two cells' values.</VideoWithDescription>

:::

## Objects

Objects in Theatre are usually made to represent actual visual elements on the screen, such as a `<div>`, or a THREE.js `Object3D`.

* Calling `sheet.object("box", {prop1: 0})` returns an Object with:
  *  a `key` of `"box"`
  *  a single prop called `prop1`
     *  whose type is a number (ie. cannot be a string or boolean, etc.)
     *  whose default value is `0`.

### Reading the values of Objects

There are multiple ways to read the values of an Object

#### Static reads

You can read the _latest_ value of an Object through `obj.value`:

```ts
const obj = sheet.object("box", {x: 0})
console.log(obj.value.x) // prints 0 or the current overridden value of x
```

#### Using `obj.onValuesChange()`

The method `obj.onValuesChange()` allows you to react to the values of the object changing:

```ts
const obj = sheet.object("box", {x: 0, y: 0})
// calls the callback every time any of the values change
const unsubscribe = obj.onValuesChange((newValues) => {
  // note that this will print the value of `x` even if only `y` has changed
  console.log(newValues.x)
})

// stop listening after 5 seconds
setTimeout(unsubscribe, 5000)
```

#### Using `obj.props`

If you wish to listen to only a certain set of values changing, you can use `obj.props` as a pointer. More documentation on this coming soon.

## Prop types

Each Object has one or more props (just like a React component). Once you define your props, you can start tweaking them in the studio.

Read more about props the [getting started guide](/getting-started/#create-an-object) or see how to use them in the [video tutorial](https://youtu.be/icR9EIS1q34?t=1942).

<sup> In the examples below, the variable `t` comes from `import {types as t} from '@theatre/core'`.</sup>

* **Numbers**
  * A floating point number with a default value of `0`
    
    ```ts
    // shorthand notation
    const obj = sheet.object("box", {
      x: 0
    })

    // non-shorthand notation
    const obj = sheet.object("box", {
      x: t.number(0)
    })
    ```

    <VideoWithDescription cls="small"  src="/in-depth/prop-types/number/basic.mp4">A prop named "x" is displayed. The user nudges the prop by clicking and dragging, which increments/decrements its value by 1.0 for each pixel of dragging.</VideoWithDescription>
  
  * A number with a `range`

    ```ts
    const obj = sheet.object("box", {
      x: t.number(0, {
        range: [0, 20]
      })
    })
    ```

    <VideoWithDescription cls="small"  src="/in-depth/prop-types/number/range.mp4">Like the video above, except a visual indicator grows what fraction of the range of 0..20 the current value represents.</VideoWithDescription>

  * A custom `nudgeMultiplier` is useful if you want to control how fast the number jumps as the user nudges it
  
    ```ts
    const obj = sheet.object("box", {
        x: t.number(0, {
          nudgeMultiplier: 0.25
        })
      })
      ```

      <VideoWithDescription cls="small" src="/in-depth/prop-types/number/nudgeMultiplier.mp4">Like the video above, except as the user nudges the prop, its value jumps in 0.25 increments, like 0, 0.25, 0.5, 0.75, and so on.</VideoWithDescription>

  * Using a `nudgeFn` is useful if you want to fully customize the nudging behavior

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
        config: {nudgeMultiplier?: number; range?: [number, number]},
      ): number => {
        // use any of the arguments to determine the correct nudging amount
        return deltaX * magnitude
      },
    })

    const obj = sheet.object("box", {x})
    ```

  * **Strings**

    TODO
  * **Booleans**

    TODO
  * **Compounds**

    TODO
  * **String Literals**

    TODO


## Extensions

Theatre can be extended to fit different workflows and tech stacks. Docs on how to build extensions will come soon. In the meantime, check the source code of [`@theatre/r3f`](https://github.com/AriaMinaei/theatre/tree/main/packages/r3f), which is an extension for [React Three Fiber](https://github.com/pmndrs/react-three-fiber).

### Working with Selections

You can read/set the current selection in the outline panel using `studio.selection*` APIs.

TODO

### Contributing to the toolbar

TODO

### Custom panes

TODO

## API

The libraries come bundled with typescript definitions with [TSDoc](https://tsdoc.org) comments. You can explore the API if your editor is configured to display TSDoc comments.


<VideoWithDescription src="/in-depth/tsdoc.mp4">A screen recording showing the API documentation displayed in a code editor.</VideoWithDescription>

<sub>Note that Typescript is not required to use Theatre.js or see its API docs.</sub>


---

This documentation is a work in progress. In the meantime, check [the video tutorial](https://www.youtube.com/watch) which covers much of Theatre.js.

