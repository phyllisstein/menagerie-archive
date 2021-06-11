import { createGlobalStyle } from 'styled-components'

export const DINText = createGlobalStyle`
  @font-face {
    font-weight: 100;
    font-family: 'DIN Text';
    font-style: normal;
    font-stretch: normal;
    src: url("${require('./DINTextPro-ExtraThin.woff2')}") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 100;
    font-family: 'DIN Text';
    font-style: italic;
    font-stretch: normal;
    src: url("${require('./DINTextPro-ExtraThinItalic.woff2')}") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 200;
    font-family: 'DIN Text';
    font-style: normal;
    font-stretch: normal;
    src: url("${require('./DINTextPro-Thin.woff2')}") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 200;
    font-family: 'DIN Text';
    font-style: italic;
    font-stretch: normal;
    src: url("${require('./DINTextPro-ThinItalic.woff2')}") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 300;
    font-family: 'DIN Text';
    font-style: normal;
    font-stretch: normal;
    src: url("${require('./DINTextPro-Light.woff2')}") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 300;
    font-family: 'DIN Text';
    font-style: italic;
    font-stretch: normal;
    src: url("${require('./DINTextPro-LightItalic.woff2')}") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 400;
    font-family: 'DIN Text';
    font-style: normal;
    font-stretch: normal;
    src: url("${require('./DINTextPro-Regular.woff2')}") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 400;
    font-family: 'DIN Text';
    font-style: italic;
    font-stretch: normal;
    src: url("${require('./DINTextPro-RegularItalic.woff2')}") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 500;
    font-family: 'DIN Text';
    font-style: normal;
    font-stretch: normal;
    src: url("${require('./DINTextPro-Medium.woff2')}") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 500;
    font-family: 'DIN Text';
    font-style: italic;
    font-stretch: normal;
    src: url("${require('./DINTextPro-MediumItalic.woff2')}") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 700;
    font-family: 'DIN Text';
    font-style: normal;
    font-stretch: normal;
    src: url("${require('./DINTextPro-Bold.woff2')}") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 700;
    font-family: 'DIN Text';
    font-style: italic;
    font-stretch: normal;
    src: url("${require('./DINTextPro-BoldItalic.woff2')}") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 800;
    font-family: 'DIN Text';
    font-style: normal;
    font-stretch: normal;
    src: url("${require('./DINTextPro-Black.woff2')}") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 800;
    font-family: 'DIN Text';
    font-style: italic;
    font-stretch: normal;
    src: url("${require('./DINTextPro-BlackItalic.woff2')}") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 900;
    font-family: 'DIN Text';
    font-style: normal;
    font-stretch: normal;
    src: url("${require('./DINTextPro-ExtraBlack.woff2')}") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 900;
    font-family: 'DIN Text';
    font-style: italic;
    font-stretch: normal;
    src: url("${require('./DINTextPro-ExtraBlackItalic.woff2')}") format('woff2');

    font-display: fallback;
  }
`
