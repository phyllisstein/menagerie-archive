import {
  Children,
  FunctionComponent,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { animated } from 'react-spring'
import * as R from 'remeda'
import styled from '@emotion/styled'
import _ from 'lodash'

import { Margin } from './margin'
import { clearFix } from 'polished'

const ChildrenContainer = styled.div`
  ${ clearFix() }
`

interface Props {
  left?: boolean
  top?: number
}

export const Gloss: FunctionComponent<Props> = ({ children, left, top = 50 }) => {
  const { childEls, marginEl } = R.groupBy(Children.toArray(children), c =>
    c?.type === Margin ? 'marginEl' : 'childEls',
  )

  const [childrenRect, setChildrenRect] = useState(0)
  const [marginRect, setMarginRect] = useState({})

  const childElsRef = useRef(null)
  const marginElsRef = useRef(null)

  useLayoutEffect(() => {
    const childWrapper = childElsRef.current

    if (!childWrapper) return

    const childResizeObserver = new ResizeObserver(([entry], observer) => {
      const { bottom, height, right, top, width, y } = entry.contentRect
      const middle = y + height / 2
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
      const { height, left, top, width, y } = entry.contentRect
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
  
  const shapeTop = Math.floor(((childrenRect.height || 0) / 2) - ((marginRect.height || 0) / 2))
  const shapeBottom = Math.floor(((marginRect.height || 0) / 2) + ((childrenRect.height || 0) / 2))
  const shapeWidth = Math.floor((marginRect.width || 0) / 2)
  const childrenRectHeight = Math.floor(childrenRect.height || 0)
  const childrenRectMiddle = Math.floor(childrenRect.middle || 0)
  
  const path = left
    ? `polygon(0 ${ shapeTop }px, ${(marginRect.width || 0) + 16}px ${shapeTop}px, ${(marginRect.width || 0) + 16}px ${shapeBottom}px, 0 ${shapeBottom}px)`
    : `polygon(0 ${ shapeTop }px, 0 ${ shapeBottom }px, ${ shapeWidth }px ${ shapeBottom }px, ${ shapeWidth }px ${ shapeTop }px)`
  
  return (
    <div style={{ position: 'relative' }}>
      <div ref={ childElsRef }>
        <div
          style={{
            clipPath: path,
            float: left ? 'left' : 'right',
            shapeOutside: path,
            width: left ? marginRect.width + 16 : (marginRect.width * 0.75) + 16,
            height: childrenRectHeight,
          }} />
        { childEls }
      </div>
      <div
        ref={ marginElsRef }
        style={{
          left: left ? 0 : 'auto',
          position: 'absolute',
          right: left ? 'auto' : 0,
          top: childrenRectMiddle,
          transform: left ? `translate(-5%, ${ top * -1 }%)` : `translate(25%, ${ top * -1 }%)`,
          width: '75%',
        }}>
        { marginEl }
      </div>
    </div>
  )
}
