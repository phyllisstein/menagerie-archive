import styled from 'styled-components'

export const Root = styled.div`
  position: absolute;

  transform-style: preserve-3d;
  backface-visibility: visible;

  * *::before,
  *::after {
    backface-visibility: visible;
  }
`
