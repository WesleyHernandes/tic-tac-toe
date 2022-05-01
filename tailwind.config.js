// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#1E1E24',
        'secundary': '#587B7F',
        'highlight1': '#F1D302',
        'highlight2': '#00B295'
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
