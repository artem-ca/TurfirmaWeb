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
    screens: {
      'sm': '640px',

      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      screens: {
        '2sm': '900px',
      },
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
        'strange-black': '#0F0F11',

        'darkest-gray': '#141414',
        'strange-gray': '#1E1E22',
        'dark-gray': '#1E1E22',
        'default-gray': '#333',
        'light-gray': '#c4c4c4',

        'pale-white': '#fafafa',

        'alizarin-red': '#e41d2d',
      },

      textColor: {
        'dark-gray': '#2b2b2b',
        'pale-white': '#fafafa',
      },
    
      backgroundImage: (theme) => ({
        'top-background': "url('img/mayak_vecher.jpg')",
      }),

      margin: {
        19: '4.75rem',
        26.5: '6.625rem',
        96: '650px',
      },

      width: {
        34: '8.5rem',
        44: '11rem',
        50: '12,5rem',
        55: '13.75rem',
        60: '15rem',
        76: '19rem',
        90: '22.5rem',
        92.5: '23.125rem',
        100: '25rem',
        155: '38.75rem',
        210: '52.5rem',
      },

      height: {
        50: '12,5rem',
        52: '13rem',
        55: '13.75rem',
        62.5: '15.625rem',
        82: '20.5rem',
      },

      space: {
        0.25: '1px',
      },

      transitionDelay: {
        5: '5ms',
        10: '10ms',
        15: '15ms',
        30: '30ms',
      },

      inset: {
        '-7.5': '1.875rem'
      },

      boxShadow: {
        '1xl': '0 20px 30px -10px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      outline: ['hover', 'active'],
    },
    animation: ['responsive', 'motion-safe', 'motion-reduce']
  },
  plugins: [],
}
