/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        bg: '#F7F7F8',
        catBg:'#45485F',
      },
      screens:{
        xsm:'500px',
      }
    },
  },
  plugins: [],
}