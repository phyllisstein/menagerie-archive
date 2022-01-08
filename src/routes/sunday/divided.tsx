import BinPacker from 'bin-packer'
import { BP2D } from 'binpackingjs/src'
import _ from 'lodash'
import { FunctionComponent, useMemo } from 'react'

import { Bar, Circle, Ellipse, Root, SVG } from './colors-styles'

const { Bin, Box, Packer } = BP2D

const getGridItems = (elementCount: number) => {
  const bin = new Bin(512, 256)
  const boxes = Array(elementCount).fill(0).map(() => {
    const radius = _.random(2, 24)
    const width = _.random(4, 16) * 1.5
    const height = _.random(4, 16) * 1.5
    return new Box(radius, radius)
  })
  const packer = new Packer([bin])
  return packer.pack(boxes)
}

export const Divided: FunctionComponent = () => {
  const orangeGridItems = useMemo(() => getGridItems(128), [])

  return (
    <>
      <Root>
        <Bar>
          <SVG
            height='256'
            viewBox='0 0 512 256'
            width='512'>
            { orangeGridItems.map(item => {
              const color = _.sample(['BLUE', 'GREEN', 'ORANGE', 'RED']) as 'BLUE' | 'GREEN' | 'ORANGE' | 'RED'
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
