import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled, { css, keyframes } from 'styled-components'

import { Entry as EntryBase } from '~/app/components/matrix'

export const Entry = styled(EntryBase)`
  width: min-content;
  pointer-events: none;

  &&& * {
    cursor: pointer;
    pointer-events: auto;
  }
`

export const Grid = styled.div`
  position: fixed;
  top: 0;
  left: 0;
`

export const Image = styled.img`
  width: 256px;
  height: auto;
`

export const Label = styled.div`
  ${ ({ theme }) => theme.typeface.millerDisplay({ fontSize: 11 }) }

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;

  font-weight: 600;
  letter-spacing: 4px;

  background-color: #FFF;
  backface-visibility: hidden;

  pointer-events: none;

  font-variant-caps: all-small-caps;
`

export const Line = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  background-color: ${ ({ theme }) => theme.palette.css.gray800 };
  transform: translate(-50%, -50%);
  backface-visibility: visible;
`

export const LineX = styled(Line)`
  &::before {
    display: block;
    width: 1000vw;
    height: 5px;

    content: '';
  }
`

export const LineY = styled(Line)`
  &::before {
    display: block;
    width: 5px;
    height: 1000vh;

    content: '';
  }
`

const pulse = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(2);
  }

  60% {
    transform: scale(2);
  }

  100% {
    transform: scale(1);
  }
`

export const PulsingIcon = styled(FontAwesomeIcon)`
  animation: ${ pulse } 2s ease-in-out infinite;
`
