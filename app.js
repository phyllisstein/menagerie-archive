#!/usr/bin/env node

const config = require('./config/build/development')
const v8 = require('v8')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')

process.on('unhandledRejection', err => {
    throw new Error(err)
})

v8.setFlagsFromString('--max-old-space-size=8192')

const {
    PORT = '9280',
    VIRTUAL_HOST = 'talk.danielsh.here',
} = process.env

const OPTIONS = {
    historyApiFallback: true,
    host: '0.0.0.0',
    hot: true,
    index: 'index.html',
    injectClient: true,
    injectHot: true,
    overlay: {
        errors: true,
        warnings: false,
    },
    port: Number.parseInt(PORT, 10),
    public: `${ VIRTUAL_HOST }:${ PORT }`,
    serveIndex: true,
    sockHost: VIRTUAL_HOST,
    sockPort: Number.parseInt(PORT, 10),
    stats: 'none',
    watchOptions: {
        ignored: [
            '.git',
            'dist',
            'node_modules',
        ],
    },
}

WebpackDevServer.addDevServerEntrypoints(config, OPTIONS)

const compiler = webpack(config)

const server = new WebpackDevServer(compiler, OPTIONS)

server.listen(PORT, () => {
    console.log(`Server listening on port: ${ PORT }!`)
})
