/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          brand: '#1B5E78',
          dark: '#134558',
          light: '#2a7a9e',
        },
        gold: {
          brand: '#C9A84C',
          light: '#d9bc76',
          dark: '#a8872e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
