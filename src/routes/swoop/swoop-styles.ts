import styled from '@emotion/styled'
import { motion } from 'framer-motion'

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
