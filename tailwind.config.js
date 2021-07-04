module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: (theme) => ({
      padding:  {
        default: theme('spacing.4'),
        sm: theme('spacing.5'),
        lg: theme('spacing.10'),
        xl: theme('spacing.12'),
      },
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
