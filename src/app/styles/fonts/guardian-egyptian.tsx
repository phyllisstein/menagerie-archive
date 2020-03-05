import { createGlobalStyle } from 'styled-components'

export const GuardianEgyptian = createGlobalStyle`
  @font-face {
    font-display: fallback;
    font-family: 'Guardian Egyptian';
    font-style: normal;
    font-weight: 100;
    src:
      url('${ require('fonts/guardian-egyptian/GuardianEgyptian-Hairline.woff2').default }') format('woff2'),
      url('${ require('fonts/guardian-egyptian/GuardianEgyptian-Hairline.woff').default }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Egyptian';
    font-style: italic;
    font-weight: 100;
    src:
      url('${ require('fonts/guardian-egyptian/GuardianEgyptian-HairlineItalic.woff2').default }') format('woff2'),
      url('${ require('fonts/guardian-egyptian/GuardianEgyptian-HairlineItalic.woff').default }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Egyptian';
    font-style: normal;
    font-weight: 200;
    src:
      url('${ require('fonts/guardian-egyptian/GuardianEgyptian-Thin.woff2').default }') format('woff2'),
      url('${ require('fonts/guardian-egyptian/GuardianEgyptian-Thin.woff').default }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Egyptian';
    font-style: italic;
    font-weight: 200;
    src:
      url('${ require('fonts/guardian-egyptian/GuardianEgyptian-ThinItalic.woff2').default }') format('woff2'),
      url('${ require('fonts/guardian-egyptian/GuardianEgyptian-ThinItalic.woff').default }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Egyptian';
    font-style: normal;
    font-weight: 300;
    src:
      url('${ require('fonts/guardian-egyptian/GuardianEgyptian-Light.woff2').default }') format('woff2'),
      url('${ require('fonts/guardian-egyptian/GuardianEgyptian-Light.woff').default }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Egyptian';
    font-style: italic;
    font-weight: 300;
    src:
      url('${ require('fonts/guardian-egyptian/GuardianEgyptian-LightItalic.woff2').default }') format('woff2'),
      url('${ require('fonts/guardian-egyptian/GuardianEgyptian-LightItalic.woff').default }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Egyptian';
    font-style: normal;
    font-weight: 400;
    src:
      url('${ require('fonts/guardian-egyptian/GuardianEgyptian-Regular.woff2').default }') format('woff2'),
      url('${ require('fonts/guardian-egyptian/GuardianEgyptian-Regular.woff').default }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Egyptian';
    font-style: italic;
    font-weight: 400;
    src:
      url('${ require('fonts/guardian-egyptian/GuardianEgyptian-RegularItalic.woff2').default }') format('woff2'),
      url('${ require('fonts/guardian-egyptian/GuardianEgyptian-RegularItalic.woff').default }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Egyptian';
    font-style: normal;
    font-weight: 500;
    src:
      url('${ require('fonts/guardian-egyptian/GuardianEgyptian-Medium.woff2').default }') format('woff2'),
      url('${ require('fonts/guardian-egyptian/GuardianEgyptian-Medium.woff').default }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Egyptian';
    font-style: italic;
    font-weight: 500;
    src:
      url('${ require('fonts/guardian-egyptian/GuardianEgyptian-MediumItalic.woff2').default }') format('woff2'),
      url('${ require('fonts/guardian-egyptian/GuardianEgyptian-MediumItalic.woff').default }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Egyptian';
    font-style: normal;
    font-weight: 600;
    src:
      url('${ require('fonts/guardian-egyptian/GuardianEgyptian-Semibold.woff2').default }') format('woff2'),
      url('${ require('fonts/guardian-egyptian/GuardianEgyptian-Semibold.woff').default }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Egyptian';
    font-style: italic;
    font-weight: 600;
    src:
      url('${ require('fonts/guardian-egyptian/GuardianEgyptian-SemiboldItalic.woff2').default }') format('woff2'),
      url('${ require('fonts/guardian-egyptian/GuardianEgyptian-SemiboldItalic.woff').default }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Egyptian';
    font-style: normal;
    font-weight: 700;
    src:
      url('${ require('fonts/guardian-egyptian/GuardianEgyptian-Bold.woff2').default }') format('woff2'),
      url('${ require('fonts/guardian-egyptian/GuardianEgyptian-Bold.woff').default }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Egyptian';
    font-style: italic;
    font-weight: 700;
    src:
      url('${ require('fonts/guardian-egyptian/GuardianEgyptian-BoldItalic.woff2').default }') format('woff2'),
      url('${ require('fonts/guardian-egyptian/GuardianEgyptian-BoldItalic.woff').default }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Egyptian';
    font-style: normal;
    font-weight: 800;
    src:
      url('${ require('fonts/guardian-egyptian/GuardianEgyptian-Black.woff2').default }') format('woff2'),
      url('${ require('fonts/guardian-egyptian/GuardianEgyptian-Black.woff').default }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Guardian Egyptian';
    font-style: italic;
    font-weight: 800;
    src:
      url('${ require('fonts/guardian-egyptian/GuardianEgyptian-BlackItalic.woff2').default }') format('woff2'),
      url('${ require('fonts/guardian-egyptian/GuardianEgyptian-BlackItalic.woff').default }') format('woff');
  }
`
