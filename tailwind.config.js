module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: '1rem',
    },
    extend: {
      colors: {
        'blue': '#0A40CE',
        'black':'#193570',
        'green':'#13DA57',
        'gray':'#798793',
        'headerColor': '#FF2E6C'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
