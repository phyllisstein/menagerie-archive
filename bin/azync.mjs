#!/usr/bin/env node

import CV from 'opencv-wasm'
import { promises as fs } from 'fs'
import path from 'path'
import R from 'ramda'
import sharp from 'sharp'

const { cv, cvErrorPrinter } = CV

export async function loadImage() {
  let { data: sourceData, info: sourceInfo } = await sharp(
    'src/assets/la-grande-jatte/x2-y1.jpg',
    {
      limitInputPixels: false,
    },
  )
    .raw()
    .toBuffer({ resolveWithObject: true })

  let { data: templateData, info: templateInfo } = await sharp(
    'src/assets/la-grande-jatte/daub.png',
    {
      limitInputPixels: false,
    },
  )
    .raw()
    .toBuffer({ resolveWithObject: true })

  let { data: maskData, info: maskInfo } = await sharp(
    'src/assets/la-grande-jatte/mask.png',
    {
      limitInputPixels: false,
    },
  )
    .raw()
    .toBuffer({ resolveWithObject: true })

  let source = new cv.Mat(sourceInfo.height, sourceInfo.width, cv.CV_8UC3)
  source.data.set(sourceData)
  let template = new cv.Mat(templateInfo.height, templateInfo.width, cv.CV_8UC3)
  template.data.set(templateData)
  let mask = new cv.Mat(maskInfo.height, maskInfo.width, cv.CV_8UC3)
  mask.data.set(maskData)
  let result = new cv.Mat(source.rows, source.cols, source.type())
  cv.matchTemplate(source, template, result, cv.TM_CCOEFF_NORMED)

  try {
    await sharp(Buffer.from(result.data), {
      limitInputPixels: false,
      raw: {
        width: sourceInfo.width,
        height: sourceInfo.height,
        channels: sourceInfo.channels,
      },
    }).toFile('opencv-wip.jpg')
  } catch (err) {
    console.log(err)
  }
}

try {
  await loadImage()
} catch (err) {
  console.log(cvErrorPrinter(cv, err))
}
