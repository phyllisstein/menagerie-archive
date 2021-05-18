import { animated } from 'react-spring'
import styled from 'styled-components'

interface LayerProps {
  $depth: number
}

export const Layer = styled(animated.div)<LayerProps>`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50vh;

  font-size: 4rem;

  /* background: ${ ({ theme }) => theme.palette.js.gray600.alpha(0.2).css() }; */
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
