/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-Mori)'],
        serif: ['var(--font-Eiko)'],
      },
      colors: {
        background: '#F6FFFA',
      },
    },
  },
  plugins: [],
}
