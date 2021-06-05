import { animated } from 'react-spring'
import styled from 'styled-components'

export const Proscenium = styled(animated.div)`
  position: absolute;

  transform-style: preserve-3d;
  perspective: 1000px;

  will-change: transform;
`

export const Root = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform-style: preserve-3d;
`

export const StageRoot = styled(animated.div)`
  position: absolute;

  transform-style: preserve-3d;

  will-change: transform;
`
