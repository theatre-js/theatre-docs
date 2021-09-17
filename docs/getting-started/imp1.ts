// import both core and studio (we can remove studio from the production bundle later)
// #region import
import {getProject} from "@theatre/core"
import studio from "@theatre/studio"

// initialize the studio so the editing tools will show up on the screen
studio.initialize()
// #endregion import

// #region project
// create a project
const proj = getProject(
  // the ID of the project is "My first project"
  "First project"
)
// #endregion project

// #region sheet
// create a sheet
const sheet = proj.sheet(
  // Our sheet is identified as "Scene"
  "Scene"
)
// #endregion sheet

// #region object
// create an object
const obj = sheet.object(
  // The object's key is "Fist object"
  "First object",
  // These are the object's default values (and as we'll later learn, its props types)
  {
    // we pick our first props's name to be "foo". It's default value is 0.
    // Theatre will determine that the type of this prop is a number
    foo: 0,
    // Second prop is a boolean called "bar", and it defaults to true.
    bar: true,
    // Last prop is a string
    baz: "A string",
  }
)
// #endregion object

// #region objectvalue
console.log(obj.value.foo) // prints a number
console.log(obj.value.bar) // prints a boolean
console.log(obj.value.baz) // prints a string
// #endregion objectvalue

// #region objectonvalueschange
// Calls the callback every time the values change
const unsubscribe = obj.onValuesChange(function callback(newValue) {
  console.log(newValue.foo) // prints a number
  console.log(newValue.bar) // prints a boolean
  console.log(newValue.baz) // prints a string
})

// stop listening to changes after 5 seconds:
setTimeout(unsubscribe, 5000)
// #endregion objectonvalueschange

// #region hooktodiv
// assuming we have an html element with #box as its ID
const div = document.getElementById("box")
obj.onValuesChange((newValue) => {
  // obj.foo will now set the horizontal position of the div
  div.style.left = newValue.foo + "px"
})
// #endregion hooktodiv
