const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    // ...
    flowbite.content(),
    './src/**/*.{js,jsx,ts,tsx}', './public/index.html',
  ],
  plugins: [
    // ...
    flowbite.plugin(),
    
  ],
};