/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: "",
          secondary: "",
          tertiary: "",
          theme: "#cb24ff",
        },
        dark: {
          primary: "#222222",
          secondary: "#2f2f2f",
          tertiary: "#323232",
          theme: "#a842c9",
          000: "#a2a2a2",
          100: "#929292",
          200: "#828282",
          300: "#727272",
          400: "#626262",
          500: "#525252",
          600: "#424242",
          700: "#323232",
          800: "#222222",
          900: "#121212",
        }
      },
      fontFamily: {
        'courier': ['Courier Prime', 'Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    require('tailwind-scrollbar-hide')
  ],
  darkMode: 'class'
}
