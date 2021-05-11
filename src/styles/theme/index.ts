import * as animation from './animation'
import * as easing from './ease'
import * as elevation from './elevation'
import * as palette from './palette'
import * as plumber from './plumber'
import * as responsive from './responsive'
import * as scale from './scale'
import * as spectrumDark from './spectrum-dark'
import * as spectrumLight from './spectrum-light'
import * as typeface from './typeface'
import * as typography from './typography'

export const theme = {
  animation,
  easing,
  elevation,
  palette,
  plumber,
  responsive,
  scale,
  spectrumDark,
  spectrumLight,
  typeface,
  typography,
}

export type Theme = typeof theme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
