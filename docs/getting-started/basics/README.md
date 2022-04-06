---
title: 🎓 Learn the basics
prev: /getting-started/
---

<div class="custom_article_contents">

**In this article**
[[toc]]

</div>

# 🎓 Learn the basics

## Prerequisites

This page assumes that you have a project with Theatre.js up and running and you can see the Theatre.js studio outline panel icon (<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1.5rem" style="vertical-align: middle;" xmlns="http://www.w3.org/2000/svg"><path d="M14 3v1H2V3h12zm-1 3v1H6V6h7zm0 3v1H5V9h8zm0 3v1H5v-1h8z"></path><path d="M5 4h1v9H5z"></path></svg>) in the top left of your web page.

If you don't yet have a project with Theatre.js running, go back to the [Set up section of The Guide](/getting-started/).

## Setting the scene

First, let's learn about Projects, Sheets, and Objects.

::: details See this step in the video tutorial

<iframe width="560" height="315" src="https://www.youtube.com/embed/icR9EIS1q34?start=632" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

:::

### Creating a Project

A [Project](/in-depth/#projects) in Theatre.js is like a save file. Projects are stored in the browser's local storage, so you don't lose your progress if you close and reopen Theatre.js. [Later](/in-depth/#exporting) in this page, you'll learn how Projects can be exported and saved as a file so you can share them with teammates; for example, by putting the saved Project in a git repo.

Calling `core.getProject(projectID)` either creates and returns a new Project, or returns an existing Project if one with the name `projectID` is stored in your browser's local storage.

<<< @/docs/getting-started/imp1.ts#project

### Creating a Sheet

A [Sheet](/in-depth/#shets) is like a component in React, a composition in After Effects, or a folder that groups together related parts of an animation into a reusable template. It contains a number of Objects (which we'll introduce next) that are animated together.

You can create a new Sheet or get an existing Sheet by calling `proj.getSheet(sheetID)`.

<<< @/docs/getting-started/imp1.ts#sheet

We can learn more about Sheets [later](/in-depth/#sheets). For now, let's move on to creating our first object.

### Creating an Object

You can create a new [Theatre.JS Object](/in-depth/#objects) or get an existing one by calling `sheet.object(objectID, propsAndValues)`. You define the "props" (properties) and respective values of an Theatre.js Object as follows:

<<< @/docs/getting-started/imp1.ts#object

Note that Theatre.js Objects are not just JavaScript objects. From now on, we will use the word Object to mean a Theatre.js Object. We will see how to read, and react to, the changing values of a Theatre.js object in the next section.

Projects, Sheets, and Objects are the most basic concepts of Theatre.js. Now that we know what they are and have set them up, we can see how all our Projects, Sheets and Objects show up in the "outline panel" (the panel on the left).

If we select an Object's name in the outline panel, that Object's "details panel" shows up. In the details panel you can change the value of a prop.

<VideoWithDescription src="/getting-started/scene-and-object.mp4">An outline of the graph appears once the pointer moves to the left side of the page. The outline says "First Project / Scene: default / First object". The user selects "First object", after which the Details Editor panel shows up on the left. The Details Editor panel shows the three props, one a number, the other a checkbox, and the other a text input box. The user then changes these values by clicking/dragging, or entering a value via keyboard.</VideoWithDescription>

## Reading Object values in code

::: details Learn this step from the video tutorial

<iframe width="560" height="315" src="https://www.youtube.com/embed/icR9EIS1q34?start=898" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

:::

To read the value of a prop, you can use `object.value`.

<<< @/docs/getting-started/imp1.ts#objectvalue

If you change these values in the details panel, and then `console.log(object.value)` again, you will see the changed values.

### Listening to Object value changes

::: details Learn this step from the video tutorial

<iframe width="560" height="315" src="https://www.youtube.com/embed/icR9EIS1q34?start=931" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

:::

At some point you will want to write code that can react to an Object's value changing—for example when you change the value in the details panel, or as we will see shortly, when an animation is playing.

You can use `object.onValuesChange(callback)` to accomplish this. Whenever the value of a prop on the Object changes, the `callback` function you provide to `object.onValuesChange` is called. Importantly, Your `callback` function is passed an argument which is a JavaScript object that contains all the values of the Object, including the updated values.

<<< @/docs/getting-started/imp1.ts#objectonvalueschange

<VideoWithDescription src="/getting-started/onvalueschange.mp4">Continuing from the last video, the console of the devtools in the browser is open. The user changes the values in the Details Editor panel. The value of the numeric prop keeps being logged to the console as the user changes it.</VideoWithDescription>

### Hooking up our Object to HTML

::: details Learn this step from the video tutorial

<iframe width="560" height="315" src="https://www.youtube.com/embed/icR9EIS1q34?start=979" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

:::

The `object.onValuesChange(callback)` method allows us to connect our `Object`s to visual elements, like HTML elements, WebGL, or even IOT devices.

<<< @/docs/getting-started/imp1.ts#hooktodiv

## Animating

::: details Learn this step from the video tutorial

<iframe width="560" height="315" src="https://www.youtube.com/embed/icR9EIS1q34?start=1072" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

:::

So far, we've only changed the values of props using the details panel. In order to animate prop values, we can put them in a ["Sequence"](/in-depth/#sequences). A Sequence is a collection of props and their respective animations.

Here's how you put a prop in Sequence: In the details panels, right click on the label of a prop, and choose "Sequence" from the dropdown menu. The "Sequence Editor" should pop up at the bottom of your screen—this is where the animations are made and played.

Now that you know how to put a prop in Sequence, Here's the recipe for a simple animation:

- Put the number valued prop "foo" from earlier in the tutorial in Sequence;
- with the sequence editor now open, change the value of "foo" in the Details Panel;
- this change should cause a small diamond appear to the right of "foo" in the Sequence Editor, this is a "Keyframe";
- move the animation "Playhead" line by clicking somewhere in the empty space on the right side of of the Sequence Editor;
- change the value of "foo" in the Details Panel again to create a new Keyframe at a new time in the Sequence; and
- finally, move the playhead back to the first Keyframe and press space to see the animation play out :)

<VideoWithDescription src="/getting-started/animating-1.mp4">Continuing from the last video, the console of the devtools in the browser is open. The user right-clicks on the numeric prop called "foo", and from the open menu, chooses "Sequence". A sequence editing panel shows up with no keyframes. The user proceeds to create keyframes and scrub through the sequence. As the user change values and play with the keyframes, the value of the prop is getting logged to the console in real time.</VideoWithDescription>

Cool! You can see how Theatre.js animates smoothly between the two Keyframe values.

If you want to get nuanced and adjust how Theatre.js smoothly animates between Keyframes, you can use the "Curve Editor" inside the Sequence Editor. Open the Curve Editor for a prop by clicking on the small curve icon (<svg xmlns="http://www.w3.org/2000/svg" height="1.2rem" viewBox="0 0 640 512"><g transform="translate(0 100)"><path fill="currentColor" d="M368 32h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zM208 88h-84.75C113.75 64.56 90.84 48 64 48 28.66 48 0 76.65 0 112s28.66 64 64 64c26.84 0 49.75-16.56 59.25-40h79.73c-55.37 32.52-95.86 87.32-109.54 152h49.4c11.3-41.61 36.77-77.21 71.04-101.56-3.7-8.08-5.88-16.99-5.88-26.44V88zm-48 232H64c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zM576 48c-26.84 0-49.75 16.56-59.25 40H432v72c0 9.45-2.19 18.36-5.88 26.44 34.27 24.35 59.74 59.95 71.04 101.56h49.4c-13.68-64.68-54.17-119.48-109.54-152h79.73c9.5 23.44 32.41 40 59.25 40 35.34 0 64-28.65 64-64s-28.66-64-64-64zm0 272h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32z"></path></g></svg>) beside a prop's name in the Sequence Editor's left side. If you already have a couple of Keyframes, you should now see a Curve (representing the transition between those two Keyframes) at the bottom of the Sequence Editor. Change a curve by grabbing and dragging the handles the protrude from its beginning and end.

## Sharing Projects

Now that you've made a simple animation Project, you may want to share it with friends so that they can play around with it too. One way to do this is to export the state of your Project to a file, put the exported Project file the same folder as your code (or a folder nearby your code), add a line of code that imports the Project file into your animation code, then share the folder that contains all your code and Project file with your friends. Let's try it out.

1. In the outline panel, click on the name of the Project (instead of an Object) that you want to export.
1. Now on the right side of your screen, you should see a Project panel with a button that says "Export \_ Project to JSON", click it!
1. Your Project file `state.json` should start downloading, find the downloaded file and move it to a folder closer to your code.
1. In your code, add an import for the Project file:

```ts
import state from "<relative-path-to>/state.json";
```

5. Finally, you can add a second `{ state }` argument to your `core.getProject` call to load the Project from the imported Project file:

```ts
const proj = getProject("First project". { state });
```

## Conclusion

Now you know the basics of creating animations with Theatre.js! Theatre.js has a lot more to offer, from our [community](/#get-in-touch) to many more [programmatic animation features and concepts](/getting-started/#_3-further-reading).

Was any part of these docs confusing, missing something, or erroneous? If so, reach out to us on [Discord](https://discord.gg/bm9f8F9Y9N)! we'd love to hear about your experience learning Theatre.js, and anything you'd like to see added or fixed. Want to fix or add something yourself? [Edit this page on <GitHubLogoIcon/>GitHub](https://github.com/theatre-js/theatre-docs/edit/main/docs/getting-started/README.md)!

Thanks for reading! we look forward to seeing what you bring to life with Theatre.js!

Want to learn more? Keep reading for a sample of some features discussed in the In Depth docs.

## Introduction to in depth features

### Playing an animation with code

```ts
// reset the Sequence to the start (0 seconds)
sequence.position = 0;

// play the Sequence from the current position to sequence.length
sequence.play();
```

[Learn more in the Sequence section of the In Depth docs →](/in-depth/#sequences)

### Custom prop types

strings, compponds, numbers customization, strig kusters

```ts
const obj = sheet.object("box", {
  x: t.number(0, {
    nudgeMultiplier: 0.25,
  }),
});
```

<VideoWithDescription cls="small" src="/in-depth/prop-types/number/nudgeMultiplier.mp4">As the user nudges a prop, its value jumps in 0.25 increments, like 0, 0.25, 0.5, 0.75, and so on.</VideoWithDescription>

[Learn more in the Prop types section of the In Depth docs →](/in-depth/#prop-types)

### Making more instances of a Sheet

::: details See Sheet instancing in the video tutorial

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/icR9EIS1q34?start=3344" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

:::

Here is an example of 3 instances of the same Sheet running at the same time. Each white box on the screen is attached to a different instance of the same Sheet. They all have the same animation Sequence, but the animation runs for each of them independently.

```ts
for (let i = 0; i < 3; i++) {
  // All three Sheet instances use the "Box Scene" Sheet and Sequence.
  // This way they all have the same animation.
  const sheet = proj.sheet("Box Scene", "Instance " + i);

  const obj = sheet.object("box", { y: 20 });
  obj.onValuesChange((newValue) => {
    div.style.top = newValue.y + "px";
  });

  const div = document.createElement("div");
  div.style.left = i * 60 + "px";
  div.style.height = "50px";
  div.style.width = "50px";
  div.style.background = "white";
  document.body.append(div);

  div.addEventListener("click", () => sheet.sequence.play());
}
```

<VideoWithDescription src="/in-depth/multi-instance-preview.mp4">We have three copies of a white rectangle, and clicking on each makes it play an animation independently of the others. Two or more boxes may be playing the animation at the same time as well, with different progressions.</VideoWithDescription>
