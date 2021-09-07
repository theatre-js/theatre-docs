# In Depth

## Projects

* All your work in Theatre is organized into `Project`s.
* A Theatre `Project` is similar to a project in After Effects, Figma, and other tools – it is a way to organize related work.
* You can create multiple `Project`s in a single web page, but often one `Project` is sufficient for a whole website.

### `getProject()`

This is the main way to create a project or access an existing one.

<<< @/docs/in-depth/Projects/1.ts

### Project state

* All of the tweaks and animations that you create with Theatre are considered the project's state.
* `@theatre/core` uses Project State to run your tweaks and animations.
* `@theatre/studio` is basically an editor for Project State.
* A project's state is a JSON object.
* You can manually tweak your project's state if you want to.