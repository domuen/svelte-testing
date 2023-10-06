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
      "button-disabled-bg": "#3f3f3f",
      "button-hover-bg": "#5b5b5b",
      "button-active-bg": "#626262",
      "button-text": "#f8f8f8",

      "nav-button-enabled-bg": "#393939",
      "nav-button-hover-bg": "#404040",
      "nav-button-active-bg": "#4d4d4d",
      "nav-button-text": "#f8f8f8"
    }
  },
  plugins: []
}
