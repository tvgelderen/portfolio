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
          background: "#e0e0e0",
          primary: "#efefef",
          secondary: "#f6f6f6",
          theme: "#cb24ff",
        },
        dark: {
          background: "#141414",
          primary: "#1a1a1a",
          secondary: "#242424",
          tertiary: "#2d2d2d",
          theme: "#a842c9",
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
