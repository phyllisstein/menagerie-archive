import { css, Global } from '@emotion/react'
import { FunctionComponent } from 'react'

import { CustomTheme } from 'styles/theme'

interface Props {
  theme: CustomTheme
}

export const Body: FunctionComponent<Props> = ({ theme }) => (
  <Global
    styles={ css`
      *,
      *::before,
      *::after {
        box-sizing: inherit;

        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;

        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        -webkit-text-rendering: optimizeLegibility;
        text-rendering: optimizeLegibility;
      }

      html {
        box-sizing: border-box;
        margin: 0;
        padding: 0;

        font-kerning: normal !important;
        font-variant-ligatures: common-ligatures !important;
        font-variant-numeric: oldstyle-nums proportional-nums !important;
      }

      body {
        ${ theme.typeface.primaryFamily }

        color: ${ theme.paletteSpectrumDark.css.gray900 };
        background-color: ${ theme.paletteSpectrumDark.css.gray50 };
      }
    ` } />
)
