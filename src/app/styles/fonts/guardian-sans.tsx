import { createGlobalStyle } from 'styled-components'

export const GuardianSans = createGlobalStyle`
  @font-face {
    font-display: fallback;
    font-family: 'Guardian Sans';
    font-style: normal;
    font-weight: 100;
    src:
      url('${ require('vendor/fonts/guardian-sans/GuardianSans-Hairline.woff2') }') format('woff2'),
      url('${ require('vendor/fonts/guardian-sans/GuardianSans-Hairline.woff') }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Sans';
    font-style: italic;
    font-weight: 100;
    src:
      url('${ require('vendor/fonts/guardian-sans/GuardianSans-HairlineIt.woff2') }') format('woff2'),
      url('${ require('vendor/fonts/guardian-sans/GuardianSans-HairlineIt.woff') }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Sans';
    font-style: normal;
    font-weight: 200;
    src:
      url('${ require('vendor/fonts/guardian-sans/GuardianSans-Thin.woff2') }') format('woff2'),
      url('${ require('vendor/fonts/guardian-sans/GuardianSans-Thin.woff') }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Sans';
    font-style: italic;
    font-weight: 200;
    src:
      url('${ require('vendor/fonts/guardian-sans/GuardianSans-ThinIt.woff2') }') format('woff2'),
      url('${ require('vendor/fonts/guardian-sans/GuardianSans-ThinIt.woff') }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Sans';
    font-style: normal;
    font-weight: 300;
    src:
      url('${ require('vendor/fonts/guardian-sans/GuardianSans-Light.woff2') }') format('woff2'),
      url('${ require('vendor/fonts/guardian-sans/GuardianSans-Light.woff') }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Sans';
    font-style: italic;
    font-weight: 300;
    src:
      url('${ require('vendor/fonts/guardian-sans/GuardianSans-LightIt.woff2') }') format('woff2'),
      url('${ require('vendor/fonts/guardian-sans/GuardianSans-LightIt.woff') }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Sans';
    font-style: normal;
    font-weight: 400;
    src:
      url('${ require('vendor/fonts/guardian-sans/GuardianSans-Regular.woff2') }') format('woff2'),
      url('${ require('vendor/fonts/guardian-sans/GuardianSans-Regular.woff') }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Sans';
    font-style: italic;
    font-weight: 400;
    src:
      url('${ require('vendor/fonts/guardian-sans/GuardianSans-RegularIt.woff2') }') format('woff2'),
      url('${ require('vendor/fonts/guardian-sans/GuardianSans-RegularIt.woff') }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Sans';
    font-style: normal;
    font-weight: 500;
    src:
      url('${ require('vendor/fonts/guardian-sans/GuardianSans-Medium.woff2') }') format('woff2'),
      url('${ require('vendor/fonts/guardian-sans/GuardianSans-Medium.woff') }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Sans';
    font-style: italic;
    font-weight: 500;
    src:
      url('${ require('vendor/fonts/guardian-sans/GuardianSans-MediumIt.woff2') }') format('woff2'),
      url('${ require('vendor/fonts/guardian-sans/GuardianSans-MediumIt.woff') }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Sans';
    font-style: normal;
    font-weight: 600;
    src:
      url('${ require('vendor/fonts/guardian-sans/GuardianSans-Semibold.woff2') }') format('woff2'),
      url('${ require('vendor/fonts/guardian-sans/GuardianSans-Semibold.woff') }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Sans';
    font-style: italic;
    font-weight: 600;
    src:
      url('${ require('vendor/fonts/guardian-sans/GuardianSans-SemiboldIt.woff2') }') format('woff2'),
      url('${ require('vendor/fonts/guardian-sans/GuardianSans-SemiboldIt.woff') }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Sans';
    font-style: normal;
    font-weight: 700;
    src:
      url('${ require('vendor/fonts/guardian-sans/GuardianSans-Bold.woff2') }') format('woff2'),
      url('${ require('vendor/fonts/guardian-sans/GuardianSans-Bold.woff') }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Sans';
    font-style: italic;
    font-weight: 700;
    src:
      url('${ require('vendor/fonts/guardian-sans/GuardianSans-BoldIt.woff2') }') format('woff2'),
      url('${ require('vendor/fonts/guardian-sans/GuardianSans-BoldIt.woff') }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Sans';
    font-style: normal;
    font-weight: 800;
    src:
      url('${ require('vendor/fonts/guardian-sans/GuardianSans-Black.woff2') }') format('woff2'),
      url('${ require('vendor/fonts/guardian-sans/GuardianSans-Black.woff') }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Sans';
    font-style: italic;
    font-weight: 800;
    src:
      url('${ require('vendor/fonts/guardian-sans/GuardianSans-BlackIt.woff2') }') format('woff2'),
      url('${ require('vendor/fonts/guardian-sans/GuardianSans-BlackIt.woff') }') format('woff');
  }
`
