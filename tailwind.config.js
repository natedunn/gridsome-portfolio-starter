module.exports = {
  theme: {
    extend: {
      colors: {
        blue: 'var(--color-primary)',
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
      }
    },
    textColor: {
      primary: 'var(--textColor-primary)',
      secondary: 'var(--textColor-secondary)',
    }
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
