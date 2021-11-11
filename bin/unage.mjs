#!/usr/bin/env node

import chroma from 'chroma-js'
import { globby } from 'globby'
import path from 'path'
import PQueue from 'p-queue'
import R from 'ramda'
import sharp from 'sharp'

// sharp.concurrency(1)

export function unageLightness (L) {
  const unscaled = R.clamp(
    0,
    255,
    Math.floor(
      255 * (0.834 * (L / 100) ** 2 + 0.309 * (L / 100) + 0.145)
    ),
  )

  return Math.floor(unscaled / 255 * 100)
}

export function unageA (a) {
  const unscaled = R.clamp(
    0,
    255,
    Math.floor(
      255 * (1.077 * ((a + 128) / 255) - 0.039),
    )
  )
  return unscaled - 128
}

export function unageB (b) {
  const unscaled = R.clamp(0, 255, Math.floor(255 * (1.09 * ((b + 128) / 255) - 0.054)))
  return unscaled - 128
}

export async function processImage (imageFileName) {
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
    sharp(data, { limitInputPixels: false, raw: info })
      .toFile(imageFileName.replace('.jpg', '-unaged.jpg'))
  } finally {
    data = null
  }
}

const images = await globby('./src/assets/la-grande-jatte/*-15.jpg')
const queue = new PQueue({ concurrency: 3 })

for await (const image of images) {
  queue.add(() => processImage(image))
}
