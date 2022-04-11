import {
  Application,
  Container,
  DisplayObject,
  Graphics,
  Sprite,
  Texture,
} from 'pixi.js'

import daub from 'assets/pixi/d.png'
import daubMask from 'assets/pixi/daub-mask-reversed.png'

const app = new Application({
  antialias: true,
  autoDensity: true,
  backgroundAlpha: 0,
  backgroundColor: 0xffffff,
  height: 360,
  resolution: window.devicePixelRatio || 1,
  width: 640,
})
const main = document.querySelector('main')
main.appendChild(app.view)

// const daubSprite = Sprite.from(daub)

const count = 10
let cameraZ = 0
const fieldOfView = 20
const baseSpeed = 0.025
let speed = 0
let warpSpeed = 0
const daubStretch = 5
const daubBaseSize = 0.5

interface Daub {
  sprite: Sprite
  x: number
  y: number
  z: number
}

const randomizeDaub = (daub: Daub, initial?: boolean) => {
  daub.z = initial ? Math.random() * 2000 : cameraZ + Math.random() * 1000

  const deg = Math.random() * Math.PI * 2
  const distance = Math.random() * 50 + 1

  daub.x = Math.cos(deg) * distance
  daub.y = Math.sin(deg) * distance
}

const DAUB_COLORS = [
  0x00378e, // BLUE
  0x004610, // GREEN
  0x9b2300, // RED
]

const container = new Container()
container.x = 0
container.y = 0
app.stage.addChild(container)

const daubs = Array(count)
  .fill(null)
  .map((_, idx) => {
    const sprite = Sprite.from(daubMask)
    const daubColor = new Graphics()
    const colorIndex = Math.floor(Math.random() * DAUB_COLORS.length)
    const color = DAUB_COLORS[colorIndex]
    console.log(color)
    daubColor
      .beginTextureFill({
        color,
      })
      .drawRect(0, 0, sprite.width, sprite.height)
      .endFill()

    const daub = {
      mask: daubColor,
      sprite,
      x: 0,
      y: 0,
      z: 0,
    }
    // daub.sprite.mask = daubColor
    daubColor.mask = daub.sprite
    // daub.sprite.anchor.x = 0.5
    // daub.sprite.anchor.y = 0.7
    randomizeDaub(daub, true)
    // container.addChild(daub.sprite)
    daubColor.x = daub.sprite.x
    daubColor.y = daub.sprite.y
    container.addChild(daubColor)
    return daub
  })

setInterval(() => {
  warpSpeed = warpSpeed > 0 ? 0 : 1
}, 5000)

app.ticker.add(delta => {
  speed += (warpSpeed - speed) / 20
  cameraZ += delta * 10 * (baseSpeed + speed)

  daubs.forEach(daub => {
    if (daub.z < cameraZ) {
      randomizeDaub(daub)
    }

    const z = daub.z - cameraZ
    daub.mask.x =
      daub.x * (fieldOfView / z) * app.renderer.screen.width +
      app.renderer.screen.width / 2
    daub.mask.y =
      daub.y * (fieldOfView / z) * app.renderer.screen.height +
      app.renderer.screen.height / 2

    const dxCenter = daub.mask.x - app.renderer.screen.width / 2
    const dyCenter = daub.mask.y - app.renderer.screen.height / 2
    const distanceCenter = Math.sqrt(dxCenter * dxCenter + dyCenter * dyCenter)
    const distanceScale = Math.max(0, (2000 - z) / 2000)
    daub.mask.scale.x = distanceScale * daubBaseSize
    daub.mask.scale.y =
      distanceScale * daubBaseSize +
      (distanceScale * speed * daubStretch * distanceCenter) /
        app.renderer.screen.width
    daub.mask.rotation = Math.atan2(dyCenter, dxCenter) + Math.PI / 2
  })
})
