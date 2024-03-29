---
title: 🚀 Quick start
prev: /getting-started/
next: /getting-started/basics/
---

<div class="custom_article_contents">

**In this article**
[[toc]]

</div>

# 🚀 Quick start

Theatre is framework agnostic and **can be used in any frontend web project**. Theatre can animate DOM elements, THREE.js objects, any JavaScript variable... or even IOT devices. This page gives some ways to play around with Theatre.js or quickly add Theatre.js to your web page.

[[toc]]

## Online playgrounds

If you just want to try Theatre.js, an online playground is the easiest option. Fork or play around with one of the following **starter playgrounds** to get started.

- ["Hello World" CodePen](https://codepen.io/vez/pen/ExowjZV?editors=0010)
- ["Hello World" CodeSandbox](https://codesandbox.io/s/theatre-js-hello-world-c6juys?file=/src/index.js) _(refresh the in-sandbox browser if the example does not show up)_

Once you've gotten comfortable with the Theatre.js animation editor, check out the following cool (and a bit complicated) **examples** of using Theatre.js to animate a 3D visualization in sync with music ( [tutorial video](https://www.youtube.com/watch?v=QoS4gMxwq_4)) and to animate and manipulate an SVG.

- [THREE.js + music synchronization CodeSandbox - Orb shader](https://codesandbox.io/s/orb-shader-7n8j7?file=/src/index.js),
- [THREE.js + music synchronization CodeSandbox - Flower animation](https://codesandbox.io/s/flower-animation-9x0z2?file=/src/index.js)
- [SVG animation](https://codesandbox.io/s/theatrejs-svg-animation-f4dos)

## Download a starter project folder or HTML file

If you want to try out Theatre.js on your local computer you can download this starter JS project: <a download href="/try-it-out/theatreHelloWorld.zip">theatreHelloWorld.zip<span class="icon outbound">⤓</span></a>. Once you've downloaded the zip file, unzip it, navigate to the unzipped folder in your terminal, and run these commands:

```bash
npm install
npm run start
```

You should see a "Hello World" Theatre.js web page in your browser after running the above commands.

You can also download this simple HTML file and open it in your browser and favorite code editor: <a download href="/try-it-out/theatreHelloWorld.html">theatreHelloWorld.html<span class="icon outbound">⤓</span></a>.

## Quickly add Theatre.js to a web page

A prebundled package called [@Theatre/browser-bundles](https://www.npmjs.com/package/@theatre/browser-bundles) is available in case you do not want to use a bundler. `@Theatre/browser-bundles` can be loaded into a web page or JS file via [a CDN like JSDelivr](https://cdn.jsdelivr.net/npm/@theatre/browser-bundles@0.4.7/) either with an [empty ES6 import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#import_a_module_for_its_side_effects_only) or a script tag:

<code-group>
<code-block title="ES6 Import">
```html{2,3}
<script type="module">
  import "https://cdn.jsdelivr.net/npm/@theatre/browser-bundles@0.4.7/dist/core-and-studio.js";
  const { core, studio } = Theatre;
  // Start the Theatre.js UI
  studio.initialize();
</script>
```
</code-block>

<code-block title="Script Tag">
```html
<script src="https://cdn.jsdelivr.net/npm/@theatre/browser-bundles@0.4.7/dist/core-and-studio.js">
</script>
<script>
  const { core, studio } = Theatre;
  // Start the Theatre.js UI
  studio.initialize();
</script>
```
</code-block>
</code-group>

You can also <a href="https://cdn.jsdelivr.net/npm/@theatre/browser-bundles@0.4.7/dist/core-and-studio.js" download-non-same-origin>download the prebundled JavaScript file<span class="icon outbound">⤓</span></a> instead of using a CDN and load it using one of the two methods above.

_Advanced: if you do not need the Theatre.js UI you can <a href="https://cdn.jsdelivr.net/npm/@theatre/browser-bundles@0.4.7/dist/core-only.min.js" download-non-same-origin>download the minified core JavaScript file<span class="icon outbound">⤓</span></a>._

<!--
  A note on ESModule CDNs like skypack: I (Elliot) tried getting them to work but
  ran into issues. Probably because react and styled-components are not bundled with studio.
  Import maps may be able to resolve the issue but I got stuck on it.
-->
