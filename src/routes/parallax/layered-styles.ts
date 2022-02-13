import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const Image = styled.img`
  width: auto;
`

interface LayerProps {
  $depth: number
}

type Colors = Array<
| 'blue400'
| 'celery400'
| 'fuchsia400'
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
  'fuchsia400',
]

export const Layer = styled(motion.div)<LayerProps>`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 300vw;
  height: 50vh;

  color: ${ ({ $depth, theme }) => theme.palette.css[DEPTH_COLORS[$depth]] };
  font-size: 8rem;

  transform-origin: center;

  img {
    width: auto;
    max-height: 50vh;
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

  transform-origin: center;
  transform-style: preserve-3d;
  perspective: 1000px;
`
