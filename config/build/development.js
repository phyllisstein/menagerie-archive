const { client } = require('./common')
const CopyPlugin = require('copy-webpack-plugin')
const HTMLPlugin = require('html-webpack-plugin')
const merge = require('merge-deep')
const ReactRefreshPlugin = require('@webhotelier/webpack-fast-refresh')
const webpack = require('webpack')

client
  .mode('development')
  .devtool('cheap-module-source-map')

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

client.module
  .rule('style')
    .use('mini-css-extract')
      .tap(options => merge(options, { hmr: true, reloadAll: true }))

client.output
  .publicPath('/')

client
  .plugin('html')
    .use(HTMLPlugin, [
      { hash: true, template: 'index.ejs' },
    ])

client
  .plugin('hmr')
  .use(webpack.HotModuleReplacementPlugin)

client
  .plugin('fast-refresh')
    .use(ReactRefreshPlugin)

module.exports = client.toConfig()
