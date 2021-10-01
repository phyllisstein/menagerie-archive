import chroma from 'chroma-js'
import R from 'ramda'
import { js as spectrum } from './spectrum-light'

export const js = {
  ...spectrum,
  text: chroma('rgba(0, 0, 0, 0.87)'),
}

export type ColorNames = keyof JS
export type JS = typeof js
export type CSS = { [k in keyof JS]: string }

export const css: CSS = R.map(R.invoker(0, 'css'), js)
