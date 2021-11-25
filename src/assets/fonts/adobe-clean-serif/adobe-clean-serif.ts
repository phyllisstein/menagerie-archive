import { createGlobalStyle } from 'styled-components'

export const AdobeCleanSerif = createGlobalStyle`
  @font-face {
    font-weight: 400;
    font-family: 'Adobe Clean Serif';
    font-style: normal;
    src: url("${ require('./AdobeCleanSerif-Regular.woff2') }") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 400;
    font-family: 'Adobe Clean Serif';
    font-style: italic;
    src: url("${ require('./AdobeCleanSerif-RegularIt.woff2') }") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 500;
    font-family: 'Adobe Clean Serif';
    font-style: normal;
    src: url("${ require('./AdobeCleanSerif-Medium.woff2') }") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 500;
    font-family: 'Adobe Clean Serif';
    font-style: italic;
    src: url("${ require('./AdobeCleanSerif-MediumIt.woff2') }") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 700;
    font-family: 'Adobe Clean Serif';
    font-style: normal;
    src: url("${ require('./AdobeCleanSerif-Bold.woff2') }") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 700;
    font-family: 'Adobe Clean Serif';
    font-style: italic;
    src: url("${ require('./AdobeCleanSerif-BoldIt.woff2') }") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 900;
    font-family: 'Adobe Clean Serif';
    font-style: normal;
    src: url("${ require('./AdobeCleanSerif-Black.woff2') }") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 900;
    font-family: 'Adobe Clean Serif';
    font-style: italic;
    src: url("${ require('./AdobeCleanSerif-BlackIt.woff2') }") format('woff2');

    font-display: fallback;
  }
`
