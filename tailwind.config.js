/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#2997ff',
        darkBlue: '#1c3d5a',
        lightBlue: '#b3e5fc',
        green: '#4caf50',
        darkGreen: '#2e7d32',
        lightGreen: '#a5d6a7',
        red: '#f44336',
        darkRed: '#d32f2f',
        lightRed: '#ffcdd2',
        yellow: '#ffeb3b',
        darkYellow: '#fbc02d',
        lightYellow: '#fff9c4',
        orange: '#ff9800',
        darkOrange: '#ef6c00',
        lightOrange: '#ffe0b2',
      }
    },
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
