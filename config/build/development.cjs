const path = require('path')

const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const HTMLPlugin = require('html-webpack-plugin')
const merge = require('merge-deep')
const TimeFixPlugin = require('time-fix-plugin')
const webpack = require('webpack')

const { client } = require('./common.cjs')

const enableWDYR = process.env.WHY_DID_YOU_RENDER != null

client
  .mode('development')
  .devtool('source-map')

client.output
  .chunkFilename('js/[name].[chunkhash].js')
  .filename('js/[name].[chunkhash].js')

client.module
  .rule('babel')
  .use('babel')
  .tap(options =>
    merge(options, {
      plugins: [
        'react-refresh/babel',
      ],
    }),
  )
  .end()

if (enableWDYR) {
  client
    .entry('main')
    .prepend('./bootstrap/client/wdyr')
}

client
  .entry('main')
  .prepend('webpack-hot-middleware/client')

client
  .plugin('define')
  .tap(([options]) => [merge(options, { __DEV__: JSON.stringify(true) })])

client.plugin('html').use(HTMLPlugin, [
  {
    filename: 'index.html',
    hash: true,
    scriptLoading: 'module',
    template: './bootstrap/index.html',
  },
])

client
  .plugin('hmr')
  .use(webpack.HotModuleReplacementPlugin)

client
  .plugin('fast-refresh')
  .use(ReactRefreshPlugin)

module.exports = { client }
