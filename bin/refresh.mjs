#!/usr/bin/env node

import chroma from 'chroma-js'
import { globby } from 'globby'
import path from 'path'
import PQueue from 'p-queue'
import R from 'ramda'
import sharp from 'sharp'

// sharp.concurrency(1)

const IN_SITU = {
  GREEN: chroma.rgb(106, 112, 75),
  ORANGE: chroma.rgb(133, 107, 75),
  YELLOW: chroma.rgb(134, 117, 73),
}

const AZINC = {
  GREEN: chroma.rgb(125, 148, 73),
  ORANGE: chroma.rgb(172, 132, 70),
  YELLOW: chroma.rgb(176, 159, 70),
}

const DISTANCE = {
  GREEN: chroma.distance(IN_SITU.GREEN, AZINC.GREEN, 'lab'),
  ORANGE: chroma.distance(IN_SITU.ORANGE, AZINC.ORANGE, 'lab'),
  YELLOW: chroma.distance(IN_SITU.YELLOW, AZINC.YELLOW, 'lab'),
}

export function refreshLightness (L) {
  const unscaled = R.clamp(
    0,
    255,
    255 * (0.834 * (L / 100) ** 2 + 0.309 * (L / 100) + 0.145),
  )

  return unscaled / 255 * 100
}

export function refreshA (a) {
  const unscaled = R.clamp(
    0,
    255,
    255 * (1.077 * ((a + 128) / 255) - 0.039),
  )
  return unscaled - 128
}

export function refreshB (b) {
  const unscaled = R.clamp(0, 255, 255 * (1.09 * ((b + 128) / 255) - 0.054))
  return unscaled - 128
}

function azinc(lab) {
  const inSitu = chroma.lab(lab)

  const color = Object.entries(IN_SITU).sort(([name1, color1], [name2, color2]) => {
    const distance1 = chroma.distance(inSitu, color1, 'lab')
    const distance2 = chroma.distance(inSitu, color2, 'lab')
    return distance1 - distance2
  })
}

export function refresh (image) {
  for (let byte = 0; byte < image.length; byte += 3) {
    let red = image.readUint8(byte)
    let green = image.readUint8(byte + 1)
    let blue = image.readUint8(byte + 2)
    let lab = chroma(red, green, blue, 'rgb').lab()
    lab[0] = refreshLightness(lab[0])
    lab[1] = refreshA(lab[1])
    lab[2] = refreshB(lab[2])
    lab = azinc(lab)
    let newRGB = chroma(L, a, b, 'lab').rgb()
    image.writeUint8(newRGB[0], byte)
    image.writeUint8(newRGB[1], byte + 1)
    image.writeUint8(newRGB[2], byte + 2)
  }

  return image
}

export function azinc (image) {

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
    L = refreshLightness(L)
    a = refreshA(a)
    b = refreshB(b)
    let newRGB = chroma(L, a, b, 'lab').rgb()
    data.writeUint8(newRGB[0], byte)
    data.writeUint8(newRGB[1], byte + 1)
    data.writeUint8(newRGB[2], byte + 2)
  }

  try {
    sharp(data, { limitInputPixels: false, raw: info })
      .toFile(imageFileName.replace('.jpg', '-refreshed.jpg'))
  } finally {
    data = null
  }
}

const images = await globby(process.argv.slice(2))
const queue = new PQueue({ concurrency: 3 })

for await (const image of images) {
  queue.add(() => processImage(image))
}
