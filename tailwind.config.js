/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Birthday palette — cream paper + burgundy
        'cream':          '#F5EFE0',
        'cream-dark':     '#EDE8D5',
        'cream-border':   '#D9CEBA',
        'burg':           '#7D1835',
        'burg-mid':       '#9E2245',
        'burg-light':     '#C4788A',
        'burg-faint':     '#F2E8EB',
        // Casino / mystery palette
        'casino-black':   '#0D0D0D',
        'casino-deep':    '#1A1A1A',
        'casino-red':     '#C41E3A',
        'casino-gold':    '#D4AF37',
        'casino-gold-light': '#F5D87A',
        'casino-felt':    '#1B3A2D',
        'casino-cream':   '#F5F0E8',
      },
      fontFamily: {
        script: ['Great Vibes', 'cursive'],
        serif:  ['Playfair Display', 'serif'],
        sans:   ['Inter', 'sans-serif'],
      },
      animation: {
        'revealCard': 'revealCard 0.5s ease-out forwards',
        'floatSuit':  'floatSuit 4s ease-in-out infinite',
        'twinkle':    'twinkle 3s ease-in-out infinite',
      },
      keyframes: {
        revealCard: {
          '0%':   { opacity: '0', transform: 'scale(0.85) translateY(16px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        floatSuit: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.15', transform: 'scale(0.9)' },
          '50%':      { opacity: '0.7',  transform: 'scale(1.2)' },
        },
      },
    },
  },
  plugins: [],
}
