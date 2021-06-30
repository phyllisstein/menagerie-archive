import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Proscenium = styled(motion.div)`
  position: absolute;
`

export const Root = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`

export const StageRoot = styled(motion.div)`
  position: absolute;
  transform-style: preserve-3d;
`
