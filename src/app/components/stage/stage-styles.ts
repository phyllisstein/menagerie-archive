import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Root = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;

  transform-style: preserve-3d;
  perspective: ${ ({ $perspective }) =>
    typeof $perspective === 'number' ? `${ $perspective }px` : $perspective };
`

export const StageRoot = styled(motion.div)`
  position: absolute;
  transform-style: preserve-3d;
`
