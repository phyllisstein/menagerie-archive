import chroma from 'chroma-js'
import { CSSProperties, FunctionComponent } from 'react'

import { Rect, Root, SVG } from './colors-styles'
import { COLORS_LCH, ColorNames } from './palette'

interface Props {
  color: ColorNames
  height: number
  style?: CSSProperties
  transform: string
  width: number
  x: number
  y: number
}

const RotatedRect: FunctionComponent<Props> = ({
  color,
  height,
  transform,
  width,
  x,
  y,
  style = {},
  ...props
}) => {
  const centerX = x + width / 2
  const centerY = y + height / 2
  const paddedTransform = `translate(${ centerX }px, ${ centerY }px) ${ transform } translate(${ -centerX }px, ${ -centerY }px)`

  return (
    <Rect
      { ...props }
      $color={ color }
      height={ height }
      style={{ ...style, transform: paddedTransform }}
      width={ width }
      x={ x }
      y={ y } />
  )
}

const scale = chroma
  .scale([COLORS_LCH.BLUE, COLORS_LCH.ORANGE])
  .mode('lch')
  .correctLightness()
  .colors(10)

export const Divided: FunctionComponent = () => {
  return (
    <Root>
      <SVG height={ 500 } viewBox='0 0 500 500' width={ 500 }>
        <filter id='stroke'>
          <feTurbulence
            baseFrequency={ 0.3 }
            numOctaves={ 3 }
            result='turbulence'
            seed='0'
            type='turbulence' />
          <feDisplacementMap
            in='SourceGraphic'
            in2='turbulence'
            scale={ 10 }
            xChannelSelector='R'
            yChannelSelector='G' />
        </filter>
        { scale.map((color: string, index) => {
          const x = index * 50 + 25
          return (
            <circle
              key={ index }
              cx={ x }
              cy={ 250 }
              r={ 25 }
              style={{ fill: color }} />
          )
        }) }
      </SVG>
    </Root>
  )
}
