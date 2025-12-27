/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#c80000",
        secondary: "#1b7f3a",
        darkblue: "#0b1f3a",
      },
    },
  },
  plugins: [],
};
