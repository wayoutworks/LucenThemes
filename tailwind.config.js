const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: {
    enabled: false,
    content: ["**/*.html"],
  },
  theme: {
    extend: {
      fontFamily: {
        'heading': "'Mulish', sans-serif",
        'body': "'IBM Plex Sans', sans-serif"
      },
      container: {
        center: true,
      },
      colors: {
        'primary': '#f4a100',
        'secondary': '#00ba94',
        'accent': '#ed4840'
      }
    },
  },
  variants: {
    margin: ['hover'],
  },
  plugins: [
    plugin(function({ addBase, config }) {
      addBase({
        'body': { fontFamily: config("theme.fontFamily.body") },
        'h1': { 
          fontSize: config('theme.fontSize.4xl'),
          fontFamily: config("theme.fontFamily.heading")
        },
        'h2': { 
          fontSize: config('theme.fontSize.3xl'),
          fontFamily: config("theme.fontFamily.heading")
        },
        'h3': { 
          fontSize: config('theme.fontSize.2xl'),
          fontFamily: config("theme.fontFamily.heading")
        },
        'h4': { 
          fontSize: config('theme.fontSize.xl'),
          fontFamily: config("theme.fontFamily.heading")
        },
        'h5': { 
          fontSize: config('theme.fontSize.lg'),
          fontFamily: config("theme.fontFamily.heading")
        },
        'h6': { 
          fontSize: config('theme.fontSize.base'),
          fontFamily: config("theme.fontFamily.heading")
         },
      })
    })
  ],
}
