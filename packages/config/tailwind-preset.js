/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2f7ff',
          100: '#e6efff',
          200: '#c4d9ff',
          300: '#9fc3ff',
          400: '#6f9eff',
          500: '#4178ff',
          600: '#2d5fe5',
          700: '#234ac2',
          800: '#1f3fa2',
          900: '#1b357f'
        }
      },
      boxShadow: {
        card: '0 10px 40px rgba(15, 23, 42, 0.08)',
        soft: '0 4px 18px rgba(0, 0, 0, 0.06)'
      },
      borderRadius: {
        xl: '16px'
      }
    }
  }
};
