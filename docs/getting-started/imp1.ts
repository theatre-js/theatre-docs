// import both core and studio (we can remove studio from the production bundle later)
// #region import
// #region sheet
// #region project
import {getProject} from "@theatre/core"
import studio from "@theatre/studio"

// initialize the studio so the editing tools will show up on the screen
studio.initialize()
// #endregion import

// create a project
const project = getProject("First project")
// #endregion project

// create a sheet
const sheet = project.sheet("First sheet")
// #endregion sheet
