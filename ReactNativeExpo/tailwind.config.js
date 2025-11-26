/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",       // file inside  app/
    "./components/**/*.{js,jsx,ts,tsx}", // components/**/*
    "./global.css",                     
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
