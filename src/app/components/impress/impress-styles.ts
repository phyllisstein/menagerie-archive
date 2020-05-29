import {motion} from 'framer-motion'
import styled, {createGlobalStyle} from 'styled-components'

export const Body = createGlobalStyle`
  body {
    height: 100%;
    overflow: hidden;
  }
`

export const Canvas = styled(motion.div)`
  position: absolute;

  transform-origin: top left;
  transform-style: preserve-3d;

  will-change: transform;
`

export const Root = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;

  transform-origin: top left;
  transform-style: preserve-3d;

  will-change: perspective, transform;
`
