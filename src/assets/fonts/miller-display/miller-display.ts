import { createGlobalStyle } from 'styled-components'

export const MillerDisplay = createGlobalStyle`
  @font-face {
    font-weight: 300;
    font-family: 'Miller Display';
    font-style: normal;
    src: url("${require('./MillerDisplay-Light.woff2')}") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 300;
    font-family: 'Miller Display';
    font-style: italic;
    src: url("${require('./MillerDisplay-LightItalic.woff2')}") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 400;
    font-family: 'Miller Display';
    font-style: normal;
    src: url("${require('./MillerDisplay-Roman.woff2')}") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 400;
    font-family: 'Miller Display';
    font-style: italic;
    src: url("${require('./MillerDisplay-Italic.woff2')}") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 600;
    font-family: 'Miller Display';
    font-style: normal;
    src: url("${require('./MillerDisplay-SemiBold.woff2')}") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 600;
    font-family: 'Miller Display';
    font-style: italic;
    src: url("${require('./MillerDisplay-SemiBoldItalic.woff2')}") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 700;
    font-family: 'Miller Display';
    font-style: normal;
    src: url("${require('./MillerDisplay-Bold.woff2')}") format('woff2');

    font-display: fallback;
  }
`
