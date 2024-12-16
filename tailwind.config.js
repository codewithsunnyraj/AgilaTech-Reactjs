/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'home-header':"url('./src/assets/hero-banner.png')",
        'testimonial':"url('./src/assets/testimonial-bg2.png')",
        'bg-tech':"url('./src/assets/bg-tech.png')",
        'bg-footer':"url('./src/assets/footer-bg.png')"

      },
      backgroundColor:{
        'btn-nav':'#50AF9B',
         'light-green':'#50AF9B'
      },
      colors:{
       'text-website':'#50AF9B'
      },
      fontFamily:{
        'lora-font':'"Lora", serif',
        'inter':'"Inter", sans-serif'
      },
      keyframes: {
        'left-arrow': {
          '0%': {
            transform: 'translateX(-5px)', // Corrected syntax
          },
          '50%': {
            transform: 'translateX(10px)', // Corrected syntax
          },
          '100%': {
            transform: 'translateX(-5px)', // Corrected syntax
          },
        },
        'top-square':{
          '0%': {
            transform: 'translateY(-5px)', // Corrected syntax
          },
          '50%': {
            transform: 'translateY(10px)', // Corrected syntax
          },
          '100%': {
            transform: 'translateY(-5px)', // Corrected syntax
          },
        }
      },
      animation: {
        'animate-x':'left-arrow 4s infinite',
        'animate-y': 'top-square 4s infinite', // Added duration
        'animation-roatee':'transform: rotateY(180deg);'
      },
    },
  },
  plugins: [],
}