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
      'poppins-light': ['"Poppins Light"', 'sans-serif'],
      'roboto-regular': ['Roboto', 'sans-serif'],
      'poppins-medium': ['"Poppins Medium"', 'sans-serif'],
      'roboto-medium': ['"Roboto Medium"', 'sans-serif'],
      'poppins-bold': ['"Poppins Bold"', 'sans-serif'],
      'roboto-bold': ['"Roboto Bold"', 'sans-serif']
    }
  },
  variants: {},
  plugins: []
};
