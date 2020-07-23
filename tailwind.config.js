const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: {
    enabled: false,
    content: ["**/*.html"],
  },
  theme: {
    extend: {
      container: {
        center: true,
      },
    },
  },
  variants: {},
  plugins: [
    plugin(function({ addBase, config }) {
      addBase({
        'h1': { fontSize: config('theme.fontSize.4xl') },
        'h2': { fontSize: config('theme.fontSize.3xl') },
        'h3': { fontSize: config('theme.fontSize.2xl') },
        'h4': { fontSize: config('theme.fontSize.xl') },
        'h5': { fontSize: config('theme.fontSize.lg') },
        'h6': { fontSize: config('theme.fontSize.base') },
      })
    })
  ],
}
