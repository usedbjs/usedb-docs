module.exports = {
  title: "UseDB",
  tagline: "DB connection for React without writing the APIs",
  url: "https://usedbjs.github.io",
  baseUrl: "/usedb/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "usedbjs", // Usually your GitHub org/user name.
  projectName: "usedb", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "UseDB",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/introduction",
          // activeBasePath: "docs",
          label: "Docs",
          position: "right",
        },
        {
          to: "docs/faq",
          label: "FAQ",
          position: "right",
        },
        {
          to: "https://github.com/usedbjs/usedb",
          label: "GitHub",
          position: "right",
        },
        {
          to:
            "https://geekyants.com/hire?utm_source=usedb&utm_medium=header&utm_campaign=usedb",
          label: "Hire the Creators",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/introduction",
            },
            // {
            //   label: "Concepts",
            //   to: "docs/model/",
            // },
            // {
            //   label: "Examples",
            //   to: "docs/runtime-binding-example/",
            // },
            // {
            //   label: "ServerSide Binding",
            //   to: "docs/laravel/getting-started/",
            // },
            {
              label: "FAQ",
              to: "docs/faq",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/usedb",
            },
            // {
            //   label: "Discord",
            //   href: "https://discordapp.com/invite/docusaurus",
            // },
            // {
            //   label: "Twitter",
            //   href: "https://twitter.com/docusaurus",
            // },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/usedbjs/usedb",
            },
            //   {
            //     html: `
            //    <a
            //    className="github-button"
            //    href="https://github.com/usedbjs/usedb/stargazers"
            //    data-icon="octicon-star"
            //    data-count-href="https://github.com/usedbjs/usedb/stargazers"
            //    data-show-count="true"
            //    data-count-aria-label="# stargazers on GitHub"
            //    aria-label="Star this project on GitHub"
            //  >
            //    Star
            //  </a>
            //    `,
            //   },
          ],
        },
        {
          title: " ",
          items: [
            {
              label: "Built with ❤️ at GeekyAnts.",
              href:
                "https://geekyants.com/?utm_source=usedb&utm_medium=footer&utm_campaign=usedb",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} UseDB`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/usedb/introduction",
            from: ["/"],
          },
        ],
      },
    ],
  ],
};
