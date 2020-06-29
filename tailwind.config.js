module.exports = {
  purge: false,
  theme: {
    extend: {
      colors: {
        basicBlue: 'var(--color-primary)',
        whitesmoke: 'var(--color-whitesmoke)', // Ok
        // background: {
        //   primary: 'var(--bg-primary)', // Ok
        //   secondary: 'var(--bg-secondary)', // Ok
        //   form: 'var(--bg-background-form)',
        // },
        copy: {
          primary: 'var(--text-copy-primary)',
          secondary: 'var(--text-copy-hover)',
        },
        // 'border-color': {
        //   primary: 'var(--border-border-color-primary)',
        // },
      },
      borderColor: {
        primary: 'var(--borderColor-primary)',
      },
      backgroundColor: {
        primary: "var(--bg-primary)",
        'primary-invert': "var(--bg-primary-invert)",
        accent: "var(--textColor-accent)",
      },
      textColor: {
        primary: 'var(--textColor-primary)',
        'primary-invert': 'var(--textColor-primary-invert)',
        secondary: 'var(--textColor-secondary)',
        disabled: 'var(--textColor-disabled)',
        accent: 'var(--textColor-accent)'
      },
      fontFamily: {
        'sans': 'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        'mono': '"JetBrains Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      }
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          // '@apply px-6': {},
          '@screen sm': {
            maxWidth: '600px',
          },
          '@screen md': {
            maxWidth: '700px',
          },
          '@screen lg': {
            maxWidth: '800px',
          },
          '@screen xl': {
            maxWidth: '900px',
          },
        }
      })
    }
  ],
}
