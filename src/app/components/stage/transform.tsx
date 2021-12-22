import { Children, FunctionComponent, memo } from 'react'

interface Props {
  rotate?: number
  rotateX?: number
  rotateY?: number
  rotateZ?: number
  scale?: number
  x?: number
  y?: number
  z?: number
}

export const Transform: FunctionComponent<Props> = props => {
  if (Children.count(props.children) !== 0) {
    console.error(
      'Transform component should not have child components. Got: %o',
      props.children,
    )
    // throw new Error('Transform component should not have child components.')
  }

  if (Object.keys(props).length > 1) {
    console.error(
      'Transform component accepts one transformation at a time. Got: %o',
      props,
    )
    // throw new Error('Transform component accepts one transformation at a time.')
  }

  return null
}
