import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Irving Gomez - Full Stack Engineer',
  tagline: 'Creating efficient, scalable, and user-friendly solutions.',
  favicon: 'img/favicon.ico',

  url: 'https://irv.codes',
  baseUrl: '/',

  organizationName: 'ItsIrv',
  projectName: 'irv.codes',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },

  plugins: [
    async function tailwindPlugin(context) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(
            require('tailwindcss'),
            require('autoprefixer')
          );
          return postcssOptions;
        },
      };
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      style: 'primary',
      title: 'Irving Gomez - Full Stack Engineer',
      logo: {
        alt: 'Irving Gomez - Full Stack Engineer Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/skills', label: 'Skills', position: 'left' },
        { to: '/work', label: 'Work', position: 'left' },
        {
          label: 'Extra', // Parent dropdown menu
          position: 'left',
          items: [
            { to: '/personals', label: 'Personals' },
            { to: '/code', label: 'Code' },
            { to: '/blog', label: 'Blog' },
          ],
        },
        { to: '/contact', label: 'Contact', position: 'left' },
      ],
    },
    footer: {
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Irving Gomez.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
