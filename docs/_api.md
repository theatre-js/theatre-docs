---
title: API
---

# The API

## The projects API

### `core.getProject()`

Returns a project with the given id, or creates one if it doesn't already exist. If `@theatre/studio` is also loaded, then the studio will manage the state of the project.

* **Arguments**
  * `{string} projectId` The projectId should be unique similar to how the name of an npm package is unique.
    * You can also scope the ID of the project to an organization, similar to scoped packages in npm.
  * `{IProjectConfig} config (optional)`
    * `config.state?: state` The state of the project, as [exported](/export.html) by the studio.
* **Returns** [`IProject`](#iproject)

* Usage
  * If you're 

```ts
import studio from '@theatre/studio'
import {getProject} from '@theatre/core'

studio.initialize()

const config = {} // the config is empty when starting a new project
const project = getProject("a-unique-id", config)
```

Once we've [exported](./export.html) our state to disk, we can provide it to the project.

```ts
import {getProject} from '@theatre/core'
import state from './saved-state.json'
const config = {state} // here the config contains our saved state
const project = getProject("a-unique-id", config)
```

