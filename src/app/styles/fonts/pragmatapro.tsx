import { createGlobalStyle } from 'styled-components'

export const PragmataPro = createGlobalStyle`
  @font-face {
    font-display: fallback;
    font-family: 'PragmataPro';
    font-weight: 400;
    font-style: normal;
    src:
      url('${ require('fonts/pragmatapro/PragmataProLiga-Regular.woff2').default }') format('woff2'),
      url('${ require('fonts/pragmatapro/PragmataProLiga-Regular.woff').default }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'PragmataPro';
    font-weight: 400;
    font-style: italic;
    src:
      url('${ require('fonts/pragmatapro/PragmataProLiga-Italic.woff2').default }') format('woff2'),
      url('${ require('fonts/pragmatapro/PragmataProLiga-Italic.woff').default }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'PragmataPro';
    font-weight: 700;
    font-style: normal;
    src:
      url('${ require('fonts/pragmatapro/PragmataProLiga-Bold.woff2').default }') format('woff2'),
      url('${ require('fonts/pragmatapro/PragmataProLiga-Bold.woff').default }') format('woff');
  }

  @font-face {
    font-display: fallback;
    font-family: 'PragmataPro';
    font-weight: 700;
    font-style: italic;
    src:
      url('${ require('fonts/pragmatapro/PragmataProLiga-BoldItalic.woff2').default }') format('woff2'),
      url('${ require('fonts/pragmatapro/PragmataProLiga-BoldItalic.woff').default }') format('woff');
  }
`
