import * as jatte from 'app/styles/theme/palette-grand-jatte'
import { Root, SVG } from './jatte-styles'
import { FunctionComponent } from 'react'

interface EmeraldProps {
  size?: number
}

const EmeraldCrossHatch: FunctionComponent = () => {}

export const Jatte: FunctionComponent = () => {
  return (
    <Root>
      <SVG height='512' viewBox='0 0 512 512' width='512'>
        <defs>
          <filter id='jatte_brushstroke_filter10'>
            <feTurbulence
              baseFrequency='0.25'
              numOctaves='3'
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
          <filter id='jatte_brushstroke_filter20'>
            <feTurbulence
              baseFrequency='0.15'
              numOctaves='5'
              result='turbulence'
              seed='0'
              type='turbulence' />
            <feDisplacementMap
              in='SourceGraphic'
              in2='turbulence'
              scale='40'
              xChannelSelector='R'
              yChannelSelector='G' />
          </filter>
        </defs>
        <ellipse
          cx='256'
          cy='256'
          rx='15'
          ry='200'
          style={{
            fill: jatte.css.emerald,
            filter: 'url("#jatte_brushstroke_filter10")',
          }} />
        <ellipse
          cx='200'
          cy='200'
          rx='12'
          ry='150'
          style={{
            fill: jatte.css.emerald,
            filter: 'url("#jatte_brushstroke_filter20")',
          }}
          transform='translate(200, 200) rotate(45) translate(-200, -200)' />

        <ellipse
          cx='100'
          cy='100'
          rx='8'
          ry='100'
          style={{
            fill: jatte.css.emerald,
            filter: 'url("#jatte_brushstroke_filter10")',
          }}
          transform='translate(100, 100) rotate(24) translate(-100, -100)' />
        <ellipse
          cx='85'
          cy='125'
          rx='12'
          ry='125'
          style={{
            fill: jatte.css.emerald,
            filter: 'url("#jatte_brushstroke_filter10")',
          }}
          transform='translate(85, 125) rotate(66) translate(-85, -125)' />

        <ellipse
          cx='384'
          cy='64'
          rx='8'
          ry='128'
          style={{
            fill: jatte.css.emerald,
            filter: 'url("#jatte_brushstroke_filter10")',
          }}
          transform='translate(384, 64) rotate(32) translate(-384, -64)' />
        <ellipse
          cx='384'
          cy='128'
          rx='12'
          ry='128'
          style={{
            fill: jatte.css.emerald,
            filter: 'url("#jatte_brushstroke_filter20")',
          }}
          transform='translate(384, 128) rotate(128) translate(-384, -128)' />

        <ellipse
          cx='128'
          cy='450'
          rx='8'
          ry='96'
          style={{
            fill: jatte.css.emerald,
            filter: 'url("#jatte_brushstroke_filter20")',
          }}
          transform='translate(128, 450) rotate(256) translate(-128, -450)' />
        <ellipse
          cx='100'
          cy='420'
          rx='12'
          ry='128'
          style={{
            fill: jatte.css.emerald,
            filter: 'url("#jatte_brushstroke_filter20")',
          }}
          transform='translate(100, 420) rotate(100) translate(-100, -420)' />
      </SVG>
    </Root>
  )
}
