module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        "mexican-pink": "#fa1d58",
        floor: "#EFF8F7",
        "dark-green": "#013542",
        "light-green": "#E9F9B0",
        "light-orange": "#FFE598",
      },
      fontFamily: {
        poppins: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
