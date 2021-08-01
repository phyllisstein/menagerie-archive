const { client } = require('./common')
const HTMLPlugin = require('html-webpack-plugin')
const merge = require('merge-deep')
const path = require('path')
const TimeFixPlugin = require('time-fix-plugin')
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { HotModuleReplacementPlugin } = require('webpack')

const enableWDYR = process.env.WHY_DID_YOU_RENDER != null

client
  .mode('development')
  .devtool('cheap-module-source-map')

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
    .prepend('./client/wdyr')
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
    scriptLoading: 'defer',
    template: './bootstrap/index.html',
  },
])

client
  .plugin('hmr')
  .use(HotModuleReplacementPlugin)

client
  .plugin('fast-refresh')
  .use(ReactRefreshPlugin)

client.cache({
  buildDependencies: {
    config: [
      __filename,
      path.resolve(__dirname, 'common.js'),
    ],
  },
  type: 'filesystem',
})

client.cache(false)

client.merge({
  experiments: {
    executeModule: true,
    lazyCompilation: {
      entries: false,
      imports: true,
    },
    outputModule: true,
  },
})

exports.client = client
