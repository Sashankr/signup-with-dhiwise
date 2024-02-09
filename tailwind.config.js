module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        deep_purple: { 900: "#341a9e" },
        blue_gray: { 50: "#eff1f4", 400: "#8d8d8d", 600: "#61707f" },
        black: { 900: "#000000" },
        red: { 500: "#fc3333", 600: "#f62020" },
        gray: { 900: "#222222" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { inter: "Inter", sourcesanspro: "Source Sans Pro" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
