import { FunctionComponent } from 'react'

import { Root, SVG } from './color-styles'
import { COLORS } from './palette'

export const Colors: FunctionComponent = () => {
  return (
    <>
      <Root>
        <SVG height='512' viewBox='0 0 512 512' width='512'>
          <ellipse
            cx='64'
            cy='64'
            rx='64'
            ry='64'
            style={{
              fill: COLORS.RED,
            }} />
          <ellipse
            cx='192'
            cy='64'
            rx='64'
            ry='64'
            style={{
              fill: COLORS.YELLOW,
            }} />
          <ellipse
            cx='320'
            cy='64'
            rx='64'
            ry='64'
            style={{
              fill: COLORS.PINK,
            }} />
          <ellipse
            cx='448'
            cy='64'
            rx='64'
            ry='64'
            style={{
              fill: COLORS.BROWN,
            }} />
          <ellipse
            cx='64'
            cy='192'
            rx='64'
            ry='64'
            style={{
              fill: COLORS.GREEN,
            }} />
          { /* Blue */ }
          <ellipse
            cx='192'
            cy='192'
            rx='64'
            ry='64'
            style={{
              fill: COLORS.BLUE,
            }} />
          <ellipse
            cx='320'
            cy='192'
            rx='64'
            ry='64'
            style={{
              fill: COLORS.LIGHT_BLUE,
            }} />
          <ellipse
            cx='448'
            cy='192'
            rx='64'
            ry='64'
            style={{
              fill: COLORS.LEAD_WHITE,
            }} />
          <ellipse
            cx='64'
            cy='320'
            rx='64'
            ry='64'
            style={{
              fill: COLORS.ORANGE,
            }} />
        </SVG>
      </Root>
    </>
  )
}
