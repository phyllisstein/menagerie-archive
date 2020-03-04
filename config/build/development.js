const { client } = require('./common')
const CopyPlugin = require('copy-webpack-plugin')
const HTMLPlugin = require('html-webpack-plugin')
const merge = require('merge-deep')
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const webpack = require('webpack')

client
  .devtool('cheap-module-source-map')

client
  .entry('main')
    .prepend('react-hot-loader/patch')

client.module
  .rule('babel')
    .use('babel')
      .tap(options =>
        merge(
          options,
          {
            plugins: [
              'react-refresh/babel',
              ['styled-components', {
                displayName: true,
              }],
            ],
            presets: [
              ['@babel/react', {
                development: true,
                useBuiltIns: true,
              }],
            ],
          },
        ),
      )

client.output
  .publicPath('/')

client
  .plugin('html')
    .use(HTMLPlugin, [
      { hash: true },
    ])

client
  .plugin('hmr')
  .use(webpack.HotModuleReplacementPlugin)

client
  .plugin('fast-refresh')
    .use(ReactRefreshPlugin, [
      { disableRefreshCheck: true },
    ])

client.resolve.alias
  .set('react', require.resolve('react/cjs/react.development.js'))

module.exports = client.toConfig()
