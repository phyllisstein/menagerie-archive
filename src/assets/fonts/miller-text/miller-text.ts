import { createGlobalStyle } from 'styled-components'

export const MillerText = createGlobalStyle`
  @font-face {
    font-weight: 400;
    font-family: 'Miller Text';
    font-style: normal;
    src: url("${ require('./MillerText-Roman.woff2') }") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 400;
    font-family: 'Miller Text';
    font-style: italic;
    src: url("${ require('./MillerText-Italic.woff2') }") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 700;
    font-family: 'Miller Text';
    font-style: normal;
    src: url("${ require('./MillerText-Bold.woff2') }") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 700;
    font-family: 'Miller Text';
    font-style: italic;
    src: url("${ require('./MillerText-BoldItalic.woff2') }") format('woff2');

    font-display: fallback;
  }
`
