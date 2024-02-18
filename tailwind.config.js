/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'md': '845px'
    },
    extend: {
      backgroundColor: {
        'hex-F9FBFD': '#F9FBFD',
      },
    },
  },
  plugins: [],
};
