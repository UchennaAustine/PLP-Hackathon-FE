/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
<<<<<<< HEAD
      screens: {
        small: { max: "320px" },
        semiSmall: { max: "375px" },
        medium: { max: "770px" },
      },
=======
      screens:{
        small:{max:"320px"},
        semiSmall:{max:"375px"},
        quarterSmall:{max:"425px"},
        medium:{max:"768px"},
      }
>>>>>>> b878c154c2d767667bc3a0fe5ad13a4c24b520fc
    },
  },
  plugins: [],
};
