/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--primary-color) / <alpha-value>)",
        secondary: "rgb(var(--secondary-color) / <alpha-value>)",
        accent: "rgb(var(--accent-color) / <alpha-value>)",
        buttonHover: "rgb(var(--buttonHover-color) / <alpha-value>)",
        dark: "rgb(var(--dark-color) / <alpha-value>)",
        dashPrimary: "rgb(var(--dashPrimary-color) / <alpha-value>)",
        dashSecondary: "rgb(var(--dashSecondary-color) / <alpha-value>)",
        dashAccent: "rgb(var(--dashAccent-color) / <alpha-value>)",
      },
      screens: {
        'x-sm': '375px', // for small mobile
        '3xl': '1700px' //for zoom out of banner image
      }
    },
  },
  plugins: [],
}

