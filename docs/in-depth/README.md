# In Depth

## Projects

A Theatre `Project` is like a save file that holds the all the animations and tweaks that you design using `@theatre/studio`. It is ultimately consumed by `@theatre/core` to run the animations and tweaks.

* All your work in Theatre is organized into `Project`s.
* A Theatre `Project` is similar to a project in After Effects, Figma, and other tools – it is a way to organize related work.
* You can create multiple `Project`s in a single web page, but often one `Project` is sufficient for a whole website.

### `getProject()`

This is the main way to create a project or access an existing one.

<<< @/docs/in-depth/Projects/1.ts

### Exporting

Learn how to export/import projects, and save them to a repository.

### Project state

* All of the tweaks and animations that you create with Theatre are considered the project's state.
* `@theatre/core` uses Project State to run your tweaks and animations.
* `@theatre/studio` is basically an editor for Project State.
* A project's state is a JSON object.
* You can manually tweak your project's state if you want to.

## Sheets

A Sheet is analogous to a component in React, or a composition in After Effects. It contains a number of [Objects](#objects), and together, they comprise a self-contained unit of animation.

A [Project](#projects) can have multiple Sheets. Each Sheet could have multiple instances running at the same time.

::: details You can create mutilple instances from a single Sheet

Here is an example of 3 instances of the same sheet running at the same time. Each white box on the screen is attached to a different instance of the same sheet. They all have the same sequence of animation, but the animation runs for each of them independently.

<VideoWithDescription src="/in-depth/multi-instance-preview.mp4">We have three copies of a white rectangle, and clicking on each makes it play an animation independently of the others. Two or more boxes may be playing the animation at the same time as well, with different progressions.</VideoWithDescription>
:::

::: details Why is it called a 'Sheet?'

Conceptually, they're similar to 'sheets' in spreadsheets. A Sheet in Theatre contains **reactive values**, including animated sequences, or scripted values written in code. Also *(coming soon)* these values can be driven by formulas, scripts, and constraints.

<VideoWithDescription src="/in-depth/spreadsheet.mp4">A screen recording of using a spreadsheet to assign values to two cells, and have the third cell's value be a formula using the first two cells' values.</VideoWithDescription>

:::

---

This documentation is a work in progress. In the meantime, check [the video tutorial](https://www.youtube.com/watch) which covers much of Theatre.js.

Also, the libraries come bundled with typescript definitions with [TSDoc](https://tsdoc.org) comments. You can explore the API if your editor is configured to display TSDoc comments.

<VideoWithDescription src="/in-depth/tsdoc.mp4">A screen recording showing the API documentation displayed in a code editor.</VideoWithDescription>