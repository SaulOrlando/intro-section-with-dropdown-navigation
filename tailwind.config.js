/** @type {import('tailwindcss').Config} */

const defaults_theme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        "epilogue": ['Epilogue', ...defaults_theme.fontFamily.sans]
      },
      colors: {
        "almost-white": "hsl(0, 0%, 98%)",
        "medium-gray": "hsl(0, 0%, 41%)",
        "almost-black": "hsl(0, 0%, 8%)"
      }
    },
  },
  plugins: [],
}

