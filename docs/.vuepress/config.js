module.exports = {
  title: "Theatre.js",
  description: "Motion graphics for the web",
  head: [["link", {rel: "icon", href: "/public/theatrejs-logo-2x.png"}]],
  themeConfig: {
    logo: "/public/theatrejs-logo-black.svg",
    nav: [
      {
        text: "Guide",
        link: "/getting-started/",
      },
      {
        text: "In Depth",
        link: "/in-depth/",
      },
      {
        text: "Older versions",
        items: [
          {
            text: "0.4 (Current)",
            link: "https://docs.theatrejs.com",
          },
          {
            text: "0.3",
            link: "https://github.com/ariaminaei/theatre/tree/0.3",
          },
          {
            text: "0.2",
            link: "https://v02.docs.theatrejs.com/",
          },
          {
            text: "0.1",
            link: "https://github.com/ariaminaei/theatre/tree/0.1",
          },
        ],
      },
      {
        text: "Get in touch",
        items: [
          {
            text: "Discord community",
            link: "https://discord.gg/bm9f8F9Y9N",
          },
          {
            text: "Twitter",
            link: "https://twitter.com/ariaminaei",
          },
          {
            text: "Email",
            link: "mailto:hello@theatrejs.com",
          },
        ],
      },
    ],
    sidebarDepth: 1,
    sidebar: ["/", "/getting-started/", "/in-depth/"],
    displayAllHeaders: true,
    // sidebar: [],
    lastUpdated: "Last Updated",

    repo: "ariaminaei/theatre",
    docsRepo: "ariaminaei/theatre-docs",
    docsDir: "docs",
    docsBranch: "main",
    editLinks: true,
    editLinkText: "Edit this page on Github",
  },
}
