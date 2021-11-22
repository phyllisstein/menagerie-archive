import { FunctionComponent } from 'react'

import { COLORS } from './palette'
import { Root, SVG } from './sunday-styles'

export const Sunday: FunctionComponent = () => {
  return (
    <>
      <Root>
        <SVG height='512' style={{ backgroundColor: COLORS.LEAD_WHITE }} viewBox='0 0 512 512' width='512'>
          <rect height={ 256 } style={{ fill: COLORS.LIGHT_RED }} width={ 32 } x={ 128 } y={ 128 } />
          <rect height={ 256 } style={{ fill: COLORS.ORANGE }} width={ 32 } x={ 160 } y={ 128 } />
          <rect height={ 256 } style={{ fill: COLORS.RED }} width={ 32 } x={ 192 } y={ 128 } />
        </SVG>
      </Root>
    </>
  )
}
