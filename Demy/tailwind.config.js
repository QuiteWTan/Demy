/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lora': ["Lora'", "serif"],
        'poppins': ['Poppins', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'play': ['Playfair Display', 'serif'],
        'caveat': ['Caveat', 'cursive'],
        'Robot': ['Roboto', 'sans-serif'],
        'ysa': ['Ysabeau Office', 'sans-serif']
      },
      gridTemplateColumns: {

        'feat': 'minmax(80px,160px) minmax(80px,160px) minmax(200px,350px) minmax(200px,350px)',
        'less': 'repeat(2,minmax(320px,500px))'
      },
      gridTemplateRows: {
        
        'feat1': 'repeat(3, minmax(340px, 500px))',
      },
      animation: {
        slide: "slide 20s linear infinite"
      },
      keyframes: {
        slide: {
          "0%,100%" : {transform: "translateX(5%)"},
          "50%": {transform: "translateX(-100%)"}
        }
      }
    },
  },
  plugins: [
    
  ]
}

