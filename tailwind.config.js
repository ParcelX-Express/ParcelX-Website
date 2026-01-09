/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0A2540',
          orange: '#FF7A00',
          gray: {
            light: '#F4F6F8',
            dark: '#1F2933',
          }
        },
        status: {
          pending: '#9CA3AF',
          transit: '#3B82F6',
          delivery: '#FF7A00',
          delivered: '#10B981',
          delayed: '#EF4444',
        }
      }
    },
  },
  plugins: [],
}
