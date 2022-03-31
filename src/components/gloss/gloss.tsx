import styled from '@emotion/styled'
import _ from 'lodash'
import { clearFix } from 'polished'
import {
  Children,
  FunctionComponent,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { animated } from 'react-spring'
import * as R from 'remeda'

import { Margin } from './margin'

const ChildrenContainer = styled.div`
  ${ clearFix() }
`

interface Props {
  left?: boolean
  top?: number
}

export const Gloss: FunctionComponent<Props> = ({
  children,
  left,
  top = 50,
}) => {
  const { childEls, marginEl } = R.groupBy(Children.toArray(children), c =>
    c?.type === Margin ? 'marginEl' : 'childEls',
  )

  const [childrenRect, setChildrenRect] = useState({})
  const [marginRect, setMarginRect] = useState({})

  const childElsRef = useRef(null)
  const marginElsRef = useRef(null)

  useLayoutEffect(() => {
    const childWrapper = childElsRef.current

    if (!childWrapper) return

    const childResizeObserver = new ResizeObserver(([entry], observer) => {
      let { bottom, height, right, top, width, y } = entry.contentRect
      let middle = y + height / 2
      bottom = _.round(bottom)
      height = _.round(height)
      right = _.round(right)
      top = _.round(top)
      width = _.round(width)
      y = _.round(y)
      middle = _.round(middle)

      setChildrenRect({ bottom, height, middle, right, top, width, y })
      // observer.disconnect()
    })

    childResizeObserver.observe(childWrapper, { box: 'border-box' })

    return () => {
      childResizeObserver.disconnect()
    }
  }, [childElsRef])

  useLayoutEffect(() => {
    const margin = marginElsRef.current

    if (!margin) return

    const marginResizeObserver = new ResizeObserver(([entry], observer) => {
      let { height, left, top, width, y } = entry.contentRect

      height = _.round(height)
      left = _.round(left)
      top = _.round(top)
      width = _.round(width)
      y = _.round(y)

      setMarginRect({ height, left, top, width, y })
      // observer.disconnect()
    })

    marginResizeObserver.observe(margin, { box: 'border-box' })

    return () => {
      marginResizeObserver.disconnect()
    }
  }, [marginElsRef])

  console.log({ marginRect })
  console.log({ childrenRect })

  let shapeTop = (childrenRect.height || 0) / 2 - (marginRect.height || 0) / 2
  shapeTop -= shapeTop % 8
  let shapeBottom =
    (marginRect.height || 0) / 2 + (childrenRect.height || 0) / 2
  shapeBottom += shapeBottom % 8

  const shapeWidth = left ? marginRect.width : (marginRect.width || 0) * 0.8
  const childrenRectHeight = childrenRect.height || 0
  const childrenRectMiddle = childrenRect.middle || 0

  const path = left
    ? `polygon(0 ${ shapeTop }px, ${ shapeWidth }px ${ shapeTop }px, ${ shapeWidth }px ${ shapeBottom }px, 0 ${ shapeBottom }px)`
    : `polygon(0 ${ shapeTop }px, 0 ${ shapeBottom }px, ${ shapeWidth }px ${ shapeBottom }px, ${ shapeWidth }px ${ shapeTop }px)`

  return (
    <div style={{ position: 'relative' }}>
      <div ref={ childElsRef }>
        <div
          style={{
            clipPath: path,
            float: left ? 'left' : 'right',
            height: childrenRectHeight,
            shapeOutside: path,
            width: shapeWidth,
          }} />
        { childEls }
      </div>
      <div
        ref={ marginElsRef }
        style={{
          left: left ? '-1rem' : 'auto',
          position: 'absolute',
          right: left ? 'auto' : 0,
          top: childrenRectMiddle,
          transform: left
            ? `translate(0%, ${ top * -1 }%)`
            : `translate(25%, ${ top * -1 }%)`,
          width: '75%',
        }}>
        { marginEl }
      </div>
    </div>
  )
}
