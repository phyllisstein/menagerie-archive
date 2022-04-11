import { Application, DisplayObject, Graphics, Sprite, Texture } from 'pixi.js'

// const DAUB_COLORS = [
//   0x00378e, // BLUE
//   0x004610, // GREEN
//   0x9b2300, // RED
// ]

const DAUB_COLORS = {
  BLUE: 0x00378e,
  GREEN: 0x004610,
  RED: 0x9b2300,
}

const app = new Application({
  antialias: true,
  autoDensity: true,
  backgroundAlpha: 0,
  height: 360,
  resolution: window.devicePixelRatio || 1,
  width: 640,
})

document.body.appendChild(app.view)

const graphics = new Graphics()
graphics.lineStyle(2, DAUB_COLORS.BLUE, 1)
graphics.beginFill(DAUB_COLORS.BLUE)
graphics.moveTo(0, 0)
graphics.lineTo(100, 100)
graphics.endFill()

app.stage.addChild(graphics)
