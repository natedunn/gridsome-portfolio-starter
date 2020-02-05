module.exports = {
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
      textColor: {
        primary: 'var(--textColor-primary)',
        secondary: 'var(--textColor-secondary)',
      },
      fontFamily: {
        'sans': 'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        'mono': '"Inconsolata", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      }
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          '@apply px-12': {},
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
