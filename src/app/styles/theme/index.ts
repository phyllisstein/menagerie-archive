import * as elevation from './elevation'
import * as materialPalette from './material-palette'
import * as palette from './palette'
import * as plumber from './plumber'
import * as responsive from './responsive'
import * as scale from './scale'
import * as spectrumPalette from './spectrum-palette'
import * as typeface from './typeface'
import { animation } from './animation'
import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
    animation,
    elevation,
    materialPalette,
    palette,
    plumber,
    responsive,
    scale,
    spectrumPalette,
    typeface,
}

type Theme = typeof theme
export { Theme }

export default theme
