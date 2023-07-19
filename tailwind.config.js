/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-bg': "url('/assets/main-bg.svg')",
        'main-btn': "url('/assets/main-btn.svg')",
        'main-text': "url('/assets/main-text.svg')",
        'main-logo': "url('/assets/main-logo.png')",
        'rules-bg': "url('/assets/rules-bg.svg')",
      },
      fontFamily: {
        parimatch: ["Pari-Match Regular"]
      },
    },
  },
  plugins: [],
}

