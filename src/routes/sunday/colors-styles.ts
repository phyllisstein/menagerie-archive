import styled from 'styled-components'

import { COLORS_LCH, COLORS_P3, COLORS_RGB } from './palette'

export const Bar = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 512px;
  height: 128;
`

interface SVGProps {
  $color: keyof typeof COLORS_P3
}

export const Ellipse = styled.ellipse<SVGProps>`
  fill: ${ props => COLORS_RGB[props.$color] };
  fill: ${ props => COLORS_P3[props.$color] };
`

export const Circle = styled.circle<SVGProps>`
  fill: ${ props => COLORS_RGB[props.$color] };
  fill: ${ props => COLORS_P3[props.$color] };
`

export const Path = styled.path<SVGProps>`
  fill: ${ props => COLORS_RGB[props.$color] };
  fill: ${ props => COLORS_P3[props.$color] };
`

export const Rect = styled.rect<SVGProps>`
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
  width: 500px;
  height: 500px;

  transform: translate(-50%, -50%);
  transform-style: preserve-3d;
  perspective: 1000px;
`

export const SVG = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
`
