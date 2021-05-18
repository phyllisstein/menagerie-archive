import { createGlobalStyle } from 'styled-components'

export const Body = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;

    outline: none;

    -webkit-font-smoothing: antialiased;

    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-text-rendering: optimizeLegibility;
    text-rendering: optimizeLegibility;
  }

  html {
    box-sizing: border-box;

    color: ${ ({ theme }) => theme.palette.css.text };
    font: 62.5%/1.333 sans-serif;

    font-kerning: normal;
    font-variant-ligatures: common-ligatures;
    font-variant-numeric: lining-nums proportional-nums;
  }

  body {
    ${ ({ theme }) => theme.typeface.primaryFamily }

    color: ${ ({ theme }) => theme.palette.css.text };
  }
`
