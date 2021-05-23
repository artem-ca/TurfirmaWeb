const { tailwindExtractor } = require('tailwindcss/lib/lib/purgeUnusedStyles')

module.exports = {
  mode: 'aot',
  purge: {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    options: {
      defaultExtractor: (content) => [
        // If this stops working, please open an issue at https://github.com/svelte-add/tailwindcss/issues rather than bothering Tailwind Labs about it
        ...tailwindExtractor(content),
        // Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
        ...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(
          ([_match, group, ..._rest]) => group
        ),
      ],
    },
    safelist: [/^svelte-[\d\w]+$/],
  },
  theme: {
    extend: {
      fontFamily: {
        display: ['Sen', 'San-serif', 'Roboto'],
      },

      fontSize: {
        'main-input': ['17px', '36px'],
      },

      colors: {
        blue: {
          450: '#5F99F7',
        },

        'total-black': '#000',

        'darkest-gray': '#141414',
        'dark-gray': '#2b2b2b',
        'default-gray': '#333',
        'light-gray': '#c4c4c4',

        'pale-white': '#fafafa',

        'alizarin-red': '#e41d2d',
      },

      textColor: {
        'dark-gray': '#2b2b2b',
        'pale-white': '#fafafa',
      },

      screens: {
        xs: '330px',
      },

      backgroundImage: (theme) => ({
        'top-background': "url('img/mayak_vecher.jpg')",
      }),

      margin: {
        96: '650px',
      },

      width: {
        34: '8.5rem',
        76: '19rem',
        210: '52.5rem',
      },

      height: {
        62.5: '15.625rem',
        82: '20.5rem',
      },

      space: {
        0.25: '1px',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
