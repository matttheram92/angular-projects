/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat"],
      },
      colors: {
        primary: "#E0B75B",
        lemon: "#FBF8E9",
        blue: "#4A6789",
        purple: "#85729F",
        orange: "#EFB496",
        green: "#97C6A8",
      },
    },
  },
  plugins: [],
};
