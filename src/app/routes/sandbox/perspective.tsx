import {
  Back,
  Bottom,
  Cube,
  Front,
  Left,
  Right,
  Root,
  Top,
} from './perspective-styles'
import type { ReactElement } from 'react'

export function PerspectiveSandboxRoute(): ReactElement {
  return (
    <Root>
      <Cube>
        <Front>F</Front>
        <Back>BA</Back>
        <Left>L</Left>
        <Right>R</Right>
        <Top>T</Top>
        <Bottom>BT</Bottom>
      </Cube>
    </Root>
  )
}
