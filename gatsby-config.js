const path = require('path')

const IS_DEVELOPMENT = process.env.gatsby_executing_command !== 'build'

module.exports = {
  siteMetadata: {
    title: 'An Evening With…',
    description: 'Talks and performances.',
    author: 'Daniel P. Shannon (daniel@daniel.sh)',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-helmet',
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: IS_DEVELOPMENT,
        minify: !IS_DEVELOPMENT,
        pure: !IS_DEVELOPMENT,
        ssr: !IS_DEVELOPMENT,
        transpileTemplateLiterals: !IS_DEVELOPMENT,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: path.resolve('src', 'pages'),
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.resolve('src', 'images'),
      },
    },
    {
      resolve: 'gatsby-transformer-sharp',
    },
    {
      resolve: 'gatsby-plugin-sharp',
    },
  ],
}
