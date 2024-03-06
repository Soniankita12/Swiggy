const colors = require('tailwindcss/colors');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,css}",
  ],
  theme: {
    extend: {
      colors:{
       'cyan':colors.cyan,
       'teal':colors.teal 
      }
    },
  },
  plugins: [],
}

