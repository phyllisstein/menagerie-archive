import { animated } from 'react-spring'
import styled from 'styled-components'

interface LayerProps {
  $depth: number
}

const DEPTH_COLORS = [
  'blue400',
  'indigo400',
  'magenta400',
  'celery400',
  'orange400',
]

export const Layer = styled(animated.div)<LayerProps>`
  position: absolute;
  top: 0;
  left: 0;

  color: ${ ({ $depth, theme }) => theme.palette.css[DEPTH_COLORS[$depth - 1]] };
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50vh;

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

  height: 50%;
  width: 100%;
`
