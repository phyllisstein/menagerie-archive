import styled from '@emotion/styled'

import { COLORS_P3, COLORS_RGB } from './palette'

export const Bar = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 512px;
  height: 128px;
`

interface CircleProps {
  $color: keyof typeof COLORS_P3
}

export const Ellipse = styled.ellipse<CircleProps>`
  fill: ${ props => COLORS_RGB[props.$color] };
  fill: ${ props => COLORS_P3[props.$color] };
`

export const Circle = styled.circle<CircleProps>`
  fill: ${ props => COLORS_RGB[props.$color] };
  fill: ${ props => COLORS_P3[props.$color] };
`

export const Root = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50vw;
  height: 50vh;

  transform: translate(-50%, -50%);
  transform-style: preserve-3d;
  perspective: 1000px;
`

export const SVG = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
`
