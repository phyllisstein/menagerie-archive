import { FunctionComponent, memo } from 'react'
import { Root } from './scene-styles'

export interface Props {
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
  ...rest
}) {
  const transforms = Object.entries(rest)
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

  return (
    <Root style={{ transform: `translate(-50%, -50%) ${ transforms }` }}>
      { children }
    </Root>
  )
})
