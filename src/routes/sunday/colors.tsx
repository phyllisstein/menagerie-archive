import { FunctionComponent } from 'react'

import { Root, SVG } from './colors-styles'
import { COLORS_P3 } from './palette'

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
              fill: COLORS_P3.RED,
            }} />
          <ellipse
            cx='192'
            cy='64'
            rx='64'
            ry='64'
            style={{
              fill: COLORS_P3.YELLOW,
            }} />
          <ellipse
            cx='320'
            cy='64'
            rx='64'
            ry='64'
            style={{
              fill: COLORS_P3.PINK,
            }} />
          <ellipse
            cx='448'
            cy='64'
            rx='64'
            ry='64'
            style={{
              fill: COLORS_P3.BROWN,
            }} />
          <ellipse
            cx='64'
            cy='192'
            rx='64'
            ry='64'
            style={{
              fill: COLORS_P3.GREEN,
            }} />
          <ellipse
            cx='192'
            cy='192'
            rx='64'
            ry='64'
            style={{
              fill: COLORS_P3.BLUE,
            }} />
          <ellipse
            cx='320'
            cy='192'
            rx='64'
            ry='64'
            style={{
              fill: COLORS_P3.LIGHT_BLUE,
            }} />
          <ellipse
            cx='448'
            cy='192'
            rx='64'
            ry='64'
            style={{
              fill: COLORS_P3.LEAD_WHITE,
            }} />
          <ellipse
            cx='64'
            cy='320'
            rx='64'
            ry='64'
            style={{
              fill: COLORS_P3.ORANGE,
            }} />
          <ellipse
            cx='192'
            cy='320'
            rx='64'
            ry='64'
            style={{
              fill: COLORS_P3.LIGHT_RED,
            }} />
        </SVG>
      </Root>
    </>
  )
}
