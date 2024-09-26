/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBackground: "#0C111F",
        brightColor: "#F9EC7D"
      }
    },
  },
  plugins: [],
}


// export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
// export const theme = {
//   extend: {},
// };
// export const plugins = [];


// module.exports = {
//   content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }