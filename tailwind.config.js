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
        background: '#F6FFFA',
        'green-1000': '#0F3D21',
        neon: '#E3FB54',
      },
    },
  },
  plugins: [],
}
