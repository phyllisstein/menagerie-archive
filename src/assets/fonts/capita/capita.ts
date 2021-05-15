import { createGlobalStyle } from 'styled-components'

export const Capita = createGlobalStyle`
  @font-face {
    font-weight: 200;
    font-family: 'Capita';
    font-style: normal;
    src: url("${ require('./Capita-ExtraLight.woff2') }") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 200;
    font-family: 'Capita';
    font-style: italic;
    src: url("${ require('./Capita-ExtraLightItalic.woff2') }") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 300;
    font-family: 'Capita';
    font-style: normal;
    src: url("${ require('./Capita-Light.woff2') }") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 300;
    font-family: 'Capita';
    font-style: italic;
    src: url("${ require('./Capita-LightItalic.woff2') }") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 400;
    font-family: 'Capita';
    font-style: normal;
    src: url("${ require('./Capita-Regular.woff2') }") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 400;
    font-family: 'Capita';
    font-style: italic;
    src: url("${ require('./Capita-RegularItalic.woff2') }") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 500;
    font-family: 'Capita';
    font-style: normal;
    src: url("${ require('./Capita-Medium.woff2') }") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 500;
    font-family: 'Capita';
    font-style: italic;
    src: url("${ require('./Capita-MediumItalic.woff2') }") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 700;
    font-family: 'Capita';
    font-style: normal;
    src: url("${ require('./Capita-Bold.woff2') }") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 700;
    font-family: 'Capita';
    font-style: italic;
    src: url("${ require('./Capita-BoldItalic.woff2') }") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 800;
    font-family: 'Capita';
    font-style: normal;
    src: url("${ require('./Capita-ExtraBold.woff2') }") format('woff2');

    font-display: fallback;
  }

  @font-face {
    font-weight: 800;
    font-family: 'Capita';
    font-style: italic;
    src: url("${ require('./Capita-ExtraBoldItalic.woff2') }") format('woff2');

    font-display: fallback;
  }
`
