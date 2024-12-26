const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include all your source files
    './docusaurus.config.js', // Include config for dynamic class usage
  ],
  theme: {
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
          DEFAULT: '#457b9d', // Steel Blue for light theme
          dark: '#16314f', // Slightly darker Navy Blue
          darker: '#102943', // Even darker Navy
          darkest: '#0a1f36', // Darkest Navy
          light: '#a8dadc', // Pale Blue
          lighter: '#bde8e8', // Lighter Pale Blue
          lightest: '#d1f4f5', // Lightest Blue
        },
        secondary: {
          DEFAULT: '#f4a261', // Peach Orange
          dark: '#dc8f55', // Slightly darker Peach Orange
          light: '#f6b278', // Slightly lighter Peach Orange
        },
        neutral: {
          light: '#f1faee', // Off-white
          dark: '#343a40', // Charcoal
        },
        accent: {
          DEFAULT: '#ffb703', // Warm Amber
          dark: '#d99803', // Slightly darker Amber
          light: '#ffc633', // Lighter Amber
        },
        highlight: '#2a9d8f', // Teal Green
        muted: '#7b8a91', // Muted gray for secondary text
      },
    },
  },
  plugins: [],
};
