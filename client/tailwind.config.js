/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: "#0EA5E9",
        secondary: "#0F172A",
        accent: "#F97316",
        light: "#F8FAFC",
        dark: "#020617",
      },
    },
  },
  plugins: [],
}
