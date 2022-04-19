const path = require('path')
const { fileURLToPath } = require('url')

const LoadablePlugin = require('@loadable/webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const merge = require('merge-deep')
const PNPPlugin = require('pnp-webpack-plugin')
const webpack = require('webpack')
const Config = require('webpack-chain')
const nodeExternals = require('webpack-node-externals')

const client = new Config()
const server = new Config()

const BABEL_OPTIONS = {
  babelrc: false,
  cacheDirectory: true,
  ignore: [/node_modules/],
  plugins: [
    '@babel/syntax-dynamic-import',
    '@emotion/babel-plugin',
    '@loadable/babel-plugin',
    'lodash',
    'ramda',
  ],
  presets: [
    ['@babel/env', {
      bugfixes: true,
      corejs: {
        version: 3,
        proposals: true,
      },
      modules: false,
      targets: {
        chrome: '98',
        esmodules: true,
      },
      useBuiltIns: 'usage',
    }],
    [
      '@babel/react',
      {
        runtime: 'automatic',
        importSource: '@emotion/react',
        useBuiltIns: 'usage',
      },
    ],
    ['@babel/typescript', {
      allowDeclareFields: true,
    }],
  ],
}

client
  .name('client')
  .context(path.resolve('./src'))
  .target('web')
  .stats('minimal')

client
  .entry('main')
    .add('./bootstrap/client')
    .end()
  .entry('three')
    .add('./three-js/index')
    .end()

client.output
  .path(path.resolve('dist'))
  .publicPath('/')

client.module
  .rule('babel')
  .test(/\.(j|mj|t)sx?$/)
  .exclude.add(/node_modules/)
  .end()
  .use('babel')
  .loader('babel-loader')
  .options(BABEL_OPTIONS)

client.module
  .rule('fonts')
  .test(/\.(woff2?)$/)
  .set('type', 'asset')
  .set('generator', {
    filename: 'fonts/[name].[hash][ext]',
  })

client.module
  .rule('images')
  .test(/\.(jpe?g|png|webp|ico)$/)
  .set('type', 'asset')
  .set('generator', {
    filename: 'images/[name].[hash][ext]',
  })

client.module
  .rule('videos')
  .test(/\.(mp4|webm)$/)
  .set('type', 'asset')
  .set('generator', {
    filename: 'videos/[name].[hash][ext]',
  })

client.module
  .rule('svg')
  .test(/\.svg$/)
  .use('svgr')
  .loader('@svgr/webpack')
  .options({
    ref: true,
    svgo: true,
  })

client.module
  .rule('styles')
  .test(/\.css$/)
  .use('style')
  .loader('style-loader')
  .end()
  .use('css')
  .loader('css-loader')
  .end()

client.module
  .rule('sass')
  .test(/\.s[ac]ss$/)
  .use('style')
  .loader('style-loader')
  .end()
  .use('css')
  .loader('css-loader')
  .end()
  .use('resolve-url')
  .loader('resolve-url-loader')
  .end()
  .use('sass')
  .loader('sass-loader')
  .end()

client.resolve
  .enforceExtension(false)
  .extensions
  .add('.ts')
  .add('.tsx')
  .add('.wasm')
  .add('.mjs')
  .add('.js')
  .add('.jsx')
  .add('.json')
  .end()
  .modules
  .add(path.resolve('./src'))
  .add('node_modules')

client.plugin('define').use(webpack.DefinePlugin, [
  {
    __SSR__: JSON.stringify(false),
  },
])

client.plugin('loadable').use(LoadablePlugin)

client
  .plugin('copy-hyphenopoly')
  .use(CopyPlugin, [
    {
      patterns: [
        {
          from: path.resolve('node_modules/hyphenopoly/min/*.js'),
          to: path.resolve('dist/hyphenopoly/[name][ext]'),
          toType: 'template',
        },
        {
          from: path.resolve('node_modules/hyphenopoly/min/patterns/en-us.wasm'),
          to: path.resolve('dist/hyphenopoly/[name][ext]'),
          toType: 'template',
        },
      ],
    },
  ])

client.cache({
  buildDependencies: {
    config: [
      path.resolve(__dirname, 'common.cjs'),
      path.resolve(__dirname, 'development.cjs'),
      path.resolve(__dirname, 'staging.cjs'),
      // path.resolve(__dirname, 'production.cjs'),
    ],
  },
  type: 'filesystem',
})

client.merge({
  experiments: {
    cacheUnaffected: true,
    outputModule: true,
  },
})

server.name('server').context(path.resolve('./src')).target('node')

server.entry('main').add('./bootstrap/server')

server.output
  .filename('app.js')
  .libraryTarget('commonjs-module')
  .path(path.resolve('dist'))
  .pathinfo(false)

server.module
  .rule('babel')
  .test(/\.(j|mj|t)sx?$/)
  .exclude.add(/node_modules/)
  .end()
  .use('babel')
  .loader('babel-loader')
  .options(BABEL_OPTIONS)

server.module
  .rule('fonts')
  .test(/\.(woff2?)$/)
  .set('type', 'asset')
  .set('generator', {
    filename: 'fonts/[name].[hash][ext]',
  })

server.module
  .rule('images')
  .test(/\.(jpe?g|png|webp|ico)$/)
  .set('type', 'asset')
  .set('generator', {
    filename: 'images/[name].[hash][ext]',
  })

server.module
  .rule('videos')
  .test(/\.(mp4|webm)$/)
  .set('type', 'asset')
  .set('generator', {
    filename: 'videos/[name].[hash][ext]',
  })

server.module
  .rule('svg')
  .test(/\.svg$/)
  .use('svgr')
  .loader('@svgr/webpack')
  .options({
    ref: true,
    svgo: true,
  })

server.module
  .rule('styles')
  .test(/\.css$/)
  .use('null')
  .loader('null-loader')

server.module
  .rule('sass')
  .test(/\.s[ca]ss$/)
  .use('null')
  .loader('null-loader')

server.resolve
  .enforceExtension(false)
  .extensions.add('.ts')
  .add('.tsx')
  .add('.wasm')
  .add('.mjs')
  .add('.js')
  .add('.jsx')
  .add('.json')
  .end()

server.plugin('define').use(webpack.DefinePlugin, [
  {
    __SSR__: JSON.stringify(false),
  },
])

server.plugin('loadable').use(LoadablePlugin)

server.externals([
  (_context, request, callback) => {
    if (/stats\.json$/.test(request)) {
      return callback(null, `commonjs ${ request }`)
    }
    callback()
  },
  nodeExternals(),
])

server.cache({
  buildDependencies: {
    config: [
      path.resolve(__dirname, 'common.cjs'),
      path.resolve(__dirname, 'development.cjs'),
      path.resolve(__dirname, 'staging.cjs'),
      // path.resolve(__dirname, 'production.cjs'),
    ],
  },
  type: 'filesystem',
})

module.exports = { client, server }
