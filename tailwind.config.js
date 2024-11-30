/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          100: '#05130100', 
          200: '#051301E3',  
          300: '#051301',   
        }
      }
    },
  },
  plugins: [],
}