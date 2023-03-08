/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding:'16px'
    },
    extend: {
      fontFamily: {
        dm: ['DM Sans', 'sans-serif']
      },
      colors: {
        red1: '#DF1F2D',
        black: '#000000',
        red2: '#B11313',
        blue1: '#2B3784',
        blue2: '#447BBE',
      },
      screens: {
        '2xl': '1320px',
      },
      dropShadow: {
        shadow: '0 10px 15px rgba(0, 0, 0, 0.25)',
        shadow2: '0 10px 10px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}
