/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens:{
        small:{max:"320px"},
        semiSmall:{max:"375px"},
        medium:{max:"770px"},
      }
    },
  },
  plugins: [],
};
