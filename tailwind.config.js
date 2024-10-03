/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue-start': '#0B236B ',
        'custom-blue-end': '#0055D2',
      },
    },
  },
  plugins: [],
}