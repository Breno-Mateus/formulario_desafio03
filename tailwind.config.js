/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        inputColor: 'rgba(0, 0, 0, 0.2)',
        hoverColor: 'rgba(0, 0, 0, 0.4)',
        textColor: '#fff',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

