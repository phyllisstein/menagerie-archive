import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Layer = styled(motion.div)`
  position: absolute;
  top: 50%;

  height: 50vh;
`

export const Root = styled.div`
  overflow: auto !important;
`
