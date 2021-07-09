import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Image = styled.img`
  width: auto;
`

interface LayerProps {
  $depth: number
}
type Colors = Array<
| 'blue400'
| 'celery400'
| 'fucsia400'
| 'indigo400'
| 'magenta400'
| 'orange400'
| 'seafoam400'
>

const DEPTH_COLORS: Colors = [
  'blue400',
  'magenta400',
  'celery400',
  'indigo400',
  'orange400',
  'seafoam400',
  'fucsia400',
]

export const Layer = styled(motion.div)<LayerProps>`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50vh;

  color: ${ ({ $depth, theme }) => theme.palette.css[DEPTH_COLORS[$depth]] };
  font-size: 8rem;

  img {
    width: 50%;
    height: auto;
  }
`

export const Root = styled.div`
  position: relative;

  display: block;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

export const StoryWrapper = styled.div`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  transform-origin: top left;
  transform-style: preserve-3d;
  perspective: 1000px;
`
