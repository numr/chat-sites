module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: '1rem',
    },
    extend: {
      colors: {
        'blue': '#4D8BF4',
        'black':'#193570',
        'green':'#13DA57',
        'gray':'#798793',
        'header-color': '#FF2E6C',
        'block-bg': '#F7F9FC',
        'theme-text': '#ED1958',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
