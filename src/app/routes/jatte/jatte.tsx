import * as jatte from 'app/styles/theme/palette-grand-jatte'
import { Root, SVG } from './jatte-styles'
import { FunctionComponent } from 'react'

export const Jatte: FunctionComponent = () => {
  return (
    <Root>
      <SVG height='512' viewBox='0 0 512 512' width='512'>
        <filter
          height='100%'
          id='jatte_rough_paper10'
          width='100%'
          x='0%'
          y='0%'>
          <feTurbulence
            baseFrequency='0.02'
            numOctaves='5'
            result='noise'
            type='fractalNoise' />
          <feDiffuseLighting
            in='noise'
            lightingColor={ jatte.css.leadWhite }
            result='diffLight'
            surfaceScale='10'>
            <feDistantLight azimuth='25' elevation='100' />
          </feDiffuseLighting>
        </filter>
        <filter id='jatte_displacement_filter10'>
          <feTurbulence
            baseFrequency='0.25'
            numOctaves='2'
            result='turbulence'
            seed='0'
            type='turbulence' />
          <feDisplacementMap
            in='SourceGraphic'
            in2='turbulence'
            scale='20'
            xChannelSelector='R'
            yChannelSelector='G' />
        </filter>
        <rect
          height='100%'
          style={{
            filter: 'url("#jatte_rough_paper10")',
          }}
          width='100%'
          x='0'
          y='0' />
        <ellipse
          cx='256'
          cy='256'
          rx='10'
          ry='100'
          style={{
            fill: jatte.css.emerald,
            filter: 'url("#jatte_displacement_filter10")',
          }} />
      </SVG>
    </Root>
  )
}
