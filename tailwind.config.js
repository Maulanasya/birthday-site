/** @type {import('tailwindcss').Config} */
export default {
  content: ["*.html", "src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neobrut: {
          pink: "#ff69b4",
          yellow: "#f0e632",
          cyan: "#00ffff",
          white: "#ffffff",
        },
      },
      fontFamily: {
        header: ["'Bangers', cursive", "Impact", "sans-serif"],
        body: ["'Rubik', sans-serif"],
      },
      borderWidth: {
        '4': '4px',
      },
      boxShadow: {
        '4': '4px 4px 0px 0px rgba(0, 0, 0, 1)',
        'neobrut-pink': '4px 4px 0px 0px #ff69b4',
        'neobrut-yellow': '4px 4px 0px 0px #f0e632',
        'neobrut-cyan': '4px 4px 0px 0px #00ffff',
      },
      translate: {
        '1': '4px',
        '2': '8px',
      },
      rotate: {
        '1': '1deg',
        '-1': '-1deg',
      },
    },
  },
  plugins: [],
}

