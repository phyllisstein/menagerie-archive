#!/usr/bin/env node

/* global PhusionPassenger:false */

const { client } = require('./config/build/development')
const devMiddleware = require('webpack-dev-middleware')
const historyAPIFallback = require('connect-history-api-fallback')
const express = require('express')
const hotMiddleware = require('webpack-hot-middleware')
const webpack = require('webpack')

process.on('unhandledRejection', err => {
  throw new Error(err)
})

const { PORT = '9090', VIRTUAL_HOST = '0.0.0.0' } = process.env

const app = express()

const config = client.toConfig()
const compiler = webpack(config)

app.use(historyAPIFallback({}))
app.use(devMiddleware(compiler))
app.use(hotMiddleware(compiler))

app.listen(PORT, VIRTUAL_HOST, () => {
  console.log(`Server listening on port: ${ PORT }!`)
})
