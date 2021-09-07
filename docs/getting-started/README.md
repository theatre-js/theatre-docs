---
title: Getting Started
---

# Getting started

## Before we start

Theatre comes as npm packages, so we're gonna need a module [bundler](https://github.com/topics/module-bundler) like [webpack](https://webpack.js.org) or [esbuild](https://esbuild.github.io) in order to use it. Alternatively you can online editors such as [CodeSandbox](https://codesandbox.io), but make sure to [configure it properly](#note-on-codesandbox)

## Install Theatre

::: details 📺 Watch this step as a video
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/MxbzbAe-xRo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

:::



Theatre comes in two packages. `@theatre/core`, which is the core animation library and `@theatre/studio`, which is the animation editor UI.

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


Then add `@theatre/studio` as a dev dependency since we only need it during development.

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

At this point, we should be able to see the Studio

## Next steps


### Footnotes

##### Note on CodeSandbox

If you're using CodeSandbox, make sure to create a `sandbox.config.json` file and enable `Hard Reload on Change`.

```json
{
  "hardReloadOnChange": true,
}
```