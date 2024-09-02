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
          background: "#e6e9ef",
          primary: "#eff1f5",
          secondary: "#ccd0da",
          tertiary: "#bcc0cc",
          theme: "#cb24ff",
          text: "#4c4f69",
        },
        dark: {
          background: "#181825",
          primary: "#1e1e2e",
          secondary: "#313244",
          tertiary: "#45475a",
          theme: "#cb24ff",
          text: "#cdd6f4",
        },
      },
      fontFamily: {
        courier: ["Courier Prime", "Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("tailwind-scrollbar-hide")],
  darkMode: "class",
};
