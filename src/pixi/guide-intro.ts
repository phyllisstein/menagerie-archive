import { Application, Sprite } from 'pixi.js'

import sample from './sample.png'

const app = new Application({ height: 360, width: 640 })
const main = document.querySelector('main')
main.appendChild(app.view)

const sprite = Sprite.from(sample)
app.stage.addChild(sprite)

let elapsed = 0
app.ticker.add((delta: number) => {
  elapsed += delta
  sprite.x = 100 + Math.sin(elapsed / 50) * 100
})
