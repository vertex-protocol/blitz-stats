/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'white': '#FFFFFF',
      'gray-1': '#A2A2A6',
      'gray-2': '#323237',
      'gray-3': '#1D1D22',
      'gray-4': '#17151D',
      'pink': '#FF036D',
      'green': '#4A9A7D',
      'red': '#AF5067',
    },
    extend: {
      height: {
        'custom': '25.5rem',
      }
    }
  },
  plugins: [],
}
