const { promises: fs } = require('fs')
const path = require('path')
const R = require('ramda')
const webpack = require('webpack')

// ========================================================================== //
// ========================== Webpack Configuration ========================= //
// ========================================================================== //
const addBannerPlugin = async ({ actions, stage }) => {
  if (stage !== 'build-javascript') {
    return
  }

  const banner = await fs.readFile('src/vendor/banner.js', { encoding: 'utf8' })
  actions.setWebpackConfig({
    plugins: [
      new webpack.BannerPlugin({
        banner,
        entryOnly: false,
        raw: true,
      }),
    ],
  })
}

const addHotEntrypoint = async ({ actions, getConfig, stage }) => {
  if (stage !== 'develop') {
    return
  }

  const config = getConfig()

  await fs.writeFile('webpack-config.json', JSON.stringify(config, null, 2))

  config.entry.commons = ['react-hot-loader/patch', ...config.entry.commons]
  actions.replaceWebpackConfig(config)
}

const addResolveSettings = ({ actions, stage }) => {
  if (stage !== 'develop') {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          'gsap': 'vendor/gsap',
          'react-dom': '@hot-loader/react-dom',
        },
        modules: [
          path.resolve('src'),
          path.resolve('node_modules'),
        ],
      },
    })
  }
}

const addTypescript = ({ actions, loaders }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        { test: /\.tsx?$/, use: loaders.js() },
      ],
    },
    resolve: {
      extensions: [
        '.js',
        '.jsx',
        '.mdx',
        '.ts',
        '.tsx',
      ],
    },
  })
}

const removeAbsoluteAliases = ({ actions, getConfig }) => {
  const config = getConfig()

  config.resolve.alias = R.omit(['react-hot-loader'], config.resolve.alias)

  actions.replaceWebpackConfig(config)
}

exports.onCreateWebpackConfig = R.pipe(
  R.tap(addBannerPlugin),
  R.tap(addHotEntrypoint),
  R.tap(addResolveSettings),
  R.tap(addTypescript),
  R.tap(removeAbsoluteAliases),
)

exports.resolvableExtensions = () => ['.js', '.jsx', '.mdx', '.ts', '.tsx']
