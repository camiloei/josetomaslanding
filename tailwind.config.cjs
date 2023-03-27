/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontSize: {
        xxs: [
          '0.5rem',
          {
            lineHeight: '1rem',
          },
        ],
      },
    },
  },
  plugins: [],
};
