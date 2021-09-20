module.exports = {
  darkMode: 'class', // This can be 'media' if preferred.
  mode: 'jit',
  // Don't add a glob below `public` as Rollup doesn't
  // recognize them and will rebuild in an infinite loop.
  purge: [
    './src/**/*.svelte',
    './src/**/*.html',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        svelte: {
          DEFAULT: '#ff3e00',
          dark: '#d63600',
          light: '#ff5e29',
        },
        burn: {
          DEFAULT: 'rgba(0, 0, 0, 0.1)',
          '15': 'rgba(0, 0, 0, 0.15)',
          '20': 'rgba(0, 0, 0, 0.2)',
        },
        dodge: {
          DEFAULT: 'rgba(255, 255, 255, 0.1)',
          '15': 'rgba(255, 255, 255, 0.15)',
          '20': 'rgba(255, 255, 255, 0.2)',
        },
        zoom: '#2D8CFF',
      },
    },
  },
  variants: {},
  plugins: [],
}
