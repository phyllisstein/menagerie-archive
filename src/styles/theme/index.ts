import * as animation from './animation'
import * as easing from './ease'
import * as elevation from './elevation'
import * as measures from './measures'
import * as spectrumDark from './palette-spectrum-dark'
import * as spectrumLight from './palette-spectrum-light'
import * as plumber from './plumber'
import * as respondTo from './respond-to'
import * as scale from './scale'
import * as typeface from './typeface'

export const theme = {
  animation,
  easing,
  elevation,
  measures,
  plumber,
  respondTo,
  scale,
  spectrumDark,
  spectrumLight,
  typeface,
}

export type CustomTheme = typeof theme

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends CustomTheme {}
}
