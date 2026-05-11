/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        copper: '#d4af37',
        copperDark: '#b87333',
        copperLight: '#f3e5ab',
        darkBg: '#050505',
        darkCard: '#111111'
      }
    }
  },
  plugins: []
}
