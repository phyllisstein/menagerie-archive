import { client } from './common.mjs'
import HTMLPlugin from 'html-webpack-plugin'
import merge from 'merge-deep'
import path from 'path'
import TimeFixPlugin from 'time-fix-plugin'
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import webpack from 'webpack'

const enableWDYR = process.env.WHY_DID_YOU_RENDER != null

client
  .mode('development')
  .devtool('eval-cheap-module-source-map')

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
            development: true,
            importSource: enableWDYR
              ? '@welldone-software/why-did-you-render'
              : 'react',
            runtime: 'automatic',
            useBuiltIns: true,
          },
        ],
      ],
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
    chunks: ['main'],
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

client.optimization.usedExports(false)

export { client }
