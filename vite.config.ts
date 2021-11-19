import fs from 'fs'
import path from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import Banner from 'vite-plugin-banner'
import svgrPlugin from 'vite-plugin-svgr'

const banner = fs.readFileSync(path.resolve(__dirname, './config/banner.js'), 'utf-8')

export default defineConfig({
  plugins: [
    Banner(banner),
    react({
      babel: {
        plugins: [
          [
            'ramda',
            {
              useES: true,
            },
          ],
          'macros',
        ],
      },
    }),
    // svgrPlugin({
    //   svgrOptions: {
    //     icon: true,
    //     memo: true,
    //     ref: true,
    //     typescript: true,
    //   },
    // }),
    svgrPlugin(),
  ],
  resolve: {
    alias: [
      {
        find: /^~/,
        replacement: path.resolve(__dirname, './src'),
      },
    ],
  },
})
