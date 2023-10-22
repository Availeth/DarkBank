/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'jost': ['Jost', 'sans-serif'],
      'pop': ['Poppins', 'sans-serif'],
      'playball': ['Playball', 'cursive'],
      'gab': ['Gabarito', 'cursive'],
      'pubsans': ['Public Sans', 'sans-serif'],
      'young': ['Young Serif', 'sans-serif'],

    },
  },

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#8855B4',
          secondary: '#00C9AF',
          accent: '#f3d0f5',
          neutral: '#373f4a',
          'base-100': '#FFFFFF',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
    ],
  },
  plugins: [require("daisyui")],


}

