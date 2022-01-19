module.exports = {
  title: "Theatre.js",
  description: "Motion graphics for the web",
  head: [["link", {rel: "icon", href: "/public/theatrejs-logo-2x.png"}]],
  themeConfig: {
    logo: "/public/theatrejs-logo-black.svg",
    nav: [
      {
        text: "Guide",
        link: "/guide/",
      },
      {
        text: "API",
        link: "/api/",
      },
      {
        text: "Tutorials",
        link: "/tutorials/",
      },
      {
        text: "Examples",
        link: "/examples/",
      },
      {
        text: "FAQ",
        link: "/faq/",
      },
      {
        text: "v0.4",
        items: [
          {
            text: "v0.4 (Current)",
            link: "https://docs.theatrejs.com",
          },
          {
            text: "v0.3",
            link: "https://github.com/ariaminaei/theatre/tree/0.3",
          },
          {
            text: "v0.2",
            link: "https://v02.docs.theatrejs.com/",
          },
          {
            text: "v0.1",
            link: "https://github.com/ariaminaei/theatre/tree/0.1",
          },
        ],
      },
      {
        text: "Community",
        items: [
          {
            text: "Discord community",
            link: "https://discord.gg/bm9f8F9Y9N",
          },
          {
            text: "Twitter",
            link: "https://twitter.com/theatre_js",
          },
          {
            text: "Email",
            link: "mailto:hello@theatrejs.com",
          },
        ],
      },
    ],
    sidebarDepth: 2,
    displayAllHeaders: true,
    sidebar: {
      "/guide/": [
        {
          title: "Guide",
          collapsable: false,
          sidebarDepth: 1,
          children: [
            "",
            "getting-started",
            "concepts"
          ],
        }
      ]
      // "/api/",
      // "/",
    },
    lastUpdated: "Last Updated",
    repo: "ariaminaei/theatre",
    docsRepo: "ariaminaei/theatre-docs",
    docsDir: "docs",
    docsBranch: "main",
    editLinks: true,
    editLinkText: "Edit this page on Github",
  },
}
