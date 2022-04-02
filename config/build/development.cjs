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
  .chunkFilename('js/[name].js?v=[contenthash]')
  .filename('js/[name].js?v=[contenthash]')

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

client.module
  .rule('fonts')
  .set('generator', {
    filename: 'fonts/[name][ext]?v=[contenthash]'
  })

client.module
  .rule('images')
  .set('generator', {
    filename: 'images/[name][ext]?v=[contenthash]'
  })

client.module
  .rule('videos')
  .set('generator', {
    filename: 'videos/[name][ext]?v=[contenthash]'
  })

if (enableWDYR) {
  client
    .entry('main')
    .prepend('./bootstrap/client/wdyr')
}

client
  .entry('main')
    .prepend('webpack-hot-middleware/client?reload=true')
    .end()
  .entry('pixi')
    .prepend('webpack-hot-middleware/client?reload=true')
    .end()

client
  .plugin('define')
  .tap(([options]) => [merge(options, { __DEV__: JSON.stringify(true) })])

client.plugin('html').use(HTMLPlugin, [
  {
    chunks: ['main'],
    filename: 'index.html',
    hash: true,
    scriptLoading: 'module',
    template: './bootstrap/index.html',
  },
])

client.plugin('pixi-html').use(HTMLPlugin, [
  {
    chunks: ['pixi'],
    filename: 'pixi.html',
    hash: true,
    scriptLoading: 'module',
    template: './pixi/index.html',
  },
])

client
  .plugin('hmr')
  .use(webpack.HotModuleReplacementPlugin)

client
  .plugin('fast-refresh')
  .use(ReactRefreshPlugin)

client.set('stats', 'detailed')

module.exports = { client }
