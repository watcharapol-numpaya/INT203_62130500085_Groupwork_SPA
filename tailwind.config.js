module.exports = {
  purge: {
    content: ['./public/**/*.html', './src/**/*.vue']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    maxWidth: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
    },
    maxHeight: {
      '20555555': '20rem',
     
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}