import { createGlobalStyle } from 'styled-components'

export const DINNext = createGlobalStyle`
  @font-face {
    font-family: 'DIN Next LT Pro';
    font-style: normal;
    font-weight: 200;
    src: url("${require('./DINNextLTPro-UltraLight.woff2')}");

    font-display: fallback;
  }

  @font-face {
    font-family: 'DIN Next LT Pro';
    font-style: italic;
    font-weight: 200;
    src: url("${require('./DINNextLTPro-UltraLightItalic.woff2')}");

    font-display: fallback;
  }

  @font-face {
    font-family: 'DIN Next LT Pro';
    font-style: normal;
    font-weight: 300;
    src: url("${require('./DINNextLTPro-Light.woff2')}");

    font-display: fallback;
  }

  @font-face {
    font-family: 'DIN Next LT Pro';
    font-style: italic;
    font-weight: 300;
    src: url("${require('./DINNextLTPro-LightItalic.woff2')}");

    font-display: fallback;
  }

  @font-face {
    font-family: 'DIN Next LT Pro';
    font-style: normal;
    font-weight: 400;
    src: url("${require('./DINNextLTPro-Regular.woff2')}");

    font-display: fallback;
  }

  @font-face {
    font-family: 'DIN Next LT Pro';
    font-style: italic;
    font-weight: 400;
    src: url("${require('./DINNextLTPro-RegularItalic.woff2')}");

    font-display: fallback;
  }

  @font-face {
    font-family: 'DIN Next LT Pro';
    font-style: normal;
    font-weight: 500;
    src: url("${require('./DINNextLTPro-Medium.woff2')}");

    font-display: fallback;
  }

  @font-face {
    font-family: 'DIN Next LT Pro';
    font-style: italic;
    font-weight: 500;
    src: url("${require('./DINNextLTPro-MediumItalic.woff2')}");

    font-display: fallback;
  }

  @font-face {
    font-family: 'DIN Next LT Pro';
    font-style: normal;
    font-weight: 700;
    src: url("${require('./DINNextLTPro-Bold.woff2')}");

    font-display: fallback;
  }

  @font-face {
    font-family: 'DIN Next LT Pro';
    font-style: italic;
    font-weight: 700;
    src: url("${require('./DINNextLTPro-BoldItalic.woff2')}");

    font-display: fallback;
  }

  @font-face {
    font-family: 'DIN Next LT Pro';
    font-style: normal;
    font-weight: 800;
    src: url("${require('./DINNextLTPro-Heavy.woff2')}");

    font-display: fallback;
  }

  @font-face {
    font-family: 'DIN Next LT Pro';
    font-style: italic;
    font-weight: 800;
    src: url("${require('./DINNextLTPro-HeavyItalic.woff2')}");

    font-display: fallback;
  }

  @font-face {
    font-family: 'DIN Next LT Pro';
    font-style: normal;
    font-weight: 900;
    src: url("${require('./DINNextLTPro-Black.woff2')}");

    font-display: fallback;
  }

  @font-face {
    font-family: 'DIN Next LT Pro';
    font-style: italic;
    font-weight: 900;
    src: url("${require('./DINNextLTPro-BlackItalic.woff2')}");

    font-display: fallback;
  }

`
