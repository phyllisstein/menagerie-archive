import styled, { css } from 'styled-components'
import { Entry as EntryBase } from 'app/components'

export const Entry = styled(EntryBase)`
  width: min-content;
  cursor: pointer !important;
`

export const Image = styled.img`
  width: 256px;
  height: auto;
`

export const Grid = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  perspective: 1000px;
`

export const Line = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  background-color: ${ ({ theme }) =>
    theme.palette.js.gray600.alpha(0.25) .css() };
  transform: translate3d(-50%, -50%, 0);

  &::before {
    content: '';
    display: block;

    ${ ({ $axis }) => {
    if ($axis === 'x') {
      return css`
          width: 200vw;
          height: 0.5px;
        `
    }

    if ($axis === 'y') {
      return css`
          width: 0.5px;
          height: 200vh;
        `
    }
  } }
  }
`
