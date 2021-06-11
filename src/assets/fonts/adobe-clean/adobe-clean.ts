import { createGlobalStyle } from 'styled-components'

export const AdobeClean = createGlobalStyle`
  @font-face {
    font-weight: 200;
    font-family: 'Adobe Clean';
    font-style: normal;
    font-stretch: normal;
    src: url("${require('./AdobeClean-Light.woff2')}") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 200;
    font-family: 'Adobe Clean';
    font-style: italic;
    font-stretch: normal;
    src: url("${require('./AdobeClean-LightIt.woff2')}") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 300;
    font-family: 'Adobe Clean';
    font-style: normal;
    font-stretch: normal;
    src: url("${require('./AdobeClean-SemiLight.woff2')}") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 300;
    font-family: 'Adobe Clean';
    font-style: italic;
    font-stretch: normal;
    src: url("${require('./AdobeClean-SemiLightIt.woff2')}") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 400;
    font-family: 'Adobe Clean';
    font-style: normal;
    font-stretch: normal;
    src: url("${require('./AdobeClean-Regular.woff2')}") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 400;
    font-family: 'Adobe Clean';
    font-style: italic;
    font-stretch: normal;
    src: url("${require('./AdobeClean-It.woff2')}") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 700;
    font-family: 'Adobe Clean';
    font-style: normal;
    font-stretch: normal;
    src: url("${require('./AdobeClean-Bold.woff2')}") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 700;
    font-family: 'Adobe Clean';
    font-style: italic;
    font-stretch: normal;
    src: url("${require('./AdobeClean-BoldIt.woff2')}") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 800;
    font-family: 'Adobe Clean';
    font-style: normal;
    font-stretch: normal;
    src: url("${require('./AdobeClean-ExtraBold.woff2')}") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 800;
    font-family: 'Adobe Clean';
    font-style: italic;
    font-stretch: normal;
    src: url("${require('./AdobeClean-ExtraBoldIt.woff2')}") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 900;
    font-family: 'Adobe Clean';
    font-style: normal;
    font-stretch: normal;
    src: url("${require('./AdobeClean-Black.woff2')}") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 900;
    font-family: 'Adobe Clean';
    font-style: italic;
    font-stretch: normal;
    src: url("${require('./AdobeClean-BlackIt.woff2')}") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 400;
    font-family: 'Adobe Clean';
    font-style: normal;
    font-stretch: semi-condensed;
    src: url("${require('./AdobeClean-SemiCn.woff2')}") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 400;
    font-family: 'Adobe Clean';
    font-style: italic;
    font-stretch: semi-condensed;
    src: url("${require('./AdobeClean-SemiCnIt.woff2')}") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 700;
    font-family: 'Adobe Clean';
    font-style: normal;
    font-stretch: semi-condensed;
    src: url("${require('./AdobeClean-BoldSemiCn.woff2')}") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 700;
    font-family: 'Adobe Clean';
    font-style: italic;
    font-stretch: semi-condensed;
    src: url("${require('./AdobeClean-BoldSemiCnIt.woff2')}") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 400;
    font-family: 'Adobe Clean';
    font-style: normal;
    font-stretch: condensed;
    src: url("${require('./AdobeClean-Cond.woff2')}") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 400;
    font-family: 'Adobe Clean';
    font-style: italic;
    font-stretch: condensed;
    src: url("${require('./AdobeClean-CondIt.woff2')}") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 700;
    font-family: 'Adobe Clean';
    font-style: normal;
    font-stretch: condensed;
    src: url("${require('./AdobeClean-BoldCond.woff2')}") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 700;
    font-family: 'Adobe Clean';
    font-style: italic;
    font-stretch: condensed;
    src: url("${require('./AdobeClean-BoldCondIt.woff2')}") format('woff2');

    font-display: fallback;
  }
`
