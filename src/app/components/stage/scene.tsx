import type { ReactChild, ReactElement } from 'react'
import { Children } from 'react'
import { Root } from './scene-styles'

interface Transform3d {
  x?: number | string
  y?: number | string
  z?: number | string
}

export interface Props {
  children: ReactChild
  rotate?: number | string
  rotate3d?: Transform3d
  rotateX?: number | string
  rotateY?: number | string
  rotateZ?: number | string
  scale?: number | string
  scale3d?: Transform3d
  scaleX?: number | string
  scaleY?: number | string
  scaleZ?: number | string
  translate?: number | string
  translate3d?: Transform3d
  translateX?: number | string
  translateY?: number | string
  translateZ?: number | string
}

export function Scene({ children, style }: Props): ReactElement {
  return <Root style={ style }>{ Children.only(children) }</Root>
}
