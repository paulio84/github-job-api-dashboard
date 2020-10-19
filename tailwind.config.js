module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    boxShadow: {
      default: '0px 2px 4px rgba(0, 0, 0, 0.05)',
      lg: '0px 2px 8px rgba(0, 0, 0, 0.1)'
    },
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
