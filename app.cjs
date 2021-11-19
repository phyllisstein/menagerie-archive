#!/usr/bin/env node

/* global PhusionPassenger:false */

const { createServer } = require('vite')

process.on('unhandledRejection', err => {
  throw new Error(err)
})

const { PORT = '9090', VIRTUAL_HOST = '0.0.0.0' } = process.env

;(async () => {
  const port = typeof PhusionPassenger === 'undefined'
    ? PORT
    : 'passenger'

  const server = await createServer({
    configFile: './vite.config.ts',
    root: __dirname,
    server: {
      port,
    },
  })

  await server.listen()
})()
