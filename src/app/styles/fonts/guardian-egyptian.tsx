import { createGlobalStyle } from 'styled-components'

export const GuardianEgyptian = createGlobalStyle`
  @font-face {
    font-display: fallback;
    font-family: 'Guardian Egyptian';
    font-style: normal;
    font-weight: 100;
    src:
      url('${ require('vendor/fonts/guardian-egyptian/GuardianEgyptian-Hairline.woff2') }') format('woff2'),
      url('${ require('vendor/fonts/guardian-egyptian/GuardianEgyptian-Hairline.woff') }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Egyptian';
    font-style: italic;
    font-weight: 100;
    src:
      url('${ require('vendor/fonts/guardian-egyptian/GuardianEgyptian-HairlineIt.woff2') }') format('woff2'),
      url('${ require('vendor/fonts/guardian-egyptian/GuardianEgyptian-HairlineIt.woff') }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Egyptian';
    font-style: normal;
    font-weight: 200;
    src:
      url('${ require('vendor/fonts/guardian-egyptian/GuardianEgyptian-Thin.woff2') }') format('woff2'),
      url('${ require('vendor/fonts/guardian-egyptian/GuardianEgyptian-Thin.woff') }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Egyptian';
    font-style: italic;
    font-weight: 200;
    src:
      url('${ require('vendor/fonts/guardian-egyptian/GuardianEgyptian-ThinIt.woff2') }') format('woff2'),
      url('${ require('vendor/fonts/guardian-egyptian/GuardianEgyptian-ThinIt.woff') }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Egyptian';
    font-style: normal;
    font-weight: 300;
    src:
      url('${ require('vendor/fonts/guardian-egyptian/GuardianEgyptian-Light.woff2') }') format('woff2'),
      url('${ require('vendor/fonts/guardian-egyptian/GuardianEgyptian-Light.woff') }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Egyptian';
    font-style: italic;
    font-weight: 300;
    src:
      url('${ require('vendor/fonts/guardian-egyptian/GuardianEgyptian-LightIt.woff2') }') format('woff2'),
      url('${ require('vendor/fonts/guardian-egyptian/GuardianEgyptian-LightIt.woff') }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Egyptian';
    font-style: normal;
    font-weight: 400;
    src:
      url('${ require('vendor/fonts/guardian-egyptian/GuardianEgyptian-Regular.woff2') }') format('woff2'),
      url('${ require('vendor/fonts/guardian-egyptian/GuardianEgyptian-Regular.woff') }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Egyptian';
    font-style: italic;
    font-weight: 400;
    src:
      url('${ require('vendor/fonts/guardian-egyptian/GuardianEgyptian-RegularIt.woff2') }') format('woff2'),
      url('${ require('vendor/fonts/guardian-egyptian/GuardianEgyptian-RegularIt.woff') }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Egyptian';
    font-style: normal;
    font-weight: 500;
    src:
      url('${ require('vendor/fonts/guardian-egyptian/GuardianEgyptian-Medium.woff2') }') format('woff2'),
      url('${ require('vendor/fonts/guardian-egyptian/GuardianEgyptian-Medium.woff') }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Egyptian';
    font-style: italic;
    font-weight: 500;
    src:
      url('${ require('vendor/fonts/guardian-egyptian/GuardianEgyptian-MediumIt.woff2') }') format('woff2'),
      url('${ require('vendor/fonts/guardian-egyptian/GuardianEgyptian-MediumIt.woff') }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Egyptian';
    font-style: normal;
    font-weight: 600;
    src:
      url('${ require('vendor/fonts/guardian-egyptian/GuardianEgyptian-Semibold.woff2') }') format('woff2'),
      url('${ require('vendor/fonts/guardian-egyptian/GuardianEgyptian-Semibold.woff') }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Egyptian';
    font-style: italic;
    font-weight: 600;
    src:
      url('${ require('vendor/fonts/guardian-egyptian/GuardianEgyptian-SemiboldIt.woff2') }') format('woff2'),
      url('${ require('vendor/fonts/guardian-egyptian/GuardianEgyptian-SemiboldIt.woff') }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Egyptian';
    font-style: normal;
    font-weight: 700;
    src:
      url('${ require('vendor/fonts/guardian-egyptian/GuardianEgyptian-Bold.woff2') }') format('woff2'),
      url('${ require('vendor/fonts/guardian-egyptian/GuardianEgyptian-Bold.woff') }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Egyptian';
    font-style: italic;
    font-weight: 700;
    src:
      url('${ require('vendor/fonts/guardian-egyptian/GuardianEgyptian-BoldIt.woff2') }') format('woff2'),
      url('${ require('vendor/fonts/guardian-egyptian/GuardianEgyptian-BoldIt.woff') }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Egyptian';
    font-style: normal;
    font-weight: 800;
    src:
      url('${ require('vendor/fonts/guardian-egyptian/GuardianEgyptian-Black.woff2') }') format('woff2'),
      url('${ require('vendor/fonts/guardian-egyptian/GuardianEgyptian-Black.woff') }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Egyptian';
    font-style: italic;
    font-weight: 800;
    src:
      url('${ require('vendor/fonts/guardian-egyptian/GuardianEgyptian-BlackIt.woff2') }') format('woff2'),
      url('${ require('vendor/fonts/guardian-egyptian/GuardianEgyptian-BlackIt.woff') }') format('woff');
  }
`
