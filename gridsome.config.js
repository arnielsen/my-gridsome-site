// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
  tailwind(),
]

if(process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'arnielsen101',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
      ]
    }
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'posts/**/*.md',
        typeName: 'Post',
        remark: {
          plugins: [
            // ...local plugins
          ]
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/**/*.md',
        typeName: 'Pages',
        remark: {
          plugins: [
            // ...local plugins
          ]
        }
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`
      }
    },
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  }
}
