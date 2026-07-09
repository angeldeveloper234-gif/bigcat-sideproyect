/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './App.tsx',
    './index.tsx',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './constants.ts',
    './types.ts',
  ],
  theme: {
    extend: {
      screens: {
        xs: '430px',
      },
      colors: {
        brand: {
          red: '#E53935',
          primary: '#E53935', // Alias for backward compatibility
          darkRed: '#B71C1C',
          dark: '#0A0A0A',
          slate: '#1A1A1A',
          gray: '#F3F4F6',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Outfit', 'Montserrat', 'sans-serif'],
      },
      animation: {
        shimmer: 'shimmer 2s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
