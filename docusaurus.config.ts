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

  onBrokenLinks: 'ignore',
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
        },
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
      } satisfies Preset.Options,
    ],
  ],

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Merriweather:wght@400;700&family=Fira+Code:wght@400;700&family=Playfair+Display:wght@400;700&family=Roboto:wght@400;700&display=swap',
      type: 'text/css',
    },
  ],

  themeConfig: {
    metadata: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    ],
    image: 'img/favicon-96.png',
    navbar: {
      style: 'primary',
      logo: {
        alt: 'Irving Gomez - Full Stack Engineer Logo',
        src: 'img/favicon-96.png',
      },
      items: [
        { to: '/', label: 'Home', position: 'left', exact: true },
        { to: '/skills', label: 'Skills', position: 'left' },
        { to: '/work', label: 'Work', position: 'left' },
        { to: '/about', label: 'About', position: 'left' },
        { to: '/contact', label: 'Contact', position: 'left' },
        {
          label: 'Extra',
          position: 'right',
          items: [
            { to: '/personals', label: 'Personals' },
            { to: '/code', label: 'Code' },
            { to: '/blog', label: 'Blog' },
            { to: '/credits', label: 'Credits' },
          ],
        },
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
