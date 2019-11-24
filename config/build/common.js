const Config = require('webpack-chain')
const merge = require('merge-deep')
const nodeExternals = require('webpack-node-externals')
const path = require('path')
const webpack = require('webpack')

const BABEL_OPTIONS = {
  babelrc: false,
  cacheDirectory: true,
  plugins: [
    ['@babel/proposal-decorators', {
      legacy: true,
    }],
    ['@babel/proposal-class-properties', {
      loose: true,
    }],
    '@babel/proposal-do-expressions',
    '@babel/proposal-export-default-from',
    '@babel/proposal-export-namespace-from',
    '@babel/proposal-function-bind',
    '@babel/proposal-logical-assignment-operators',
    '@babel/proposal-nullish-coalescing-operator',
    '@babel/proposal-numeric-separator',
    '@babel/proposal-optional-catch-binding',
    '@babel/proposal-optional-chaining',
    ['@babel/proposal-pipeline-operator', {
      proposal: 'smart',
    }],
    '@babel/proposal-throw-expressions',
    '@babel/syntax-dynamic-import',
    ['inline-react-svg', {
      svgo: {
        plugins: [
          { cleanupAttrs: true },
          { cleanupListOfValues: true },
          { cleanupNumericValues: true },
          { collapseGroups: true },
          { convertPathData: true },
          { convertShapeToPath: true },
          { convertTransform: true },
          { mergePaths: true },
          { removeComments: true },
          { removeDoctype: true },
          { removeEditorsNSData: true },
          { removeEmptyAttrs: true },
          { removeEmptyContainers: true },
          { removeEmptyText: true },
          { removeHiddenElems: true },
          { removeMetadata: true },
          { removeNonInheritableGroupAttrs: true },
          { removeRasterImages: true },
          { removeScriptElement: true },
          { removeUnknownsAndDefaults: true },
          { removeUnusedNS: true },
          { removeUselessDefs: true },
          { removeUselessStrokeAndFill: true },
          { removeXMLNS: true },
          { removeXMLProcInst: true },
        ],
      },
    }],
    'lodash',
    ['ramda', {
      useES: true,
    }],
    'react-loadable/babel',
  ],
  presets: [
    ['@babel/env', {
      corejs: {
        proposals: true,
        version: 3,
      },
      modules: false,
      targets: {
        browsers: ['last 2 major versions'],
      },
      useBuiltIns: 'usage',
    }],
    '@babel/typescript',
  ],
}

const client = new Config()
const server = new Config()

client
  .name('client')
  .context(path.resolve('./src'))
  .mode('development')
  .target('web')

client
  .entry('main')
    .add('./client')

client.output
  .chunkFilename('js/[name].js')
  .filename('js/[name].js')
  .path(path.resolve('build', 'public'))
  .publicPath('/')

client.module
  .rule('babel')
    .test(/\.(j|t)sx?$/)
    .exclude
      .add(/(node_modules\/(?!@fortawesome))/)
      .add(/vendor/)
      .end()
    .use('babel')
      .loader('babel-loader')
      .options(BABEL_OPTIONS)

client.module
  .rule('fonts')
    .test(/\.(woff2?)$/)
    .include
      .add(/vendor\/fonts/)
      .end()
    .use('file')
      .loader('file-loader')
      .options({ name: 'fonts/[name].[ext]' })

client.module
  .rule('style-raw')
    .test(/\.css$/)
    .use('style')
      .loader('style-loader')
      .options({
        insert: element => {
          var head = document.querySelector('head')
          head.insertBefore(element, head.firstElementChild)
        },
      })
      .end()
    .use('css')
      .loader('css-loader')

client.module
  .rule('images')
    .test(/\.(jpe?g|png|webp|ico)$/)
    .use('file')
      .loader('url-loader')
      .options({ limit: 2048, name: 'img/[name].[ext]' })

client.module
  .rule('videos')
    .test(/\.(mp4|webm)$/)
    .use('file')
      .loader('file-loader')
  .options({ name: 'video/[name].[ext]' })

client.resolve
  .enforceExtension(false)
  .alias
    .set('gsap', 'vendor/gsap')
    .end()
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
    .add(path.resolve('src'))
    .add(path.resolve('node_modules'))
    .end()

client
  .plugin('define')
  .use(webpack.DefinePlugin, [
    {
      __DEV__: JSON.stringify(true),
      __SSR__: JSON.stringify(false),
    },
  ])

client
  .plugin('ignore-moment')
  .use(webpack.IgnorePlugin, [
    { contextRegExp: /moment/, resourceRegExp: /^\.\/locale$/ },
  ])

client
  .merge({
    cache: {
      buildDependencies: {
        config: [
          __filename,
        ],
      },
      type: 'filesystem',
    },
  })

server
  .name('server')
  .context(path.resolve('./src'))
  .target('node')

server
  .entry('main')
    .add('./server')

server.output
  .filename('app.js')
  .libraryTarget('commonjs-module')
  .path(path.resolve('dist'))
  .pathinfo(false)

server.module
  .rule('babel')
    .test(/\.(j|t)sx?$/)
    .exclude
      .add(/(node_modules\/(?!@fortawesome))/)
      .add(/vendor/)
      .end()
    .use('babel')
      .loader('babel-loader')
      .options(BABEL_OPTIONS)

server.module
  .rule('images')
    .test(/\.(jpe?g|png|webp|ico)$/)
    .use('file')
      .loader('url-loader')
      .options({ emitFile: false, limit: 2048, name: 'img/[name].[ext]' })

server.module
  .rule('videos')
    .test(/\.(mp4|webm)$/)
    .use('file')
      .loader('file-loader')
      .options({ emitFile: false, name: 'video/[name].[ext]' })

server.resolve
  .enforceExtension(false)
  .alias
    .set('gsap', 'vendor/gsap')
    .end()
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
    .add(path.resolve('src'))
    .add(path.resolve('node_modules'))
    .end()

server
  .plugin('define')
  .use(webpack.DefinePlugin, [
    {
      __DEV__: JSON.stringify(true),
      __SSR__: JSON.stringify(false),
    },
  ])

server
  .plugin('ignore-moment')
  .use(webpack.IgnorePlugin, [
    { contextRegExp: /moment/, resourceRegExp: /^\.\/locale$/ },
  ])

server
  .externals(
    [
      (_context, request, callback) => {
        if (/stats\.json$/.test(request)) {
          return callback(null, `commonjs ${ request }`)
        }
        callback()
      },
      nodeExternals(),
    ],
  )

server
  .merge({
    cache: {
      buildDependencies: {
        config: [
          __filename,
        ],
      },
      type: 'filesystem',
    },
  })


module.exports = { client, server }
