/** @type {import('tailwindcss').Config} */
const preset = require('../../packages/config/tailwind-preset');

module.exports = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [require('tailwindcss-animate')],
  presets: [preset]
};
