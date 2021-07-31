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

## Deployment

Pushing to the `production` branch will trigger a netlify deploy.