import { animated } from 'react-spring'
import styled from 'styled-components'

export const Image = styled.img`
  width: auto;
`

const DEPTH_COLORS = [
  'blue400',
  'indigo400',
  'magenta400',
  'celery400',
  'orange400',
]

export const Layer = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50vh;

  color: ${ ({ $depth, theme }) => theme.palette.css[DEPTH_COLORS[$depth - 1]] };
  font-size: 8rem;

  /* background: ${ ({ $depth, theme }) => theme.palette.js[DEPTH_COLORS[$depth - 1]].alpha(0.2).css() }; */
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
  top: 25%;

  width: 100%;
  height: 50%;

  transform-origin: top left;
  transform-style: preserve-3d;
  perspective: 1000px;
`
