/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#212529',
        secondary: '#CA9212'
      }
    },
  },
  plugins: [],
}