/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          300: "#3A0A66",
          500: "#270753",
          700: "#170342",
        },
        tint: {
          100: "#F3F6FF",
          200: "#E3E3F6",
          300: "rgba(235, 239, 255, 0.80)",
        },
        fade: {
          100: "rgba(39, 7, 83, 0.50)",
          200: "rgba(23, 3, 66, 0.75)",
        },
      },
      // boxShadowColor
    },
  },
  plugins: [],
};
