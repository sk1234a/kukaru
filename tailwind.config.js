/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kukaru: {
          green: '#1D9E75',
          light: '#E1F5EE',
          dark:  '#0F6E56',
          mid:   '#5DCAA5',
        }
      }
    },
  },
  plugins: [],
}