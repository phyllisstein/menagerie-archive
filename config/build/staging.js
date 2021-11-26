const { client } = require('./common')
const HTMLPlugin = require('html-webpack-plugin')
const merge = require('merge-deep')
const path = require('path')
const TimeFixPlugin = require('time-fix-plugin')
const TerserPlugin = require('terser-webpack-plugin')

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
            displayName: false,
            fileName: false,
            ssr: false,
          },
        ],
      ],
    }),
  )
  .end()

client
  .plugin('define')
  .tap(([options]) => [merge(options, { __DEV__: JSON.stringify(false) })])

client.plugin('html').use(HTMLPlugin, [
  {
    chunks: ['main'],
    filename: 'index.html',
    hash: true,
    scriptLoading: 'module',
    template: './bootstrap/index.html',
  },
])

client.optimization
  .runtimeChunk('single')
  .merge({
    moduleIds: 'deterministic',
  })

client.optimization
  .minimizer('terser')
    .use(TerserPlugin, [
      {
        extractComments: /^$/,
        terserOptions: {
          ecma: '2020',
        },
      },
    ])

exports.client = client
