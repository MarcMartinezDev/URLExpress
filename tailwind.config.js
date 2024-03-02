/** @type {import('tailwindcss').Config} */
export default {
  content: ["/src/public/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#005187",
        semiDark: "#4d82bc",
        regular: "#84b6f4",
        semiLight: "#c4dafa",
        light: "#fcffff",
      },
    },
  },
  plugins: [],
};
