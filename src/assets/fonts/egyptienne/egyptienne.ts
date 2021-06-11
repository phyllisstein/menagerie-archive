import { createGlobalStyle } from 'styled-components'

export const Egyptienne = createGlobalStyle`
  @font-face {
    font-weight: 700;
    font-family: 'Egyptienne';
    font-style: normal;
    src: url("${require('./EgyptienneLT-BoldCondensed.woff2')}") format('woff2');

    font-display: fallback;
  }
`
