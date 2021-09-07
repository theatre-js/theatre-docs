// import both core and studio (we can remove studio from the production bundle later)
// #region import
import {getProject} from "@theatre/core"
import studio from "@theatre/studio"

// initialize the studio so the editing tools will show up on the screen
studio.initialize()
// #endregion import

// create our first project
const myProject = getProject("First project")
// ... and our first sheet
const sheet = myProject.sheet("First sheet", "")
