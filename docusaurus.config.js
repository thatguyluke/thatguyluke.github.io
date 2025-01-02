// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'That Guy Luke',
  tagline: 'UNDER CONSTRUCTION',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/thatguyluke.github.io/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'thatguyluke', // Usually your GitHub org/user name.
  projectName: 'thatguyluke.github.io', // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
           //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/eyeD.jpg',
      navbar: {
        title: 'ThatGuy',
        logo: {
          alt: 'My Site Logo',
          src: 'img/eyeD.svg',
        },
        items: [
          //{
          //  type: 'docSidebar',
          //  sidebarId: 'tutorialSidebar',
          //  position: 'left',
          //  label: 'Projects',
          //},
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'About Me',
          },
          {to: '/docs/category/projects', label: 'Projects', position: 'left'},
          {to: '/docs/category/games', label: 'Games', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'right'},          
          //{
           // href: 'https://github.com/thatguyluke',
           // label: 'GitHub',
           // position: 'right',
          //},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Site',
            items: [
              {
                label: 'Projects',
                to: '/docs/category/projects',
              },
              {
                label: 'games',
                to: '/docs/category/games'
              }
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'My LinkedIn',
                href: 'https://www.linkedin.com/in/luke-twardowski/',
              },
              {
                label: 'My GitHub',
                href: 'https://github.com/thatguyluke',
              },
              {
                label: 'My LMS',
                href: 'https://tekul.rockstarlearning.com/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/thatguyluke',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Luke Twardowski`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
