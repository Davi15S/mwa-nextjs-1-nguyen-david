module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-court': "url('../media/court.svg')",
      },
    },
    
    fontFamily: {
      "logo": ["Alfa Slab One", 'cursive'],
      "basic": ['DM Sans', "sans-serif"]
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
