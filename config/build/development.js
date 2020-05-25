const { client } = require('./common')
const ErrorOverlayPlugin = require('@webhotelier/webpack-fast-refresh/error-overlay')
const HTMLPlugin = require('html-webpack-plugin')
const merge = require('merge-deep')
const ReactRefreshPlugin = require('@webhotelier/webpack-fast-refresh')
const webpack = require('webpack')

client
    .mode('development')
    .devtool('cheap-module-source-map')

client.output
    .publicPath('/')

client
    .entry('main')
        .prepend('@webhotelier/webpack-fast-refresh/runtime')
        .end()
    .entry('impress-demo')
        .prepend('@webhotelier/webpack-fast-refresh/runtime')
        .end()

client.module
    .rule('babel')
        .use('babel')
            .tap(options =>
                merge(
                    options,
                    {
                        plugins: [
                            'react-refresh/babel',
                            ['styled-components', {
                                displayName: true,
                                fileName: true,
                                ssr: false,
                            }],
                        ],
                    },
                ),
            )
            .end()
        .use('fast-refresh')
            .after('babel')
            .loader('@webhotelier/webpack-fast-refresh/loader')

client.module
    .rule('style')
        .use('mini-css-extract')
            .tap(options => merge(options, { hmr: true, reloadAll: true }))

client.module
    .rule('pug')
        .test(/\.pug$/)
        .use('pug')
            .loader('pug-loader')

client
    .plugin('define')
    .tap(([options]) => [
        merge(options, { __DEV__: JSON.stringify(true) }),
    ])

client
    .plugin('html-main')
        .use(HTMLPlugin, [
            {
                chunks: ['main'],
                filename: 'index.html',
                hash: true,
                scriptLoading: 'defer',
                template: 'index.pug',
            },
        ])

client
    .plugin('html-impress-demo')
        .use(HTMLPlugin, [
            {
                chunks: ['impress-demo'],
                filename: 'impress-demo.html',
                hash: true,
                template: 'impress-demo/index.pug',
            },
        ])

client
    .plugin('hmr')
    .use(webpack.HotModuleReplacementPlugin)

client
    .plugin('fast-refresh')
        .use(ReactRefreshPlugin)

client
    .plugin('error-overlay')
        .use(ErrorOverlayPlugin)

client
    .set('cache', {
        type: 'filesystem',
    })

module.exports = client.toConfig()
