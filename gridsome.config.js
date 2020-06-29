// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')
const postcssPresetEnv = require('postcss-preset-env')

const postcssPlugins = [
  tailwind(),
  postcssPresetEnv({ stage: 0 }),
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss(require('./purgecss.config.js')))

module.exports = {
  siteName: 'Nate Dunn (@natedunn)',
  siteDescription: 'Front-end web developer & designer',
  siteUrl: 'https://personal-site-gridsome.netlify.com',
  pathPrefix: '/',
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Documentation', // Required
        baseDir: './docs', // Where .md files are located
        pathPrefix: '/docs', // Add route prefix. Optional
        template: './src/templates/Documentation.vue', // Optional
        plugins: [
          ['gridsome-plugin-remark-shiki', { theme: 'nord', skipInline: true }]
        ],
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'posts/**/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        feedOptions: {
          title: 'Gridsome Portfolio Starter Blog',
          feed_url: 'https://personal-site-gridsome.netlify.com/rss.xml',
          site_url: 'https://personal-site-gridsome.netlify.com/'
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.summary,
          url: 'https://personal-site-gridsome.netlify.com' + node.path,
          author: 'Andre Madarang',
          date: node.date
        }),
        output: {
          dir: './static',
          name: 'rss.xml'
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      }
    },
  ],
  templates: {
    Tag: '/tag/:id',
    Post: '/post/:slug'
  },
  transformers: {
    remark: {
      plugins: [
        ['gridsome-plugin-remark-shiki', { theme: 'nord', skipInline: true }]
      ],
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}
