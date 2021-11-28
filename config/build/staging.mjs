import { client } from './common'
import HTMLPlugin from 'html-webpack-plugin'
import merge from 'merge-deep'
import path from 'path'
import TimeFixPlugin from 'time-fix-plugin'
import TerserPlugin from 'terser-webpack-plugin'

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

export { client }
