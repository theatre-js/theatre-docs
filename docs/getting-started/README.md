---
title: Getting Started
---

# Getting started

## Video Tutorial

This guide is a work in progress. In the meantime, we've recorded a video tutorial that should quickly get you started with Theatre.js

<iframe width="560" height="315" src="https://www.youtube.com/embed/icR9EIS1q34" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[Click here if the video is not visible](https://www.youtube.com/watch?v=icR9EIS1q34)

## Before we start

Theatre comes as npm packages, so we need a module [bundler](https://github.com/topics/module-bundler) like [webpack](https://webpack.js.org) or [esbuild](https://esbuild.github.io). [CodeSandbox](https://codesandbox.io) would also work when [configured](#note-on-codesandbox).

## Install Theatre

::: details See this step in the video tutorial

<iframe width="560" height="315" src="https://www.youtube.com/embed/icR9EIS1q34?start=539" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

:::

Theatre comes in two packages: 
* [`@theatre/core`](https://npmjs.com/package/@theatre/core), the core animation library. Licensed under the Apache 2.0 license. 
* [`@theatre/studio`](https://npmjs.com/package/@theatre/studio), the visual editor. Licensed under the [AGPLv3](https://github.com/AriaMinaei/theatre/blob/main/theatre/studio/LICENSE). 

Let's add `@theatre/core` as a dependency.

<code-group>
<code-block title="npm">
```bash
$ npm install --save @theatre/core
```
</code-block>

<code-block title="yarn">
```bash
$ yarn add @theatre/core
```
</code-block>

</code-group>


Then add `@theatre/studio` as a dev dependency since we just need it during development.

<code-group>
<code-block title="npm">
```bash
$ npm install --save-dev @theatre/studio
```
</code-block>

<code-block title="yarn">
```bash
$ yarn add -D @theatre/studio
```
</code-block>

</code-group>

## Import Theatre

<<< @/docs/getting-started/imp1.ts#import

## Set up the scene

Next, we'll set up an Object, a Sheet, and a Project.

::: details See this step in the video tutorial

<iframe width="560" height="315" src="https://www.youtube.com/embed/icR9EIS1q34?start=632" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

:::

### Create a Project

Let's call `core.getProject()` which creates a new [Project](/in-depth/#projects) or returns it if it already exists.

<<< @/docs/getting-started/imp1.ts#project

A `Project` in Theatre.js is like a save file, except that its state is initially stored in the browser's local storage. [Later](/in-depth/#exporting) we'll learn how to export this save file to an actual file and put it in a git repo.

### Create a Sheet

An animation in Theatre.js is scoped to a [Sheet](../in-depth/#sheets), which we'll create next.

<<< @/docs/getting-started/imp1.ts#sheet

A [Sheet](/in-depth/#shets) is like a component in React, or a composition in After Effects. It contains a number of objects that are animated together.

We can learn more about Sheets [later](/in-depth/#sheets). For now, let's move on to creating our first object.

### Create an Object

Let's create an [Object](/in-depth/#object) and call it `"First object"`.

<<< @/docs/getting-started/imp1.ts#object

By now we should be able to see our project and sheet and object show up in the outline.

<VideoWithDescription src="/getting-started/scene-and-object.mp4">An outline of the graph appears once the pointer moves to the left side of the page. The outline says "First Project / Scene: default / First object". The user selects "First object", after which the Details Editor panel shows up on the left. The Details Editor panel shows the three props, one a number, the other a checkbox, and the other a text input box. The user then changes these values by clicking/dragging, or entering a value via keyboard.</VideoWithDescription>

## Read the values in code

::: details Learn this step from the video tutorial

<iframe width="560" height="315" src="https://www.youtube.com/embed/icR9EIS1q34?start=898" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

:::

A basic way to read the value of an Object's props is via `object.value`.

<<< @/docs/getting-started/imp1.ts#objectvalue

If you change these values in the UI, and then read `object.value` again, you will see the updated values.

### Listening to changes in values

::: details Learn this step from the video tutorial

<iframe width="560" height="315" src="https://www.youtube.com/embed/icR9EIS1q34?start=931" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

:::

There are a few ways to listen to changes in values. The easiest method `object.onValuesChange()` is probably the easiest.

<<< @/docs/getting-started/imp1.ts#objectonvalueschange

<VideoWithDescription src="/getting-started/onvalueschange.mp4">Continuing from the last video, the console of the devtools in the browser is open. The user changes the values in the Details Editor panel. The value of the numeric prop keeps being logged to the console as the user changes it.</VideoWithDescription>


### Hooking up our object to HTML

::: details Learn this step from the video tutorial

<iframe width="560" height="315" src="https://www.youtube.com/embed/icR9EIS1q34?start=979" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

:::


The `object.onValuesChange()` method allows us to connect our `Object`s to visual elements, like HTML elements, WebGL, or even IOT devices.

<<< @/docs/getting-started/imp1.ts#hooktodiv

## Animating

::: details Learn this step from the video tutorial

<iframe width="560" height="315" src="https://www.youtube.com/embed/icR9EIS1q34?start=1072" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

:::

So far, we've set the values of each prop statically. In order to animate them, we should put them on a sequence.

Right click on the label of the prop `"foo"`, and choose "Sequence."

<VideoWithDescription src="/getting-started/animating-1.mp4">Continuing from the last video, the console of the devtools in the browser is open. The user right-clicks on the numeric prop called "foo", and from the open menu, chooses "Sequence". A sequence editing panel shows up with no keyframes. The user proceeds to create keyframes and scrub through the sequence. As the user change values and play with the keyframes, the value of the prop is getting logged to the console in real time.</VideoWithDescription>

## To be continued

The rest of the guide is currently being written. In the meantime, check out the [video tutorial](https://www.youtube.com/watch?v=icR9EIS1q34).

## Footnotes

##### Note on CodeSandbox

If you're using CodeSandbox, make sure to create a `sandbox.config.json` file and enable `Hard Reload on Change`.

```json
{
  "hardReloadOnChange": true,
}
```
