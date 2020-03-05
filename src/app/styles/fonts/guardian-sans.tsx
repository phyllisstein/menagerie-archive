import { createGlobalStyle } from 'styled-components'

export const GuardianSans = createGlobalStyle`
  @font-face {
    font-display: fallback;
    font-family: 'Guardian Sans';
    font-style: normal;
    font-weight: 100;
    src:
      url('${ require('fonts/guardian-sans/GuardianSans-Hairline.woff2').default }') format('woff2'),
      url('${ require('fonts/guardian-sans/GuardianSans-Hairline.woff').default }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Sans';
    font-style: italic;
    font-weight: 100;
    src:
      url('${ require('fonts/guardian-sans/GuardianSans-HairlineIt.woff2').default }') format('woff2'),
      url('${ require('fonts/guardian-sans/GuardianSans-HairlineIt.woff').default }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Sans';
    font-style: normal;
    font-weight: 200;
    src:
      url('${ require('fonts/guardian-sans/GuardianSans-Thin.woff2').default }') format('woff2'),
      url('${ require('fonts/guardian-sans/GuardianSans-Thin.woff').default }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Sans';
    font-style: italic;
    font-weight: 200;
    src:
      url('${ require('fonts/guardian-sans/GuardianSans-ThinIt.woff2').default }') format('woff2'),
      url('${ require('fonts/guardian-sans/GuardianSans-ThinIt.woff').default }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Sans';
    font-style: normal;
    font-weight: 300;
    src:
      url('${ require('fonts/guardian-sans/GuardianSans-Light.woff2').default }') format('woff2'),
      url('${ require('fonts/guardian-sans/GuardianSans-Light.woff').default }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Sans';
    font-style: italic;
    font-weight: 300;
    src:
      url('${ require('fonts/guardian-sans/GuardianSans-LightIt.woff2').default }') format('woff2'),
      url('${ require('fonts/guardian-sans/GuardianSans-LightIt.woff').default }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Sans';
    font-style: normal;
    font-weight: 400;
    src:
      url('${ require('fonts/guardian-sans/GuardianSans-Regular.woff2').default }') format('woff2'),
      url('${ require('fonts/guardian-sans/GuardianSans-Regular.woff').default }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Sans';
    font-style: italic;
    font-weight: 400;
    src:
      url('${ require('fonts/guardian-sans/GuardianSans-RegularIt.woff2').default }') format('woff2'),
      url('${ require('fonts/guardian-sans/GuardianSans-RegularIt.woff').default }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Sans';
    font-style: normal;
    font-weight: 500;
    src:
      url('${ require('fonts/guardian-sans/GuardianSans-Medium.woff2').default }') format('woff2'),
      url('${ require('fonts/guardian-sans/GuardianSans-Medium.woff').default }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Sans';
    font-style: italic;
    font-weight: 500;
    src:
      url('${ require('fonts/guardian-sans/GuardianSans-MediumIt.woff2').default }') format('woff2'),
      url('${ require('fonts/guardian-sans/GuardianSans-MediumIt.woff').default }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Sans';
    font-style: normal;
    font-weight: 600;
    src:
      url('${ require('fonts/guardian-sans/GuardianSans-Semibold.woff2').default }') format('woff2'),
      url('${ require('fonts/guardian-sans/GuardianSans-Semibold.woff').default }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Sans';
    font-style: italic;
    font-weight: 600;
    src:
      url('${ require('fonts/guardian-sans/GuardianSans-SemiboldIt.woff2').default }') format('woff2'),
      url('${ require('fonts/guardian-sans/GuardianSans-SemiboldIt.woff').default }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Sans';
    font-style: normal;
    font-weight: 700;
    src:
      url('${ require('fonts/guardian-sans/GuardianSans-Bold.woff2').default }') format('woff2'),
      url('${ require('fonts/guardian-sans/GuardianSans-Bold.woff').default }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Sans';
    font-style: italic;
    font-weight: 700;
    src:
      url('${ require('fonts/guardian-sans/GuardianSans-BoldIt.woff2').default }') format('woff2'),
      url('${ require('fonts/guardian-sans/GuardianSans-BoldIt.woff').default }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Sans';
    font-style: normal;
    font-weight: 800;
    src:
      url('${ require('fonts/guardian-sans/GuardianSans-Black.woff2').default }') format('woff2'),
      url('${ require('fonts/guardian-sans/GuardianSans-Black.woff').default }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Sans';
    font-style: italic;
    font-weight: 800;
    src:
      url('${ require('fonts/guardian-sans/GuardianSans-BlackIt.woff2').default }') format('woff2'),
      url('${ require('fonts/guardian-sans/GuardianSans-BlackIt.woff').default }') format('woff');
  }
`
