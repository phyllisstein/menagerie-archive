import { FunctionComponent } from 'react'

import { toLCH } from './color-transformers'
import { Root, SVG } from './colors-styles'
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
              fill: toLCH(COLORS.RED),
            }} />
          <ellipse
            cx='192'
            cy='64'
            rx='64'
            ry='64'
            style={{
              fill: toLCH(COLORS.YELLOW),
            }} />
          <ellipse
            cx='320'
            cy='64'
            rx='64'
            ry='64'
            style={{
              fill: toLCH(COLORS.PINK),
            }} />
          <ellipse
            cx='448'
            cy='64'
            rx='64'
            ry='64'
            style={{
              fill: toLCH(COLORS.BROWN),
            }} />
          <ellipse
            cx='64'
            cy='192'
            rx='64'
            ry='64'
            style={{
              fill: toLCH(COLORS.GREEN),
            }} />
          <ellipse
            cx='192'
            cy='192'
            rx='64'
            ry='64'
            style={{
              fill: toLCH(COLORS.BLUE),
            }} />
          <ellipse
            cx='320'
            cy='192'
            rx='64'
            ry='64'
            style={{
              fill: toLCH(COLORS.LIGHT_BLUE),
            }} />
          <ellipse
            cx='448'
            cy='192'
            rx='64'
            ry='64'
            style={{
              fill: toLCH(COLORS.LEAD_WHITE),
            }} />
          <ellipse
            cx='64'
            cy='320'
            rx='64'
            ry='64'
            style={{
              fill: toLCH(COLORS.ORANGE),
            }} />
          <ellipse
            cx='192'
            cy='320'
            rx='64'
            ry='64'
            style={{
              fill: toLCH(COLORS.LIGHT_RED),
            }} />
        </SVG>
      </Root>
    </>
  )
}
