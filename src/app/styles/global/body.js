import { createGlobalStyle } from 'styled-components'

export const Body = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: inherit;

        outline: none;
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    }

    html {
        box-sizing: border-box;

        color: ${ ({ theme }) => theme.palette.css.text };
        font: 62.5%/1.5 sans-serif;
        font-feature-settings: 'kern', 'liga';
        font-kerning: normal;
        font-variant-ligatures: common-ligatures;
    }

    body {
        ${ ({ theme }) => theme.typeface.primary() }

        color: ${ ({ theme }) => theme.palette.css.text };
    }
`
