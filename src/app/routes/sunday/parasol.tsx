import { FunctionComponent } from 'react'

import { toLCH } from './color-transformers'
import { COLORS } from './palette'
import { Root, SVG } from './parasol-styles'

export const Parasol: FunctionComponent = () => {
  return (
    <Root>
      <SVG style={{ height: '100vh', width: '100vw' }} viewBox='0 0 500 500'>
        <path d='M 250 100 c -250 64, -300 100, -500 225 c -5 5, 0 5, -5 16' style={{ fill: 'none', stroke: toLCH(COLORS.ORANGE), strokeWidth: 10, transform: 'translate(250px, 250px) rotate(0deg) translate(-250px, -250px)' }} />
        <path d='M 250 100 c -250 64, -300 100, -500 225 c -5 5, 0 5, -5 16' style={{ fill: 'none', stroke: toLCH(COLORS.RED), strokeWidth: 10, transform: 'translate(250px, 250px) rotate(-5deg) translate(-235px, -250px)' }} />
        <path d='M 250 100 c -250 64, -300 100, -500 225 c -5 5, 0 5, -5 16' style={{ fill: 'none', stroke: toLCH(COLORS.YELLOW), strokeWidth: 10, transform: 'translate(250px, 250px) rotate(10deg) translate(-275px, -250px)' }} />
        <path d='M 250 100 c -250 64, -300 100, -500 225 c -5 5, 0 5, -5 16' style={{ fill: 'none', stroke: toLCH(COLORS.LIGHT_RED), strokeWidth: 10, transform: 'translate(250px, 250px) rotate(5deg) translate(-260px, -250px)' }} />
        <path d='M 250 100 c -250 64, -300 100, -500 225 c -5 5, 0 5, -5 16' style={{ fill: 'none', stroke: toLCH(COLORS.PINK), strokeWidth: 10, transform: 'translate(250px, 250px) rotate(-10deg) translate(-220px, -250px)' }} />
      </SVG>
    </Root>
  )
}
