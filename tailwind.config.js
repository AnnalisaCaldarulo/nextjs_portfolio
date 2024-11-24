/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors")
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
    },
    colors: {
      // background: "var(--background)",
      // foreground: "var(--foreground)",
      ...colors,
      primary: colors.orange,
      secondary: colors.yellow,
      tertiary: colors.amber
    },
  },
  plugins: [],
 
};
