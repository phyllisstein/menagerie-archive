const { client } = require('./common')
const CopyPlugin = require('copy-webpack-plugin')
const HTMLPlugin = require('html-webpack-plugin')
const merge = require('merge-deep')

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

client.resolve.alias
  .set('react-dom', 'vendor/react-dom')

client.output
  .publicPath('/')

client
  .plugin('html')
    .use(HTMLPlugin, [
      { hash: true },
    ])

module.exports = client.toConfig()
