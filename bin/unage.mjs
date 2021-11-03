#!/usr/bin/env node

import chroma from 'chroma-js'
import { promises as fs } from 'fs'
import path from 'path'
import R from 'ramda'
import sharp from 'sharp'

// sharp.concurrency(1)

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
    127,
    Math.floor(
      1.077 * (a + 128 / 255) - 0.039,
    )
  )
}

export function unageB (b) {
  return R.clamp(-128, 127, Math.floor(1.09 * (b + 128 / 255) - 0.054))
}

export async function processImage (imageFileName) {
  console.log(imageFileName)

  let { data, info } = await sharp(imageFileName, { limitInputPixels: false })
    .raw()
    .toBuffer({ resolveWithObject: true })

  for (let byte = 0; byte < data.length; byte += 3) {
    let red = data.readUint8(byte)
    let green = data.readUint8(byte + 1)
    let blue = data.readUint8(byte + 2)
    let [L, a, b] = chroma(red, green, blue, 'rgb').lab()
    L = unageLightness(L)
    a = unageA(a)
    b = unageB(b)
    let newRGB = chroma(L, a, b, 'lab').rgb()
    data.writeUint8(newRGB[0], byte)
    data.writeUint8(newRGB[1], byte + 1)
    data.writeUint8(newRGB[2], byte + 2)
  }

  try {
    sharp(data, { raw: info })
      .toFile(imageFileName.replace('.jpg', '-unaged.jpg'))
  } finally {
    data = null
  }
}

const imageDir = await fs.readdir('./src/assets/la-grande-jatte')

let p = Promise.resolve()

imageDir.forEach(imageFile => {
  p = p.then(() => processImage(`./src//assets/la-grande-jatte/${ imageFile }`))
})

// await processImage('./src/assets/la-grande-jatte.jpg')
