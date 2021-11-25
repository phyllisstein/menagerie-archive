const { client } = require('./common')
const HTMLPlugin = require('html-webpack-plugin')
const merge = require('merge-deep')
const path = require('path')
const TimeFixPlugin = require('time-fix-plugin')

client
  .mode('production')
  .devtool('source-map')

client.output
  .chunkFilename('js/[name].[contenthash].js')
  .filename('js/[name].[contenthash].js')

client.module
  .rule('babel')
  .use('babel')
  .tap(options =>
    merge(options, {
      cacheDirectory: true,
      presets: [
        [
          '@babel/react',
          {
            development: false,
            runtime: 'automatic',
            useBuiltIns: true,
          },
        ],
      ],
      plugins: [
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
  .tap(([options]) => [merge(options, { __DEV__: JSON.stringify(true) })])

client.plugin('html').use(HTMLPlugin, [
  {
    chunks: ['main'],
    filename: 'index.html',
    hash: true,
    scriptLoading: 'defer',
    template: './bootstrap/index.html',
  },
])

client.merge({
  experiments: {
    futureDefaults: true,
    outputModule: true,
  },
})

exports.client = client
