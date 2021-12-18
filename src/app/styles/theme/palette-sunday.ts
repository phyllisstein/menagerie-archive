import chroma from 'chroma-js'
import * as R from 'ramda'

export const js = {
    green: chroma.lab(57.88, -21.92, 43.99),
    leadWhite: chroma.lab(97.13, 0.06, 1.35),
    orange: chroma.lab(58.75, 15.05, 46.36),
    yellow: chroma.lab(66.48, -0.62, 57.74),
}

export type JS = typeof js
export type ColorNames = keyof JS
export type CSS = { [k in keyof JS]: string }

export const css: CSS = R.map(R.invoker(0, 'css'), js)
export const lch: CSS = R.pipe(
    R.map(R.invoker(0, 'lch')),
    R.map(([l, c, h]) => `lch(${ l }% ${ c } ${ h })`),
)(js) as unknown as CSS
