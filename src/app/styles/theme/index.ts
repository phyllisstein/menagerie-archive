import 'styled-components'
import * as elevation from './elevation'
import * as palette from './palette'
import * as plumber from './plumber'
import * as responsive from './responsive'
import * as scale from './scale'
import * as typeface from './typeface'
import { animation } from './animation'

const theme = {
  animation,
  elevation,
  palette,
  plumber,
  responsive,
  scale,
  typeface,
}

export type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export default theme
