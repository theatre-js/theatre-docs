# Documentation of Theatre.js

The documentation website for [Theatre.js](https://www.theatrejs.com). Deployed to [docs.theatrejs.com](https://docs.theatrejs.com).

Uses [VuePress](https://vuepress.vuejs.org/).

## Development

Run `$ npm run docs:dev` to start VuePress.

## Contribution

PRs are much appreciated!

These are the guidelines we follow:

1. Theatre is a visual tool, so it helps to explain things visually with pictures and embedded videos.
2. Videos must remain accessible to screen readers. Use the `<VideoWithDescription>` component in the `.md` files to ensure each video comes with a description for screen readers.
3. The `docs/api` folder is auto-generated. If you wish to contribute to the API docs, you should change the TSDoc comments in the main repo. Here is an [example](https://github.com/AriaMinaei/theatre/blob/3ed7e6bf6c519152561e49061a8eaa9bb32d6d1c/theatre/core/src/coreExports.ts#L21).

## Deployment

Pushing to the `production` branch will trigger a netlify deploy.