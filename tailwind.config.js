/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    colors: {
      "bg": "#242424",
      "primary": "#303030",
      "secondary": "#434343",

      "button-bg": "#535353",
      "button-text": "#f8f8f8",

      "nav-button-enabled-bg": "#393939",
      "nav-button-hover-bg": "#404040",
      "nav-button-focus-bg":"#4d4d4d"
    }
  },
  plugins: []
}
