import chroma from 'chroma-js'
import R from 'ramda'

import { js as spectrum } from './palette-spectrum-dark'
import { js as sunday } from './palette-sunday'

export const js = {
  ...spectrum,
  ...sunday,
  text: chroma('rgba(0, 0, 0, 0.87)'),
}
export type JS = typeof js
export type ColorNames = keyof JS
export type CSS = { [k in keyof JS]: string }

export const css: CSS = R.map(R.invoker(0, 'css'), js)
export const lch: CSS = R.pipe(
  R.map(R.invoker(0, 'lch')),
  R.map(([l, c, h]) => `lch(${ l }% ${ c } ${ h })`),
)(js)
