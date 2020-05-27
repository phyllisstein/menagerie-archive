const Config = require('webpack-chain')
const LoadablePlugin = require('@loadable/webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const merge = require('merge-deep')
const nodeExternals = require('webpack-node-externals')
const path = require('path')
const webpack = require('webpack')

const client = new Config()
const server = new Config()

const BABEL_OPTIONS = {
  babelrc: false,
  cacheDirectory: true,
  presets: [
    ['@babel/react', {
      development: true,
      runtime: 'automatic',
      useBuiltIns: true,
    }],
    ['@babel/typescript', {
      allowDeclareFields: true,
      onlyRemoveTypeImports: true,
    }],
  ],
  plugins: [
    '@babel/proposal-async-generator-functions',
    ['@babel/proposal-decorators', {
      decoratorsBeforeExport: false,
      legacy: false,
    }],
    '@babel/proposal-class-properties',
    '@babel/proposal-do-expressions',
    '@babel/proposal-export-default-from',
    '@babel/proposal-export-namespace-from',
    '@babel/proposal-function-bind',
    '@babel/proposal-function-sent',
    '@babel/proposal-logical-assignment-operators',
    '@babel/proposal-nullish-coalescing-operator',
    '@babel/proposal-numeric-separator',
    '@babel/proposal-optional-catch-binding',
    '@babel/proposal-optional-chaining',
    '@babel/plugin-proposal-partial-application',
    ['@babel/proposal-pipeline-operator', {
      proposal: 'smart',
    }],
    '@babel/proposal-private-methods',
    '@babel/proposal-throw-expressions',
    '@babel/proposal-unicode-property-regex',
    '@babel/syntax-dynamic-import',
    ['@babel/transform-regenerator', {
      async: false,
      asyncGenerators: true,
      generators: true,
    }],
    [
      'inline-react-svg',
      {
        svgo: {
          plugins: [
            {
              cleanupAttrs: true,
            },
            {
              cleanupListOfValues: true,
            },
            {
              cleanupNumericValues: true,
            },
            {
              collapseGroups: true,
            },
            {
              convertPathData: true,
            },
            {
              convertShapeToPath: true,
            },
            {
              convertTransform: true,
            },
            {
              mergePaths: true,
            },
            {
              removeComments: true,
            },
            {
              removeDoctype: true,
            },
            {
              removeEditorsNSData: true,
            },
            {
              removeEmptyAttrs: true,
            },
            {
              removeEmptyContainers: true,
            },
            {
              removeEmptyText: true,
            },
            {
              removeHiddenElems: true,
            },
            {
              removeMetadata: true,
            },
            {
              removeNonInheritableGroupAttrs: true,
            },
            {
              removeRasterImages: true,
            },
            {
              removeScriptElement: true,
            },
            {
              removeUnknownsAndDefaults: true,
            },
            {
              removeUnusedNS: true,
            },
            {
              removeUselessDefs: true,
            },
            {
              removeUselessStrokeAndFill: true,
            },
            {
              removeXMLNS: true,
            },
            {
              removeXMLProcInst: true,
            },
          ],
        },
      },
    ],
    'lodash',
    ['ramda', {
      useES: true,
    }],
    '@loadable/babel-plugin',
  ],
}

client
  .name('client')
  .context(path.resolve('./src'))
  .target('web')

client
  .entry('main')
    .add('./client')
    .end()
  .entry('impress-demo')
    .add('./impress-demo')

client.output
  .chunkFilename('js/[name].js')
  .filename('js/[name].js')
  .path(path.resolve('dist', 'public'))
  .publicPath('/')

client.module
  .rule('babel')
  .test(/\.(j|mj|t)sx?$/)
  .exclude
    .add(/node_modules/)
    .add(/vendor/)
    .end()
  .use('babel')
    .loader('babel-loader')
      .options(
        merge(
          BABEL_OPTIONS,
          {
            presets: [
              ['@babel/env', {
                corejs: {
                  proposals: true,
                  version: 3,
                },
                exclude: [
                  'transform-async-to-generator',
                  'transform-regenerator',
                ],
                modules: false,
                targets: {
                  browsers: [
                    'last 2 major versions',
                    '> 5% in US',
                    'not dead',
                    'not ie > 0',
                  ],
                },
                useBuiltIns: 'usage',
              }],
            ],
            plugins: [
              ['module:fast-async', {
                compiler: {
                  es6target: true,
                  lazyThenables: true,
                  parser: {
                    sourceType: 'module',
                  },
                  promises: true,
                  sourceMap: true,
                  wrapAwait: true,
                },
                useRuntimeModule: true,
              }],
            ],
          },
        ),
      )

client.module
  .rule('style')
  .test(/\.css$/)
  .use('mini-css-extract')
  .loader(MiniCssExtractPlugin.loader)
  .options({
    esModule: true,
  })
  .end()
  .use('css')
  .loader('css-loader')

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
  .add(path.resolve('src'))
  .add(path.resolve('vendor'))
  .add(path.resolve('node_modules'))
  .end()

client
  .plugin('define')
  .use(webpack.DefinePlugin, [
    {
      __SSR__: JSON.stringify(false),
    },
  ])

client
  .plugin('provide')
  .use(webpack.ProvidePlugin, [
    {
      React: 'react',
      ReactDOM: 'react-dom',
    },
  ])

client
  .plugin('ignore-moment')
  .use(webpack.IgnorePlugin, [
    { contextRegExp: /moment/, resourceRegExp: /^\.\/locale$/ },
  ])

client
  .plugin('mini-css-extract')
  .use(MiniCssExtractPlugin, [
    { chunkFilename: 'css/[contenthash].css', filename: 'css/[contenthash].css' },
  ])

client
  .plugin('loadable')
    .use(LoadablePlugin)

client
  .set('experiments', {
    asset: true,
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
  .test(/\.(j|mj|t)sx?$/)
  .exclude
  .add(/node_modules/)
  .add(/vendor/)
  .end()
  .use('babel')
  .loader('babel-loader')
  .options(
    merge(
      BABEL_OPTIONS,
      {
        presets: [
          ['@babel/env', {
            corejs: {
              proposals: true,
              version: 3,
            },
            exclude: [
              'transform-async-to-generator',
              'transform-regenerator',
            ],
            modules: 'commonjs',
            targets: {
              node: 'current',
            },
            useBuiltIns: 'usage',
          }],
        ],
        plugins: [
          ['module:fast-async', {
            compiler: {
              engine: true,
              es6target: true,
              lazyThenables: true,
              parser: {
                sourceType: 'module',
              },
              sourceMap: true,
              wrapAwait: true,
            },
            useRuntimeModule: true,
          }],
        ],
      },
    ),
  )

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

server.resolve
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
  .add(path.resolve('src'))
  .add(path.resolve('vendor'))
  .add(path.resolve('node_modules'))
  .end()

server
  .plugin('define')
  .use(webpack.DefinePlugin, [
    {
      __SSR__: JSON.stringify(false),
    },
  ])

server
  .plugin('provide')
  .use(webpack.ProvidePlugin, [
    {
      React: 'react',
      ReactDOM: 'react-dom',
    },
  ])

server
  .plugin('ignore-moment')
  .use(webpack.IgnorePlugin, [
    { contextRegExp: /moment/, resourceRegExp: /^\.\/locale$/ },
  ])

server
  .plugin('loadable')
    .use(LoadablePlugin)

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
  .set('experiments', {
    asset: true,
  })

module.exports = { client, server }
