export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "Avenir", "Helvetica", "Arial", "sans-serif"],
      },
      dropShadow: {
        logo: "0 0 2em #646cffaa",
        "logo-tw": "0 0 2em #38bdf8aa",
      },
      colors: {
        "itch.io": "#fa5c5c",
        "logo-dark": "#131313",
      },
    },
  },
  plugins: [],
};
