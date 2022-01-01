import _ from 'lodash'
import { FunctionComponent } from 'react'

import { toLCH } from './color-transformers'
import { Bar, Root, SVG } from './colors-styles'
import { COLORS } from './palette'

type Location = {
  x: number
  y: number
  r: number
}

const getGridItems = (elements: Array<Location> = []) => {
  const radius = _.random(2, 16)
  const diameter = radius * 2

  const nextYEl = _.find(elements, (el, idx, els) => {
    return ((els as Array<Location>).at(idx - 1)?.y ?? 0) - el.y > diameter
  })

  const nextYIndex = elements.indexOf(nextYEl)
  let nextY = (nextYEl?.y ?? 0) + diameter

  const nextXEl = _.findLast(elements, (el, idx, els) => {
    const inYRange = el.y <= nextY && el.y + diameter >= nextY
    return inYRange
  })

  let nextX = diameter

  if (nextY > 64) {
    nextY = 0
  }

  nextX = (nextXEl?.x ?? 0) + diameter + _.random(-32, 32)

  if (nextX >= 512) {
    return elements
  }

  elements.push({ r: radius, x: nextX, y: nextY })
  return getGridItems(elements)
}

export const Divided: FunctionComponent = () => {
  const orangeGridItems = _.sampleSize(getGridItems(), 64)
  const redGridItems = _.sampleSize(getGridItems(), 32)
  const blueGridItems = _.sampleSize(getGridItems(), 64)
  const greenGridItems = _.sampleSize(getGridItems(), 32)

  return (
    <>
      <Root>
        <Bar>
          { orangeGridItems.map(item => {
            return (
              <SVG
                key={ `${ item.x }-${ item.y }` }
                height='64'
                style={{
                  transform: `translate3d(0, ${ _.random(-16, 16) }px, ${ _.random(-75, 0) }px)`,
                }}
                viewBox='0 0 512 64'
                width='512'>
                <circle
                  cx={ item.x }
                  cy={ item.y }
                  fill={ toLCH(COLORS.ORANGE) }
                  r={ item.r } />
              </SVG>
            )
          }) }
          { redGridItems.map(item => {
            return (
              <SVG
                key={ `${ item.x }-${ item.y }` }
                height='64'
                style={{
                  transform: `translate3d(0, ${ _.random(-16, 16) }px, ${ _.random(0, 75) }px)`,
                }}
                viewBox='0 0 512 64'
                width='512'>
                <circle
                  cx={ item.x }
                  cy={ item.y }
                  fill={ toLCH(COLORS.RED) }
                  r={ item.r } />
              </SVG>
            )
          }) }
        </Bar>
        <Bar>
          { blueGridItems.map(item => {
            return (
              <SVG
                key={ `${ item.x }-${ item.y }` }
                height='64'
                style={{
                  transform: `translate3d(0, ${ _.random(-16, 16) }px, ${ _.random(-75, 0) }px)`,
                }}
                viewBox='0 0 512 64'
                width='512'>
                <circle
                  cx={ item.x }
                  cy={ item.y }
                  fill={ toLCH(COLORS.BLUE) }
                  r={ item.r } />
              </SVG>
            )
          }) }
          { greenGridItems.map(item => {
            return (
              <SVG
                key={ `${ item.x }-${ item.y }` }
                height='64'
                style={{
                  transform: `translate3d(0, ${ _.random(-16, 16) }px, ${ _.random(0, 75) }px)`,
                }}
                viewBox='0 0 512 64'
                width='512'>
                <circle
                  cx={ item.x }
                  cy={ item.y }
                  fill={ toLCH(COLORS.GREEN) }
                  r={ item.r } />
              </SVG>
            )
          }) }
        </Bar>
      </Root>
    </>
  )
}
