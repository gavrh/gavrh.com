module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'primary-bg':   '#242423 ',
          'secondary-bg': '#20201F',
          'tertiary-bg':   '#1a1a19',
        },
        height: {
          '32rem': '32rem',
          '35rem': '35rem'
        },
        transitionProperty: {
          'sidebarIcons': 'border-radius, color, background-color, box-shadow',
          'wh': 'width, height',
        },
        boxShadow: {
          "bottom": '0px 3px 8px 0px rgb(0 0 0 / 0.2)'
        },
      },
    },
    plugins: [
      require('@tailwindcss/line-clamp'),
      require('tailwind-scrollbar-hide'),
      function ({ addVariant }) {
        addVariant('child', '& > *');
        addVariant('child-hover', '& > *:hover');
      },
    ],
  }
  