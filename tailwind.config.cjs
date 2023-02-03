/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#00040f',
        secondary: '#00f6ff',
        dimWhite: 'rgba(255, 255, 255, 0.7)',
        dimBlue: 'rgba(9, 151, 124, 0.1)',
        btnHoverGray: 'rgba(157, 157, 158)',
        btnGray: 'rgba(176, 176, 178)',
        bgNavy: 'rgba(30, 41, 59, 0.6)',
        bgWhite: 'rgba(248, 248, 248)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'main-bg': "url('./assets/main-bg.jpeg')",
        'main-bg-mobile': "url('./assets/main-bg-mobile.jpeg')",
      },
      spacing: {
        25: '5.5rem',
        'neg-inf': '-9999px',
      },
      gridTemplateColumns: {
        min100: 'repeat(1, 100%)',
      },
      fontFamily: {
        Solitreo: 'Solitreo',
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [],
};
