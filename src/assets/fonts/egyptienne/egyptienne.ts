import { createGlobalStyle } from 'styled-components'

import egyptienne from './EgyptienneLT-BoldCondensed.woff2'

export const Egyptienne = createGlobalStyle`
  @font-face {
    font-weight: 700;
    font-family: 'Egyptienne';
    font-style: normal;
    font-stretch: condensed;
    src: url('${ egyptienne }') format('woff2');

    font-display: fallback;
  }
`
