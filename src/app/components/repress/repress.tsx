import type { ReactElement, ReactNode } from 'react'
import { oneLine } from 'common-tags'

interface Props {
  children: ReactNode
}

export function Repress(props: Props): ReactElement {
  const transform = oneLine`
    scaleX(-0.5)
    scaleY(0.33333333)
    scale(0.5)
    translateY(-125px)
    rotateY(-90deg)
    translateZ(-250px)
    rotateZ(-45deg)
    rotateX(-45deg)
    translateX(-50px)
    scaleZ(0.66666667)
  `

  const { style = {}} = props

  return (
    <>
      <div
        style={{
          ...style,
          left: '50%',
          perspective: 1000,
          position: 'absolute',
          top: '50%',
        }}>
        <div
          style={{
            transform,
            transformOrigin: 'center',
            transformStyle: 'preserve-3d',
          }}>
          { props.children }
        </div>
      </div>
    </>
  )
}
