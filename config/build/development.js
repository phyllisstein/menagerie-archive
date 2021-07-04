const { client } = require('./common')
const HTMLPlugin = require('html-webpack-plugin')
const merge = require('merge-deep')
const TimeFixPlugin = require('time-fix-plugin')
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { HotModuleReplacementPlugin } = require('webpack')
const { isExportSpecifier } = require('typescript')

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

client
  .plugin('time-fix')
  .use(TimeFixPlugin)


client.devServer.merge({
  historyApiFallback: true,
  host: 'talk.danielsh.here',
  static: [{ serveIndex: true }],
  watchFiles: ['config/build/*.js'],
})

client.set('cache', {
  type: 'filesystem',
})

client.merge({
  snapshot: {
    buildDependencies: {
      hash: false,
      timestamp: true,
    },
    module: {
      hash: false,
      timestamp: true,
    },
    resolve: {
      hash: false,
      timestamp: true,
    },
    resolveBuildDependencies: {
      hash: false,
      timestamp: true,
    },
  },
})

exports.client = client
