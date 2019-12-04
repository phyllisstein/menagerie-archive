import 'styled-components'
import * as Fonts from './fonts'
import * as Globals from './globals'
import * as theme from './theme'

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export {
  Fonts,
  Globals,
  theme,
}
