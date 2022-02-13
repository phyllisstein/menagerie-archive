import { css, Global } from '@emotion/react'

export const dinNext = css`
  @font-face {
    font-weight: 200;
    font-family: 'DIN Next LT Pro';
    font-style: normal;
    src: url('${ require('./DINNextLTPro-UltraLight.woff2') }');

    font-display: fallback;
  }

  @font-face {
    font-weight: 200;
    font-family: 'DIN Next LT Pro';
    font-style: italic;
    src: url('${ require('./DINNextLTPro-UltraLightItalic.woff2') }');

    font-display: fallback;
  }

  @font-face {
    font-weight: 300;
    font-family: 'DIN Next LT Pro';
    font-style: normal;
    src: url('${ require('./DINNextLTPro-Light.woff2') }');

    font-display: fallback;
  }

  @font-face {
    font-weight: 300;
    font-family: 'DIN Next LT Pro';
    font-style: italic;
    src: url('${ require('./DINNextLTPro-LightItalic.woff2') }');

    font-display: fallback;
  }

  @font-face {
    font-weight: 400;
    font-family: 'DIN Next LT Pro';
    font-style: normal;
    src: url('${ require('./DINNextLTPro-Regular.woff2') }');

    font-display: fallback;
  }

  @font-face {
    font-weight: 400;
    font-family: 'DIN Next LT Pro';
    font-style: italic;
    src: url('${ require('./DINNextLTPro-RegularItalic.woff2') }');

    font-display: fallback;
  }

  @font-face {
    font-weight: 500;
    font-family: 'DIN Next LT Pro';
    font-style: normal;
    src: url('${ require('./DINNextLTPro-Medium.woff2') }');

    font-display: fallback;
  }

  @font-face {
    font-weight: 500;
    font-family: 'DIN Next LT Pro';
    font-style: italic;
    src: url('${ require('./DINNextLTPro-MediumItalic.woff2') }');

    font-display: fallback;
  }

  @font-face {
    font-weight: 700;
    font-family: 'DIN Next LT Pro';
    font-style: normal;
    src: url('${ require('./DINNextLTPro-Bold.woff2') }');

    font-display: fallback;
  }

  @font-face {
    font-weight: 700;
    font-family: 'DIN Next LT Pro';
    font-style: italic;
    src: url('${ require('./DINNextLTPro-BoldItalic.woff2') }');

    font-display: fallback;
  }

  @font-face {
    font-weight: 800;
    font-family: 'DIN Next LT Pro';
    font-style: normal;
    src: url('${ require('./DINNextLTPro-Heavy.woff2') }');

    font-display: fallback;
  }

  @font-face {
    font-weight: 800;
    font-family: 'DIN Next LT Pro';
    font-style: italic;
    src: url('${ require('./DINNextLTPro-HeavyItalic.woff2') }');

    font-display: fallback;
  }

  @font-face {
    font-weight: 900;
    font-family: 'DIN Next LT Pro';
    font-style: normal;
    src: url('${ require('./DINNextLTPro-Black.woff2') }');

    font-display: fallback;
  }

  @font-face {
    font-weight: 900;
    font-family: 'DIN Next LT Pro';
    font-style: italic;
    src: url('${ require('./DINNextLTPro-BlackItalic.woff2') }');

    font-display: fallback;
  }
`

export const DINNext = () => <Global styles={ dinNext } />
