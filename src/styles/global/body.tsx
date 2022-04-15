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
        text-rendering: optimizeLegibility;
      }

      html {
        box-sizing: border-box;
        margin: 0;
        padding: 0;

        font-size: 16px;

        font-kerning: normal !important;
        font-variant-ligatures: common-ligatures !important;
        font-variant-numeric: oldstyle-nums proportional-nums !important;
      }

      body {
        ${ theme.typeface.primaryFamily }

        color: ${ theme.palette.css.gray700 };
        background-color: ${ theme.palette.css.gray50 };
      }
    ` } />
)
