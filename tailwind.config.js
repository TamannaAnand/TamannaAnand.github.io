/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        primary:'#FE9677',
        secondary:'#F64668'
      }
    },
  },
  plugins: [],
}

