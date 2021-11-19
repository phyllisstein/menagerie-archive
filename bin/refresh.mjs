#!/usr/bin/env node

import chroma from 'chroma-js'
import { globby } from 'globby'
import path from 'path'
import PQueue from 'p-queue'
import * as R from 'ramda'
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

const DELTA = {
  GREEN: [12, -14, 21],
  ORANGE: [12, 4, 21],
  YELLOW: [16, -5, 27],
}

export function refreshLightness (L) {
  const unscaled = R.clamp(
    0,
    255,
    255 * (0.834 * (L / 100) ** 2 + 0.309 * (L / 100) + 0.145),
  )

  return (unscaled / 255) * 100
}

export function refreshA (a) {
  const unscaled = R.clamp(0, 255, 255 * (1.077 * ((a + 128) / 255) - 0.039))
  return unscaled - 127
}

export function refreshB (b) {
  const unscaled = R.clamp(0, 255, 255 * (1.09 * ((b + 128) / 255) - 0.054))
  return unscaled - 127
}

function azinc (lab) {
  let inSitu = chroma.lab(lab)

  const sortedColors = Object.entries(IN_SITU)
    .sort(([, color1], [, color2]) => {
      const distance1 = chroma.distance(inSitu, color1)
      const distance2 = chroma.distance(inSitu, color2)
      return distance2 - distance1
    })
  const [colorName, _] = sortedColors.at(0)

  if (chroma.distance(inSitu, IN_SITU[colorName]) <= 20) {
    inSitu = inSitu.set('lab.l', `+${ DELTA[colorName][0] }`)
    inSitu = inSitu.set('lab.a', `+${ DELTA[colorName][1] }`)
    inSitu = inSitu.set('lab.b', `+${ DELTA[colorName][2] }`)
  }

  return inSitu
}

export async function processImage (imageFileName) {
  let { data, info } = await sharp(imageFileName, { limitInputPixels: false })
    .raw()
    .toBuffer({ resolveWithObject: true })

  for (let byte = 0; byte < data.length; byte += 3) {
    const red = data.readUint8(byte)
    const green = data.readUint8(byte + 1)
    const blue = data.readUint8(byte + 2)
    let [L, a, b] = chroma.rgb(red, green, blue).lab()
    L = refreshLightness(L)
    a = refreshA(a)
    b = refreshB(b)
    const azincAll = azinc([L, a, b])
    // const newRGB = azincAll.rgb()
    const newRGB = chroma.lab(L, a, b).rgb()
    data.writeUint8(newRGB[0], byte)
    data.writeUint8(newRGB[1], byte + 1)
    data.writeUint8(newRGB[2], byte + 2)
  }

  try {
    sharp(data, { limitInputPixels: false, raw: info }).toFile(
      imageFileName.replace('.jpg', '-refreshed.jpg'),
    )
  } finally {
    data = null
  }
}

const images = await globby(process.argv.slice(2))
const queue = new PQueue({ concurrency: 3 })

for await (const image of images) {
  queue.add(() => processImage(image))
}
