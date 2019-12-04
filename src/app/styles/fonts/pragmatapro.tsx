import { createGlobalStyle } from 'styled-components'

export const PragmataPro = createGlobalStyle`
  @font-face {
    font-display: fallback;
    font-family: 'PragmataPro';
    font-weight: 400;
    font-style: normal;
    src:
      url('${ require('vendor/fonts/pragmatapro/PragmataProLiga-Regular.woff2') }') format('woff2'),
      url('${ require('vendor/fonts/pragmatapro/PragmataProLiga-Regular.woff') }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'PragmataPro';
    font-weight: 400;
    font-style: italic;
    src:
      url('${ require('vendor/fonts/pragmatapro/PragmataProLiga-Italic.woff2') }') format('woff2'),
      url('${ require('vendor/fonts/pragmatapro/PragmataProLiga-Italic.woff') }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'PragmataPro';
    font-weight: 700;
    font-style: normal;
    src:
      url('${ require('vendor/fonts/pragmatapro/PragmataProLiga-Bold.woff2') }') format('woff2'),
      url('${ require('vendor/fonts/pragmatapro/PragmataProLiga-Bold.woff') }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'PragmataPro';
    font-weight: 700;
    font-style: italic;
    src:
      url('${ require('vendor/fonts/pragmatapro/PragmataProLiga-BoldItalic.woff2') }') format('woff2'),
      url('${ require('vendor/fonts/pragmatapro/PragmataProLiga-BoldItalic.woff') }') format('woff');
  }
`
