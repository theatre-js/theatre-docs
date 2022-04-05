module.exports = {
  title: "Theatre.js",
  description: "Motion graphics for the web",
  head: [["link", { rel: "icon", href: "/public/theatrejs-logo-2x.png" }]],
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
        text: "Extensions",
        link: "/extensions/",
        items: [
          {
            text: "Creating extensions",
            link: "/extensions/creating-your-own-extension/",
          },
          {
            text: "Extension: React THREE Fiber",
            link: "/extensions/r3f/",
          },
        ],
      },
      {
        text: "API",
        link: "/api/",
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
            link: "https://github.com/theatre-js/theatre/tree/0.3",
          },
          {
            text: "0.2",
            link: "https://v02.docs.theatrejs.com/",
          },
          {
            text: "0.1",
            link: "https://github.com/theatre-js/theatre/tree/0.1",
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
            text: "Youtube",
            link: "https://www.youtube.com/channel/UCsp9XOCs8v2twyq5kMLzS2Q",
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
      "/getting-started/": [
        {
          title: "The Guide",
          path: "/getting-started/",
          collapsable: false,
          sidebarDepth: 0,
          children: [""],
        },
        {
          title: "1 — Set up",
          path: "/getting-started/#_1-set-up",
          collapsable: true,
          sidebarDepth: 1,
          children: [
            "/getting-started/install/",
            ["/getting-started/try-it-out/", "or, ▶ Quick start"],
          ],
        },
        {
          title: "2 — Learn the basics",
          path: "/getting-started/basics/",
          collapsable: true,
          sidebarDepth: 1,
          children: ["/getting-started/basics/"],
        },
        {
          title: "3 — Further Reading",
          path: "/getting-started/#_3-further-reading",
          collapsable: true,
          sidebarDepth: 0,
          children: [
            "/in-depth/",
            ["/api/", "API"],
            ["https://github.com/theatre-js/theatre", "GitHub"],
            "/extensions/",
          ],
        },
      ],
      "/in-depth/": "auto",
      "/extensions/": "auto",
      "/api/": "auto",
      "": "auto",
    },
    lastUpdated: "Last Updated",
    repo: "theatre-js/theatre",
    docsRepo: "theatre-js/theatre-docs",
    docsDir: "docs",
    docsBranch: "main",
    editLinks: true,
    editLinkText: "Edit this page on Github",
  },
  plugins: [
    [
      "vuepress-plugin-code-copy",
      {
        staticIcon: true,
        color: "rgba(255,255,255,0.4)",
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "grid",
        before: () => `<div class="grid">`,
        after: "</div>",
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "callout",
        before: (info) =>
          `<a href="${info
            .split("|")[0]
            .trim()}" class="callout"><span class="title">${info
            .split("|")[1]
            .trim()}</span>`,
        after: "</a>",
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "light-callout",
        before: (info) =>
          `<a href="${info
            .split("|")[0]
            .trim()}" class="callout light"><span class="title">${info
            .split("|")[1]
            .trim()}</span>`,
        after: "</a>",
      },
    ],
  ],
  head: [
    [
      "script",
      {},
      `
  // Hack to wait for elements to be loaded.
  setTimeout(addListenersToNonSameOriginDownloadLinks);
  
  function addListenersToNonSameOriginDownloadLinks() {
    for (const aEl of document.getElementsByTagName("a")) {
      if (aEl.hasAttribute("download-non-same-origin")) {
        aEl.addEventListener("click", (e) => {
          e.preventDefault();
          downloadNonSameOriginFile(aEl.href, "core-and-studio.js");
        });
      }
    }
  }
  
  async function downloadNonSameOriginFile(fileUrl, saveFileName) {
    try {
      const response = await fetch(fileUrl);
      const blob = await response.blob();
  
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = saveFileName;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (e) {
      window.location.href = fileUrl; // Give up and just navigate on error
    }
  }
    `,
    ],
  ],
};
