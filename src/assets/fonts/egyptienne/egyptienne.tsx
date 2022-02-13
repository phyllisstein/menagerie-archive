import { css, Global } from '@emotion/react'
import { style } from 'd3'

export const egyptienne = css`
  @font-face {
    font-weight: 700;
    font-family: 'Egyptienne';
    font-style: normal;
    src: url('${ require('./EgyptienneLT-BoldCondensed.woff2') }') format('woff2');

    font-display: fallback;
  }
`

export const Egyptienne = <Global styles={ egyptienne } />
