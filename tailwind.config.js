/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include all your source files
    './docusaurus.config.js', // Include config for dynamic class usage
  ],
  theme: {
    extend: {}, // Add customizations here
  },
  plugins: [],
};
