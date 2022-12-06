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
          background: "#ffffff",
          primary: "#fafafa",
          secondary: "#f6f6f6",
          tertiary: "#f0f0f0",
          theme: "#cb24ff",
        },
        dark: {
          background: "#161616",
          primary: "#1a1a1a",
          secondary: "#222222",
          tertiary: "#2d2d2d",
          theme: "#cb24ff",
          text: "#cbcbcb",
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
