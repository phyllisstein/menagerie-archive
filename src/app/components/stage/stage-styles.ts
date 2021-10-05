import styled, { createGlobalStyle } from 'styled-components'
import { motion } from 'framer-motion'

export const Body = createGlobalStyle`
  body {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
`

export const Root = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;

  transform-style: preserve-3d;
`

export const StageRoot = styled(motion.div)`
  transform-style: preserve-3d;
`
