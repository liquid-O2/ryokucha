/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-Mori)'],
        serif: ['var(--font-Mori)'],
      },
      colors: {
        background: '#F4F4EE',
        primary: '#003D32',
        neon: '#E3FB54',
        'primary-dark': '#002921',
        'neon-dark': '#CBE245',
      },
    },
  },
  plugins: [],
}
