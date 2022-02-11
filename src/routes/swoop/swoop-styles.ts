import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Layer = styled(motion.div)`
  position: absolute;
  top: 0;

  height: 100vh;
`

export const Root = styled.div`
  position: absolute;
  left: -50%;

  width: 100vw;
  height: 100vh;
`
