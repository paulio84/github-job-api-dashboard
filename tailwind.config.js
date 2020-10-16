module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      blue: {
        primary: '#334680',
        secondary: '#1e86ff'
      },
      gray: {
        dark: '#b9bdcf',
        light: '#f6f7fb'
      },
      black: '#282538',
      white: '#ffffff'
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif']
    }
  },
  variants: {},
  plugins: []
};
