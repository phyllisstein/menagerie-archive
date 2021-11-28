#!/usr/bin/env node

/* global PhusionPassenger:false */

import childProcess from 'child_process'
import { client } from './config/build/development.mjs'
import devMiddleware from 'webpack-dev-middleware'
import { fileURLToPath } from 'url'
import historyAPIFallback from 'connect-history-api-fallback'
import express from 'express'
import hotMiddleware from 'webpack-hot-middleware'
import path from 'path'
import { promisify } from 'util'
import webpack from 'webpack'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const { PORT = '9090', VIRTUAL_HOST = '0.0.0.0' } = process.env
const app = express()

const config = client.toConfig()
const compiler = webpack(config)

app.use(historyAPIFallback({}))
app.use(devMiddleware(compiler))
app.use(hotMiddleware(compiler))

app.listen(PORT)
