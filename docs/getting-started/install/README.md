---
title: ⤓ Install Theatre.js
prev: /getting-started/
next: /getting-started/basics/
---

# ⤓ Install Theatre.js

## Prerequisites

This page describes how to install and import Theatre.js into a web project with a [bundler](https://github.com/topics/module-bundler). If you don't already have a project with a bundler set up then (no worries) you can

- follow the getting started guides of a bundler like [webpack](https://webpack.js.org/guides/getting-started), [esbuild](https://esbuild.github.io/getting-started/) or [Parcel](https://parceljs.org/getting-started/webapp/); or
- download a starter project that includes a bundler, <a download href="/try-it-out/theatreHelloWorld.zip">⤓theatreHelloWorld.zip</a>; or
- proceed _without_ a bundler by following the [Theatre.js quick start page](/getting-started/try-it-out/) instead.

Got your bundler set up? Let's go!

## Install Theatre

::: details See this step in the video tutorial

<iframe width="560" height="315" src="https://www.youtube.com/embed/icR9EIS1q34?start=539" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

:::

Fist, navigate to the folder of the project that has a bundler set up in the terminal. Make sure your dependencies are up to date with `npm i`.

Now, Theatre.js comes in two packages:

- [`@theatre/core`](https://npmjs.com/package/@theatre/core), the core animation library; and
- [`@theatre/studio`](https://npmjs.com/package/@theatre/studio), the visual editor.

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

Then add `@theatre/studio` as a dev dependency. `@theatre/studio` is added as a dev dependency since we only need it during development to create animations.

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

## "Hello World": Import and run Theatre.js

Here's a minimal Theatre.js "hello world" html page and script. Don't worry about what a project, sheet, or object is just yet, we'll break that down in the next part of the guide.

```html
<!-- dist/index.html -->
<body>
    <script type="text/javascript" src="./index.js">
</body>
```

```js
// src/index.js
import { getProject } from "@theatre/core";
import studio from "@theatre/studio";

// initialize the studio so the editing tools will show up on the screen
studio.initialize();

// create a project, sheet, and object
const objValues = { foo: 0, bar: true, baz: "A string" };
const obj = getProject("First project")
  .sheet("Sheet")
  .object("First Object", objValues);
```

Now, make sure your bundler runs so that `src/index.js` is built into `dist/index.js`. Once the bundler has finished bundling, navigate to `dist/index.html` in your browser. You should see:

<VideoWithDescription src="/getting-started/scene-and-object.mp4">An outline of the graph appears once the pointer moves to the left side of the page. The outline says "First Project / Scene: default / First object". The user selects "First object", after which the Details Editor panel shows up on the left. The Details Editor panel shows the three props, one a number, the other a checkbox, and the other a text input box. The user then changes these values by clicking/dragging, or entering a value via keyboard.</VideoWithDescription>

Getting stuck or want some help? No worries, join our [Discord Community](https://discord.gg/bm9f8F9Y9N) or try the [Theatre.js quick start page](/getting-started/try-it-out/) instead of using a bundler. Otherwise, you've now got Theatre.js installed, imported, and up and running! Feel free to start playing around or [→ continue on in the guide](/getting-started/basics/) to learn more about projects, sheets, objects and animation.
