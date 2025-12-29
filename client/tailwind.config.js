/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fantasy: ['Cinzel', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'fantasy-dark': '#050505',
        'fantasy-dark-secondary': '#121212',
        'fantasy-gold': '#d4af37',
        'fantasy-gold-light': '#f3e5ab',
        // 'fantasy-accent': removed to strictly enforce black/gold theme
      },
      backgroundImage: {
        'card-gradient': 'linear-gradient(145deg, rgba(20,20,20,0.9) 0%, rgba(10,10,10,0.95) 100%)',
        'gold-gradient': 'linear-gradient(135deg, #d4af37 0%, #f3e5ab 100%)',
      }
    },
  },
  plugins: [],
}
