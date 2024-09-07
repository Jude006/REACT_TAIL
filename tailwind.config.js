/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFBA00',
        secondary: '#14171A',
        accent: '#657786',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        Play: ['Playwrite+BE+WAL','sans'],
      },
    },
  },
  plugins: [],
}