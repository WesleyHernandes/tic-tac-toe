// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#0A2239',
        'secundary': '#1D84B5',
        'highlight1': '#F1D302',
        'highlight2': '#00B295',
        'iconO': '#53A2BE',
        'iconX': '#F18701'
      },
      maxWidth:{ 
        'app-content': '400px'
      },
      screens: {
      },
      fontFamily: {
        'master': ['Poppins', 'sans-serif'],
        'game': ['Quicksand', 'sans-serif']
      },
      fontSize: {
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
