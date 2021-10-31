import chroma from 'chroma-js'
import R from 'ramda'

export const js = {
  burntSienna: chroma('#A02F03'),
  chromeYellow: chroma('#FFFE20'),
  cobalt: chroma('#0046B5'),
  emerald: chroma('#036F24'),
  // leadWhite: chroma('#E5E5E5'),
  leadWhite: chroma.lab(97.13, 0.06, 1.35),
  ultramarine: chroma('#0B36FE'),
  veridian: chroma('#008461'),
  vermilion: chroma('#B70002'),
  yellowOchre: chroma('#D47205'),
  zincYellow: chroma('#E1C313'),
}

export type JS = typeof js
export type CSS = { [k in keyof JS]: string }

export const css: CSS = R.map(R.invoker(0, 'css'), js)
