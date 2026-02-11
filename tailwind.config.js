/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Merriweather', 'serif'],
        'body': ['Lato', 'sans-serif'],
      },
      colors: {
        'socium': {
          'primary': '#0f0f1a',
          'secondary': '#990000',
          'accent': '#2A2829',
          'background': '#e0e0da',
        }
      }
    },
  },
  plugins: [],
}
