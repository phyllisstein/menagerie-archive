import { FunctionComponent } from 'react'

import { Root, SVG } from './sunday-styles'

export const Sunday: FunctionComponent = () => {
  return (
    <>
      <Root>
        <SVG height='512' viewBox='0 0 512 512' width='512'>
          <ellipse
            cx='192'
            cy='64'
            rx='64'
            ry='64'
            style={{
              fill: 'color(display-p3 0.7364 0.5987 0)',
              // fill: 'lch(65% 100 85)',
              // fill: 'rgb(74.41% 59.75% 0%)',
            }} />
        </SVG>
      </Root>
    </>
  )
}
