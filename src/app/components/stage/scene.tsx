import type { ReactChild, ReactElement } from 'react'
import { getValueAndUnit } from 'polished'
import { Root } from './scene-styles'

export interface Props {
  children: ReactChild
  rotate?: number | string
  rotateX?: number | string
  rotateY?: number | string
  rotateZ?: number | string
  scale?: number | string
  scaleX?: number | string
  scaleY?: number | string
  scaleZ?: number | string
  translate?: number | string
  translateX?: number | string
  translateY?: number | string
  translateZ?: number | string
}

export function Scene({ children, ...rest }: Props): ReactElement {
  const transforms = Object.entries(rest)
    .map(([kind, amount]) => {
      const [value, unit = 'px'] = getValueAndUnit(amount)
      return `${ kind }(${ value }${ unit })`
    })
    .join(' ')

  return (
    <Root style={{ transform: `translate(-50%, -50%) ${ transforms }` }}>
      { children }
    </Root>
  )
}
