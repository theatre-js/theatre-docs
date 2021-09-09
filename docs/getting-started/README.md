---
title: Getting Started
---

# Getting started

## Before we start

Theatre comes as npm packages, so we need a module [bundler](https://github.com/topics/module-bundler) like [webpack](https://webpack.js.org) or [esbuild](https://esbuild.github.io). [CodeSandbox](https://codesandbox.io) would also work when [configured](#note-on-codesandbox).

## Install Theatre

Theatre comes in two packages: 
* [`@theatre/core`](https://npmjs.com/package/@theatre/core), the core animation library 
* [`@theatre/studio`](https://npmjs.com/package/@theatre/studio), the visual editor.

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

## Create a Project

Next we'll call `core.getProject()` which creates a new [Project](/in-depth/#projects) or returns it if it already exists.

<<< @/docs/getting-started/imp1.ts#project{7-8}

## Create a Sheet

An animation in Theatre.js is scoped to a [Sheet](../in-depth/#sheets), which we'll create next.

<<< @/docs/getting-started/imp1.ts#sheet{10-11}

A [Sheet](/in-depth/#shets) is analogous to a component in React, or a composition in After Effects. It contains a number of objects, and together, they comprise a self-contained unit of animation.

A project can 

## Footnotes

##### Note on CodeSandbox

If you're using CodeSandbox, make sure to create a `sandbox.config.json` file and enable `Hard Reload on Change`.

```json
{
  "hardReloadOnChange": true,
}
```