import styled, { createGlobalStyle } from 'styled-components'
import { animated } from 'react-spring'

export const Body = createGlobalStyle`
  body {
    height: 100%;
    overflow: hidden;
  }
`

export const Canvas = styled(animated.div)`
  position: absolute;

  will-change: transform;
`

export const Root = styled(animated.div)`
  position: absolute;
  top: 50%;
  left: 50%;

  will-change: perspective, transform;
`
