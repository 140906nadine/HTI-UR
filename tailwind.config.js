/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['portfolio.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#eab308',
        light: '#e5e7eb',
        dark: '#1e293b',
        teritary: '#334155'
      },
      screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

