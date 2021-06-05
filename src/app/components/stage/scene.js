import { Children } from 'react'
import { Root } from './scene-styles'

export function Scene({ children, style }) {
  return <Root style={ style }>{ Children.only(children) }</Root>
}
