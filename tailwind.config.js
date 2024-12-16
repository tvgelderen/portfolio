/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "350px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        light: {
          background: "#cbd5e1",
          primary: "#eff1f5",
          secondary: "#ccd0da",
          tertiary: "#bcc0cc",
          theme: "#cb24ff",
          text: "#4c4f69",
        },
        dark: {
          background: "#020617",
          primary: "#0f172a",
          secondary: "#1e293b",
          tertiary: "#45475a",
          theme: "#cb24ff",
          text: "#cdd6f4",
        },
      },
      fontFamily: {
        courier: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  darkMode: "class",
};
