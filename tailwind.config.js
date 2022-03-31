module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'background': '#f4f4f4',
      'primary': '#057566',
      'hover': '#009981',
      'second': '#00483d',
      'color-red': '#fd475a',
      'color-orange': '#f7941e',
    },
    borderRadius: {
      'bd8': '8px'
    },
    width: {
      'container': '1200px',
    },
    screens: {
      'tl': '640px',
      'dt': '1200px'
    },
    fontSize: {
      '13px': '0.8rem',
      '18px': '1.125rem',
    },
    extend: {
        boxShadow: {
          'shadow-primary': '0 4px 6px #00000029',
        }
    },
  },
  plugins: [],
}
