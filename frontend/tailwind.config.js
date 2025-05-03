/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors:{
//         'primary':'#5f6FFF'
//       } 
//     },
//   },
//   plugins: [],
// }
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-primary',
    'text-white',
    'rounded-full',
    'px-8',
    'py-3',
    'font-light',
    'md:block',
    'hidden'
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#5f6FFF'
      } 
    },
  },
  plugins: [],
}
