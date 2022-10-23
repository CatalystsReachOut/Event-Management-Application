/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./assets/images/background_login.png')"
      },
      boxShadow :{
        'login_shadow' : '-10px 10px 10px 1px rgba(0, 0, 0, 0.228);'
      },
      colors :{
        'font_orange' : "#E07336",
        'font_orange-hover' : "#CB6D38"
      },
      fontFamily :
      {
        'openSans' : ['Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
