import { Application, DisplayObject, Graphics, Sprite, Texture } from 'pixi.js'

import daub from 'assets/pixi/d.png'

const app = new Application({
  backgroundColor: 0xffffff,
  height: 360,
  width: 640,
})
const main = document.querySelector('main')
main.appendChild(app.view)

const daubSprite = Sprite.from(daub)

const count = 1000
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

const daubs = Array(count)
  .fill(null)
  .map(() => {
    const daub = {
      sprite: Sprite.from(daubSprite.texture),
      x: 0,
      y: 0,
      z: 0,
    }
    daub.sprite.anchor.x = 0.5
    daub.sprite.anchor.y = 0.7
    randomizeDaub(daub, true)
    app.stage.addChild(daub.sprite)
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
    daub.sprite.x =
      daub.x * (fieldOfView / z) * app.renderer.screen.width +
      app.renderer.screen.width / 2
    daub.sprite.y =
      daub.y * (fieldOfView / z) * app.renderer.screen.height +
      app.renderer.screen.height / 2

    const dxCenter = daub.sprite.x - app.renderer.screen.width / 2
    const dyCenter = daub.sprite.y - app.renderer.screen.height / 2
    const distanceCenter = Math.sqrt(dxCenter * dxCenter + dyCenter * dyCenter)
    const distanceScale = Math.max(0, (2000 - z) / 2000)
    daub.sprite.scale.x = distanceScale * daubBaseSize
    daub.sprite.scale.y =
      distanceScale * daubBaseSize +
      (distanceScale * speed * daubStretch * distanceCenter) /
        app.renderer.screen.width
    daub.sprite.rotation = Math.atan2(dyCenter, dxCenter) + Math.PI / 2
  })
})
