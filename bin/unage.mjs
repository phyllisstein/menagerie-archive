#!/usr/bin/env node

import chroma from 'chroma-js'
import { promises as fs } from 'fs'
import path from 'path'
import R from 'ramda'
import sharp from 'sharp'

sharp.concurrency(1)

export function unageLightness (L) {
  return R.clamp(
    0,
    100,
    Math.floor(
      100 * (0.834 * (L / 100) ** 2 + 0.309 * (L / 100) + 0.145)
    ),
  )
}

export function unageA (a) {
  return R.clamp(
    -128,
    128,
    Math.floor(
      1.077 * (a + 128 / 255) - 0.039,
    )
  )
}

export function unageB (b) {
  return R.clamp(-128, 128, Math.floor(1.09 * (b + 128 / 255) - 0.054))
}

export async function processImage (imageFileName) {
  console.log(imageFileName)

  let { data, info } = await sharp(imageFileName, { limitInputPixels: false })
    .raw()
    .toBuffer({ resolveWithObject: true })

  let pixelArray = new Uint8ClampedArray(data.buffer)

  let transformedPixelArray = R.pipe(
    R.splitEvery(3),
    R.map((rgb) => {
      const [L, a, b] = chroma(...rgb, 'rgb').lab()
      const transformedLab = [
        unageLightness(L),
        unageA(a),
        unageB(b),
      ]
      return chroma(...transformedLab, 'lab').rgb()
    }),
    R.flatten,
  )(pixelArray)

  try {
    sharp(Buffer.from(transformedPixelArray), { raw: info })
      .toFile(imageFileName.replace('.jpg', '-unaged.jpg'))
  } finally {
    data = pixelArray = transformedPixelArray = null
  }
}

const imageDir = await fs.readdir('./src/assets/la-grande-jatte')

let p = Promise.resolve()

imageDir.forEach(imageFile => {
  p = p.then(() => processImage(`./src//assets/la-grande-jatte/${ imageFile }`))
})

// await processImage('./src/assets/la-grande-jatte.jpg')
