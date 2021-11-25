import { formatCss } from 'culori'
import { FunctionComponent } from 'react'

import { COLORS } from './palette'
import { Root, SVG } from './parasol-styles'

export const Parasol: FunctionComponent = () => {
  console.log(COLORS)
  return (
    <>
      <Root>
        <SVG height='512' style={{ backgroundColor: formatCss(COLORS.LEAD_WHITE) }} viewBox='0 0 512 512' width='512'>
          <path d='M 256 256 A 32 8 0 0 1 324 324' style={{ stroke: formatCss(COLORS.RED), strokeWidth: 5 }} />
          <path d='M 8 8 C 64 128, 256 64, 128 128' style={{ fill: 'transparent', stroke: formatCss(COLORS.PINK), strokeWidth: 5 }} />
        </SVG>
      </Root>
    </>
  )
}
