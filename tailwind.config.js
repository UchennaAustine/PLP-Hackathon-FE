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
        quarterSmall:{max:"425px"},
        medium:{max:"768px"},
      }
    },
  },
  plugins: [],
};
