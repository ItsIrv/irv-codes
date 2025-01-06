import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export const darkMode = ['class', '[data-theme="dark"]'];
export const content = [
  './src/**/*.{js,jsx,ts,tsx,mdx}', // Include all your source files
  './docusaurus.config.js', // Include config for dynamic class usage
  './docs/**/*.{mdx}',
];
export const theme = {
  extend: {
    fontFamily: {
      sans: ['Nunito', ...fontFamily.sans], // Modern and clean sans-serif
      serif: ['Lora', ...fontFamily.serif], // Elegant but readable serif
      mono: ['JetBrains Mono', ...fontFamily.mono], // Developer-friendly monospaced font
      display: ['Source Sans Pro', ...fontFamily.sans], // For impactful titles
      body: ['Open Sans', ...fontFamily.sans], // Highly readable for body text
    },
    colors: {
      primary: {
        DEFAULT: 'var(--ifm-color-primary)', // Steel Blue for light theme
        dark: 'var(--ifm-color-primary-dark)', // Slightly darker Navy Blue
        darker: 'var(--ifm-color-primary-darker)', // Even darker Navy
        darkest: 'var(--ifm-color-primary-darkest)', // Darkest Navy
        light: 'var(--ifm-color-primary-light)', // Pale Blue
        lighter: 'var(--ifm-color-primary-lighter)', // Lighter Pale Blue
        lightest: 'var(--ifm-color-primary-lightest)', // Lightest Blue
      },
      secondary: {
        DEFAULT: 'var(--ifm-color-secondary)', // Peach Orange
        dark: 'var(--ifm-color-secondary-dark)', // Slightly darker Peach Orange
        light: 'var(--ifm-color-secondary-light)', // Slightly lighter Peach Orange
      },
      neutral: {
        light: 'var(--ifm-color-neutral-light)', // Off-white
        dark: 'var(--ifm-color-neutral-dark)', // Charcoal
      },
      accent: 'var(--ifm-color-accent)', // Warm Amber
      highlight: 'var(--ifm-color-highlight)', // Teal Green
      muted: 'var(--ifm-color-muted)', // Muted gray for secondary text
    },
  },
};
export const plugins = [];
