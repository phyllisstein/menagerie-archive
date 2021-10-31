#!/usr/bin/env node

import chroma from 'chroma-js'
import GM from 'gm'
import path from 'path'
import R from 'ramda'
import sharp from 'sharp'

const gm = GM.subClass({ imageMagick: true })

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

const getGMBuffer = (gmInstance, format = 'TIFF') => new Promise((resolve, reject) => {
  gmInstance.toBuffer(format, (err, buffer) => {
    if (err) {
      return reject(err)
    }

    resolve(buffer)
  })
})

export async function processImage (imageFileName) {
  const image = gm(imageFileName)
    .colorspace('LAB')

  const buffer = await getGMBuffer(image)
  const pixelArray = new Uint8ClampedArray(buffer)

  const transformedPixelArray = R.pipe(
    R.splitEvery(3),
    R.map(([L, a, b]) => {
      const transformedLab = [
        unageLightness(L),
        unageA(a),
        unageB(b),
      ]
      return transformedLab
    }),
    R.flatten,
  )(pixelArray)

  return new Promise((resolve, reject) => {
    gm(Buffer.from(transformedPixelArray), 'la-grande-jatte-refreshed.tiff')
      .stream('TIFF', (err, image) => {

      })
  })
}

await processImage(path.resolve('./src/assets/la-grande-jatte.jpg'))
