module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#057566',
      'hover': '#009981',
      'second': '#00483d',
      'color-red': '#fd475a',
      'color-orange': '#f7941e',
    },
    borderRadius: {
      'bd8': '8px',
      'bd4' : '4px'
    },
    padding: {
      '10px': '0.625rem'
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
        },
        backgroundImage : {
            // 'heading' : "url ('./src/assets/images/heading.png')"
        }
    },
  },
  plugins: [],
}
