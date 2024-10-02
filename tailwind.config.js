/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");


module.exports = withMT({  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'auth-hero': "url('./auth-banner.jpeg')",
        'base-bg':"linear-gradient(180deg,rgba(0,0,0,0.9) 10%,transparent)"
      }
    },
  },
  plugins: [],
});

