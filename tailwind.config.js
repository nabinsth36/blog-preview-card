/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./**/*.{html,js}"],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "8px 8px 0px rgba(0, 0, 0, 100)",
      },
    },
    screens: {
      mobile: "375px",
      // => @media (min-width: 375px) {...}
      desktop: "1440px",
      // => @media (min-width: 1440px) {...}
    },
  },
  plugins: [],
};
