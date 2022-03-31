---
title: Install Theatre.js with a Bundler
next: /basics/
---

Theatre comes as npm packages, so we need a module [bundler](https://github.com/topics/module-bundler) like [webpack](https://webpack.js.org) or [esbuild](https://esbuild.github.io). [CodeSandbox](https://codesandbox.io) would also work when [configured](#note-on-codesandbox).

## Install Theatre

::: details See this step in the video tutorial

<iframe width="560" height="315" src="https://www.youtube.com/embed/icR9EIS1q34?start=539" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

:::

Theatre comes in two packages:

- [`@theatre/core`](https://npmjs.com/package/@theatre/core), the core animation library
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
