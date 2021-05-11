#!/usr/bin/env node

/* global PhusionPassenger:false */

const config = require('./config/build/development')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')

process.on('unhandledRejection', err => {
  throw new Error(err)
})

let { PORT = '9090', VIRTUAL_HOST = 'localhost' } = process.env

const OPTIONS = {
  historyApiFallback: true,
  host: '0.0.0.0',
  hot: true,
  index: 'index.html',
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
  transportMode: 'ws',
  watchOptions: {
    ignored: ['.git', 'dist', 'node_modules'],
  },
}

if (typeof PhusionPassenger !== 'undefined') {
  PhusionPassenger.configure({ autoinstall: false })

  PORT = 'passenger'
  OPTIONS.public = `${ VIRTUAL_HOST }:80`
  OPTIONS.port = 80
  OPTIONS.sockPort = 443
}

const compiler = webpack(config)
const server = new WebpackDevServer(compiler, OPTIONS)

server.listen(PORT, () => {
  console.log(`Server listening on port: ${ PORT }!`)
})
