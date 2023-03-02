/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./**/*.{js}",],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['var(--font-rubik)'],
      },
      colors: {
        'primary-var': {
          '50': '#edf4ff',
          '100': '#deebff',
          '200': '#c3daff',
          '300': '#9fbfff',
          '400': '#789bff',
          '500': '#4b6bfb', // primary
          '600': '#3a4cf1',
          '700': '#2d3bd5',
          '800': '#2835ab',
          '900': '#283487',
        },
        'accent-var': {
          '50': '#effaf5',
          '100': '#d7f4e4',
          '200': '#b3e7cd',
          '300': '#67cba0', // accent 
          '400': '#4dba8e',
          '500': '#2b9e74',
          '600': '#1c7f5d',
          '700': '#16664c',
          '800': '#14513e',
          '900': '#114334',
        },
        'secondary-var': {
          '50': '#f5f7fa',
          '100': '#ebeef3',
          '200': '#d2d9e5',
          '300': '#abb9ce',
          '400': '#7b92b2', // secondary
          '500': '#5d769a',
          '600': '#495e80',
          '700': '#3c4c68',
          '800': '#344158',
          '900': '#2f394b',
        },
      },
      animation: {
        'move-bg-slow': 'move-bg 10s linear alternate infinite',
      },
      keyframes: {
        'move-bg': {
          '0%':   { 'background-position': '0% 0' },
          '100%': { 'background-position': '100% 0'}
        }
      },
    },
  },
  daisyui: {
    themes: ["corporate"]
  },
  plugins: [require("daisyui")],
}
