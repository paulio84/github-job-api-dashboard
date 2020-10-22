const plugin = require('tailwindcss/plugin');

const colourTheme = {
  blue: { primary: '#334680', secondary: '#1e86ff' },
  gray: { dark: '#b9bdcf', light: '#f6f7fb' },
  black: '#282538',
  white: '#ffffff'
};

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    boxShadow: {
      default: '0px 2px 4px rgba(0, 0, 0, 0.05)',
      lg: '0px 2px 8px rgba(0, 0, 0, 0.1)'
    },
    colors: colourTheme,
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif']
    },
    extend: {
      gridTemplateColumns: {
        'job-grid': 'minmax(300px, 310px) auto'
      }
    }
  },
  variants: {},
  plugins: [
    plugin(function ({ addUtilities }) {
      const images = {
        '.img-size-42': {
          height: '42px',
          maxWidth: '42px'
        },
        '.img-size-90': {
          height: '90px',
          maxWidth: '90px'
        }
      };
      addUtilities(images);

      const materialIcons = {
        '.material-icons': {
          fontSize: '16px'
        }
      };
      addUtilities(materialIcons);

      const howToApply = {
        '.how-to-apply': {
          '& a': {
            color: colourTheme.blue.secondary
          }
        }
      };
      addUtilities(howToApply);

      const jobDescription = {
        '.description': {
          marginBottom: '4rem',

          '& p': {
            margin: '1rem 0'
          },

          '& ul': {
            listStyle: 'disc',
            marginLeft: '1rem',
            paddingLeft: '1rem'
          }
        }
      };
      addUtilities(jobDescription);
    })
  ]
};
