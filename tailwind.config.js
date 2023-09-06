/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        'ubuntu' : ['Ubuntu', 'sans-serif'],
        'open-sans' : ['Open Sans', 'sans-serif']
      },
      colors : {
        'primary-color' : '#005178',
        'primary-shade-color' : '#00B09E0A',
        'light-blue' : '#DBECEB80',
        'border-color' : '#D3D3D3'
      }
    },
  },
  plugins: [],
}

