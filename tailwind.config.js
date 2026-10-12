/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#e69a28',
          goldHover: '#c9811b',
          dark: '#1e293b',
          darker: '#0f172a',
          amber: '#f59e0b',
          bgLight: '#f8fafc',
          border: '#e2e8f0',
        }
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      scale: {
        '102': '1.02',
      },
      boxShadow: {
        'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      }
    }
  },
  plugins: [],
}
