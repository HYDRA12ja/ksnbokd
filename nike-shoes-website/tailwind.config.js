module.exports = {
  purge: ['./src/**/*.{html,js}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        nikeGreen: '#A4D65E',
        nikeBlack: '#111111',
        nikeWhite: '#FFFFFF',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}