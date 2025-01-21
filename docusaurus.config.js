import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Patrick Sagan',
  tagline: 'Enjoying the waters of New Brunswick',
  favicon: 'img/boat.png',
  url: 'https://pcsagan.github.io',
  baseUrl: '/',
  organizationName: 'pcsagan',
  projectName: 'pcsagan.github.io',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/boat.png',
      navbar: {
        title: 'Patrick Sagan',
        logo: {
          alt: 'Patrick Sagan',
          src: 'img/boat.png',
        },
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/resume', label: 'Resume', position: 'left'},
          {
            href: 'https://github.com/pcsagan',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Pages',
            items: [
              {
                label: 'Blog',
                href: '/blog',
              },
              {
                label: 'Resume',
                to: '/resume',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/pcsagan',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/pcsagan'
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Patrick Sagan.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
