const { client } = require('./common')
const HTMLPlugin = require('html-webpack-plugin')
const merge = require('merge-deep')
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const webpack = require('webpack')

client.mode('development').devtool('cheap-module-source-map')

client.output.publicPath('/')

client.module
  .rule('babel')
  .use('babel')
  .tap(options =>
    merge(options, {
      plugins: [
        'react-refresh/babel',
        [
          'styled-components',
          {
            displayName: true,
            fileName: true,
            ssr: false,
          },
        ],
      ],
    }),
  )
  .end()

client
  .plugin('define')
  .tap(([options]) => [merge(options, {__DEV__: JSON.stringify(true)})])

client.plugin('html-main').use(HTMLPlugin, [
  {
    chunks: ['main'],
    filename: 'index.html',
    hash: true,
    scriptLoading: 'defer',
    template: './index.html',
  },
])

client.plugin('html-impress-demo').use(HTMLPlugin, [
  {
    chunks: ['impress-demo'],
    filename: 'impress-demo.html',
    hash: true,
    template: './impress-demo/index.html',
  },
])

client.plugin('hmr').use(webpack.HotModuleReplacementPlugin)

client.plugin('fast-refresh').use(ReactRefreshPlugin)

client.set('cache', {
  type: 'filesystem',
})

client.merge({
  snapshot: {
    buildDependencies: {
      hash: false,
      timestamp: true,
    },
    module: {
      hash: false,
      timestamp: true,
    },
    resolve: {
      hash: false,
      timestamp: true,
    },
    resolveBuildDependencies: {
      hash: false,
      timestamp: true,
    },
  },
})

module.exports = client.toConfig()
