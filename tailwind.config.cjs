/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          maroon: '#4A0404',      // Deep Royal Maroon
          darkMaroon: '#2B0000',  // Dark Velvet Wine backdrop
          gold: '#D4AF37',        // Champagne Gold
          lightGold: '#F3E5AB',   // Soft Gold for subtitles
          cream: '#FAF6F0',       // Luxury card backdrop
          borderGold: 'rgba(212, 175, 55, 0.35)',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}