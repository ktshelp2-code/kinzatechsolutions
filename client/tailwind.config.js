/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7ff',
          500: '#0f67ff',
          700: '#0747b6',
          900: '#03244f'
        }
      }
    }
  },
  plugins: []
};
