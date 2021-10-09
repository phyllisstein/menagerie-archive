import * as animation from './animation'
import * as easing from './ease'
import * as elevation from './elevation'
import * as measures from './measures'
import * as palette from './palette'
import * as paletteGrandJatte from './palette-grand-jatte'
import * as paletteSpectrumDark from './palette-spectrum-dark'
import * as paletteSpectrumLight from './palette-spectrum-light'
import * as plumber from './plumber'
import * as responsive from './responsive'
import * as scale from './scale'
import * as typeface from './typeface'

export const theme = {
  animation,
  easing,
  elevation,
  measures,
  palette,
  paletteGrandJatte,
  paletteSpectrumDark,
  paletteSpectrumLight,
  plumber,
  responsive,
  scale,
  typeface,
}

export type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
