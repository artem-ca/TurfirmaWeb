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
      'xs': '350px',
      'sm': '640px',

      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      'inner-2': 'inset 15px -45px 25px rgba(0, 0, 0, 0.3), 1px 1px 5px rgba(0, 0, 0, 0.3)',
      none: 'none',
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'xl': '0.75rem',
      '2xl': '16px',
      '3xl': '24px',
      '4xl': '30px',
      'full': '9999px',
    },
    extend: {
      // screens: {
      //   'xs': '350px',
      //   '2sm': '900px',
      // },
      fontFamily: {
        display: ['Sen', 'San-serif', 'Roboto'],
        head: ['Playfair Display'],
        desc: ['Montserrat', 'sans-serif'],
      },

      fontSize: {
        'main-input': ['17px', '36px'],
        'home-heading': ['64px', '95px']
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

        'vinous': '#a03030',
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
        18: '4.5rem',
        19: '4.75rem',
        25: '6.25rem',
        26.5: '6.625rem',
        30: '7.5rem',
        34: '8.5rem',
        96: '650px',
      },

      width: {
        18: '4.5rem',
        19: '4.75rem',
        30: '7.5rem',
        34: '8.5rem',
        44: '11rem',
        47.5: '11.875rem',
        50: '12,5rem',
        52: '13rem',
        55: '13.75rem',
        60: '15rem',
        62.5: '15.625rem',
        70: '17.5rem',
        75: '18.75rem',
        76: '19rem',
        82: '20.5rem',
        90: '22.5rem',
        92.5: '23.125rem',
        100: '25rem',
        155: '38.75rem',
        210: '52.5rem',
        250: '62.5rem',
      },

      height: {
        19: '4.75rem',
        34: '8.5rem',
        44: '11rem',
        47.5: '11.875rem',
        50: '12,5rem',
        52: '13rem',
        55: '13.75rem',
        60: '15rem',
        62.5: '15.625rem',
        70: '17.5rem',
        75: '18.75rem',
        76: '19rem',
        82: '20.5rem',
        90: '22.5rem',
        92.5: '23.125rem',
        100: '25rem',
        155: '38.75rem',
        210: '52.5rem',
        250: '62.5rem',
      },

      space: {
        0.25: '1px',
      },

      borderWidth: {
        3: '3px',
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

      // boxShadow: {
      //   '1xl': '0 20px 30px -10px rgba(0, 0, 0, 0.3)',
      //   '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      // },
      dropShadow: {
        '3xl': '0 -15px 85px rgba(0, 0, 0, 0.25)',
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
