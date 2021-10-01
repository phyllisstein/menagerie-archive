import styled, { css } from 'styled-components'
import { Entry as EntryBase } from 'app/components'

export const Entry = styled(EntryBase)`
  width: min-content;
  cursor: pointer !important;
`

export const Grid = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  perspective: 1000px;
`

export const Image = styled.img`
  width: 256px;
  height: auto;
`

export const Label = styled.div`
  ${ ({ theme }) => theme.typeface.millerDisplay({ fontSize: 10 }) }

  background-color: ${ ({ theme }) => theme.palette.css.gray100 };

  font-family: 'Miller Text';

  margin: 0;
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 400;

  font-variant-caps: all-small-caps;
`

export const Line = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  background-color: ${ ({ theme }) =>
    theme.palette.css.gray700 };
  transform: translate3d(-50%, -50%, 0);

  &::before {
    content: '';
    display: block;

    ${ ({ $axis }) => {
    if ($axis === 'x') {
      return css`
          width: 1000vw;
          height: 5px;
        `
    }

    if ($axis === 'y') {
      return css`
          width: 5px;
          height: 1000vh;
        `
    }
  } }
  }
`
