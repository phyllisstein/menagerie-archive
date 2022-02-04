#!/usr/bin/env node

import R from 'ramda'
import chroma from 'chroma-js'
import DeltaE from 'delta-e'
import { globby } from 'globby'
import path from 'path'
import PQueue from 'p-queue'
import sharp from 'sharp'

// sharp.concurrency(1)

const toLABObject = c => {
  const [L, A, B] = chroma(c).lab()
  return { L, A, B }
}

const IN_SITU_RGB = {
  GREEN: chroma.rgb(106, 112, 75),
  ORANGE: chroma.rgb(133, 107, 75),
  YELLOW: chroma.rgb(134, 117, 73),
}

const IN_SITU_LAB = R.map(c => chroma.lab(c.lab()), IN_SITU_RGB)

const AZINC = {
  GREEN: chroma.rgb(125, 148, 73),
  ORANGE: chroma.rgb(172, 132, 70),
  YELLOW: chroma.rgb(176, 159, 70),
}

const AZINC_LAB = R.map(c => chroma.lab(c.lab()), AZINC)

const DELTA_LAB = {
  GREEN: [12, -14, 21],
  ORANGE: [12, 4, 21],
  YELLOW: [16, -5, 27],
}

const DELTA_E = {
  GREEN: DeltaE.getDeltaE00(
    toLABObject(IN_SITU_LAB.GREEN),
    toLABObject(AZINC_LAB.GREEN),
  ),
  ORANGE: DeltaE.getDeltaE00(
    toLABObject(IN_SITU_LAB.ORANGE),
    toLABObject(AZINC_LAB.ORANGE),
  ),
  YELLOW: DeltaE.getDeltaE00(
    toLABObject(IN_SITU_LAB.YELLOW),
    toLABObject(AZINC_LAB.YELLOW),
  ),
}

export function refreshLightness(L) {
  const unscaled = R.clamp(
    0,
    255,
    255 * (0.834 * (L / 100) ** 2 + 0.309 * (L / 100) + 0.145),
  )

  return (unscaled / 255) * 100
}

export function refreshA(a) {
  const unscaled = R.clamp(0, 255, 255 * (1.077 * ((a + 128) / 255) - 0.039))
  return unscaled - 127
}

export function refreshB(b) {
  const unscaled = R.clamp(0, 255, 255 * (1.09 * ((b + 128) / 255) - 0.054))
  return unscaled - 127
}

function azinc(lab) {
  let inSitu = {
    L: lab[0],
    A: lab[1],
    B: lab[2],
  }

  const sortedColors = Object.entries(IN_SITU_LAB).sort(
    ([name1, color1], [name2, color2]) => {
      const color1Lab = {
        L: color1.get('lab.l'),
        A: color1.get('lab.a'),
        B: color1.get('lab.b'),
      }
      const deltaE1 = DeltaE.getDeltaE00(color1Lab, inSitu)
      const color2Lab = {
        L: color2.get('lab.l'),
        A: color2.get('lab.a'),
        B: color2.get('lab.b'),
      }
      const deltaE2 = DeltaE.getDeltaE00(color2Lab, inSitu)
      return deltaE1 - deltaE2
    },
  )
  const [colorName, _] = sortedColors.at(0)

  if (DeltaE.getDeltaE00(toLABObject(IN_SITU_LAB[colorName]), inSitu) < 5) {
    inSitu.L += DELTA_LAB[colorName][0]
    inSitu.A += DELTA_LAB[colorName][1]
    inSitu.B += DELTA_LAB[colorName][2]
  }

  return chroma.lab(inSitu.L, inSitu.A, inSitu.B)
}

export async function processImage(imageFileName) {
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
