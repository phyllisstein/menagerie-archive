import * as elevation from './elevation'
import * as palette from './palette'
import * as plumber from './plumber'
import * as responsive from './responsive'
import * as scale from './scale'
import * as typeface from './typeface'
import { animation } from './animation'
import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  animation,
  elevation,
  palette,
  plumber,
  responsive,
  scale,
  typeface,
}

type Theme = typeof theme
export { Theme }

export default theme
