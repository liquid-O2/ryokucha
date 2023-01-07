/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-Mori)'],
        serif: ['var(--font-Mori)'],
      },
      corePlugins: {
        aspectRatio: false,
      },
      colors: {
        background: '#FCFFFD',
        'background-dark': '#FBFBFA',
        primary: '#003D32',
        neon: '#E3FB54',
        'primary-dark': '#002921',
        'neon-dark': '#CBE245',
        tertiary: '#E3D9C7',
        'tertiary-light': '#3D3D00',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
