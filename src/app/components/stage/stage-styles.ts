import styled, { createGlobalStyle } from 'styled-components'
import { animated } from 'react-spring'

export const Body = createGlobalStyle`
  body {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
`

export const Root = styled(animated.div)`
  position: absolute;
  top: 50%;
  left: 50%;

  transform-style: preserve-3d;
`

export const StageRoot = styled(animated.div)`
  transform-style: preserve-3d;
`
