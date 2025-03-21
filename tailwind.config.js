import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'legal-navy': '#0A1A3A',
        'gold-accents': '#C5A047',
        'court-gray': '#5E6E82',
        primary: '#0A1A3A',
        secondary: '#C5A047',
      },
      boxShadow: {
        card: '0 5px 20px rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        heading: ['"EB Garamond Variable"', 'serif'],
        body: ['"Inter Variable"', 'sans-serif'],
      },
      letterSpacing: {
        wider: '0.05em',
      },
      fontSize: {
        'h1': '4.5rem', // 72px
        'h2': '3rem',   // 48px
        'h3': '2rem',   // 32px
      },
      animation: {
        dashArray: 'dashArray 2s ease-in-out infinite',
        dashOffset: 'dashOffset 2s linear infinite',
        spinDashArray: 'spinDashArray 2s ease-in-out infinite',
        spin: 'spin 8s ease-in-out infinite',
      },
      keyframes: {
        dashArray: {
          '0%': { strokeDasharray: '0 1 359 0' },
          '50%': { strokeDasharray: '0 359 1 0' },
          '100%': { strokeDasharray: '359 1 0 0' },
        },
        spinDashArray: {
          '0%': { strokeDasharray: '270 90' },
          '50%': { strokeDasharray: '0 360' },
          '100%': { strokeDasharray: '270 90' },
        },
        dashOffset: {
          '0%': { strokeDashoffset: '365' },
          '100%': { strokeDashoffset: '5' },
        },
        spin: {
          '0%': { rotate: '0deg' },
          '12.5%, 25%': { rotate: '270deg' },
          '37.5%, 50%': { rotate: '540deg' },
          '62.5%, 75%': { rotate: '810deg' },
          '87.5%, 100%': { rotate: '1080deg' },
        },
      },
    },
  },
  plugins: [typography, forms],
}



