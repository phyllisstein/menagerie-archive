import { FunctionComponent, memo } from 'react'
import { Properties } from 'csstype'
import { Root } from './scene-styles'

export const createTransformString = (props: Props): string =>
  Object.entries(props)
    .map(([kind, amount]) => {
      if (kind.includes('translate')) {
        return `${ kind }(${ amount }px)`
      }

      if (kind.includes('rotate')) {
        return `${ kind }(${ amount }deg)`
      }

      return `${ kind }(${ amount })`
    })
    .join(' ')

export interface Props {
  relative?: boolean
  rotate?: number
  rotateX?: number
  rotateY?: number
  rotateZ?: number
  scale?: number
  scaleX?: number
  scaleY?: number
  style?: Properties
  translate?: number
  translateX?: number
  translateY?: number
  translateZ?: number
}

export const Scene: FunctionComponent<Props> = function Scene ({
  children,
  relative: _relative,
  style = {},
  ...rest
}) {
  const transforms = createTransformString(rest)

  return (
    <Root
      style={{
        ...style,
        transform: `translate(-50%, -50%) ${ transforms }`,
      }}>
      { children }
    </Root>
  )
}
