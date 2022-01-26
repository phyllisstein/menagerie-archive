import _ from 'lodash'
import { FunctionComponent, useMemo } from 'react'

import { Bar, Circle, Ellipse, Root, SVG } from './colors-styles'

const getGridItems = (elementCount: number) => []

export const Divided: FunctionComponent = () => {
  const orangeGridItems = useMemo(() => getGridItems(128), [])

  return (
    <>
      <Root>
        <Bar>
          <SVG height='256' viewBox='0 0 512 256' width='512'>
            { orangeGridItems.map(item => {
              const color = _.sample(['BLUE', 'GREEN', 'ORANGE', 'RED']) as
                | 'BLUE'
                | 'GREEN'
                | 'ORANGE'
                | 'RED'
              return (
                <Circle
                  key={ `${ item.x }-${ item.y }` }
                  $color={ color }
                  cx={ item.x }
                  cy={ item.y }
                  r={ item.width / 2 } />
              )
            }) }
          </SVG>
        </Bar>
      </Root>
    </>
  )
}
