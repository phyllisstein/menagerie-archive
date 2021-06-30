import { ReactChild, ReactElement } from 'react'
import { Root } from './scene-styles'

export interface Props {
  children: ReactChild
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

export function Scene ({ children, ...rest }: Props): ReactElement {
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
}
