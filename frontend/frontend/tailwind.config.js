/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        scrollanimation:{
            '0%': {scale: 0.8 ,opacity:0},
            '100%' :{scale:1,opacity:0}
        }
      },
      animation:{
        scroll:"scrollanimation 2s ease-in-out forward",
      }
    },
  },
  plugins: [],
}

