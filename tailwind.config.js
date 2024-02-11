/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: "sans-serif",
        burtons: "burtons",
        
      },
      colors: {
        // Define your light mode color palette here
        light: {
          DEFAULT: '#ffffff', // Default background color for light mode
          text: '#000000', // Default text color for light mode
          // Add more color variables as needed
        },
      },
    },
  },
  plugins: [],
}