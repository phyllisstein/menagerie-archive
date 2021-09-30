import { FunctionComponent, memo } from 'react'
import { Root } from './scene-styles'

export interface Props {
  relative?: boolean
  rotate?: number
  rotateX?: number
  rotateY?: number
  rotateZ?: number
  scale?: number
  scaleX?: number
  scaleY?: number
  translate?: number
  translateX?: number
  translateY?: number
  translateZ?: number
}

export const Scene: FunctionComponent<Props> = memo(function Scene ({
  children,
  relative: _relative,
  rotate: _rotate,
  rotateX: _rotateX,
  rotateY: _rotateY,
  rotateZ: _rotateZ,
  scale: _scale,
  scaleX: _scaleX,
  scaleY: _scaleY,
  translate: _translate,
  translateX: _translateX,
  translateY: _translateY,
  translateZ: _translateZ,
  ...rest
}) {
  return <Root { ...rest }>{ children }</Root>
})
