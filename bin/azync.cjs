#!/usr/bin/env node

global.Module = {
  preRun () {
    const FS = global.Module.FS
    FS.mkdir('/working')
    FS.mount(FS.filesystems.NODEFS, { root: process.cwd() }, '/working')
    FS.chdir('/working')
  },
}

const fs = require('fs').promises
const path = require('path')
const R = require('ramda')
const sharp = require('sharp')

async function loadImage () {
  let { data: sourceData, info: sourceInfo } = await sharp(
    'src/assets/la-grande-jatte/x2-y1-2048.jpg',
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
  let template = new cv.Mat(templateInfo.height, templateInfo.width, cv.CV_8UC4)
  // debugger
  template.data.set(templateData)
  let mask = new cv.Mat(maskInfo.height, maskInfo.width, cv.CV_8UC4)
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
  var cv = require('../vendor/opencv.cjs')
  global.cv = cv
  cv.onRuntimeInitialized = async () => {
    await loadImage()
  }
} catch (err) {
  console.log(err)
}
