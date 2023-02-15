/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#04fd3f",
        white: "#ffffff"
      },
      fontFamily: {
        tw: './src/asstes/fonts/pixelart.ttf'
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
};
