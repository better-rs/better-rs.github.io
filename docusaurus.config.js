// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Better Zig",
  tagline: "better zig documentation",
  url: "https://better-zig.github.io", // todo x: update
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "better-zig", // todo x: Usually your GitHub org/user name.
  projectName: "better-zig.github.io", // todo x: Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-CN",

    locales: ["zh-CN", "en", "fr"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },

        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },

        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Zig 学习", // todo x
        logo: {
          alt: "Zig Logo",
          src: "img/logo.svg",
        },
        items: [
          // TODO X: 教程
          // {
          //   type: "doc",
          //   docId: "intro",
          //   position: "left",
          //   label: "教程",
          // },

          //
          // todo x: 使用自定义导航栏, 参见 sidebars.js
          //

          // todo x: 教程
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "guide",
            label: "教程",
          },

          // todo x: 生态
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "ecosystem",
            label: "生态",
          },

          // todo x: 生态
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "annotated",
            label: "源码分析",
          },
          // TODO X: 博客
          { to: "/blog", label: "博客", position: "left" },

          {
            href: "https://github.com/better-zig",
            label: "GitHub",
            position: "right",
          },

          // todo x: 多语言
          {
            type: "localeDropdown",
            position: "right",
            dropdownItemsAfter: [
              {
                type: "html",
                value: '<hr style="margin: 0.3rem 0;">',
              },
              {
                href: "https://github.com/better-zig",
                label: "Help Us Translate",
              },
            ],
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
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discord.com/invite/MnDA9pfWAW",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/gossip_coder", // todo x:
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/better-zig", // todo x
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
