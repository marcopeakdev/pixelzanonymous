/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
  plugins: [],
};
