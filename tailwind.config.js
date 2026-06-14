@type {import('tailwindcss').Config}
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            primary: "#2dd4bf",
            secondary: "#fbcfe8",,
        },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["light"],
  },
}