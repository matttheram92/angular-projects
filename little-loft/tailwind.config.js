/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat"],
      },
      fontSize: {
        "2xl": ["22px", "28px"],
      },
      colors: {
        primary: "#E0B75B",
        primaryDark: "#B48F47",
        lemon: "#FBF8E9",
        lemonDark: "#E5E2D1",
        blue: "#4A6789",
        purple: "#85729F",
        orange: "#EFB496",
        green: "#97C6A8",
      },
    },
  },
  plugins: [],
};
