import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Layer = styled(motion.div)`
  position: absolute;
  top: 0;

  height: 100vh;
`

export const Root = styled.div`
  position: relative;

  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`
