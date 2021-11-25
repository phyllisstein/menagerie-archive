import { formatCss } from 'culori'
import { FunctionComponent } from 'react'

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
              fill: formatCss(COLORS.RED),
            }} />
          <ellipse
            cx='192'
            cy='64'
            rx='64'
            ry='64'
            style={{
              fill: formatCss(COLORS.YELLOW),
            }} />
          <ellipse
            cx='320'
            cy='64'
            rx='64'
            ry='64'
            style={{
              fill: formatCss(COLORS.PINK),
            }} />
          <ellipse
            cx='448'
            cy='64'
            rx='64'
            ry='64'
            style={{
              fill: formatCss(COLORS.BROWN),
            }} />
          <ellipse
            cx='64'
            cy='192'
            rx='64'
            ry='64'
            style={{
              fill: formatCss(COLORS.GREEN),
            }} />
          { /* Blue */ }
          <ellipse
            cx='192'
            cy='192'
            rx='64'
            ry='64'
            style={{
              fill: formatCss(COLORS.BLUE),
            }} />
          <ellipse
            cx='320'
            cy='192'
            rx='64'
            ry='64'
            style={{
              fill: formatCss(COLORS.LIGHT_BLUE),
            }} />
          <ellipse
            cx='448'
            cy='192'
            rx='64'
            ry='64'
            style={{
              fill: formatCss(COLORS.LEAD_WHITE),
            }} />
          <ellipse
            cx='64'
            cy='320'
            rx='64'
            ry='64'
            style={{
              fill: formatCss(COLORS.ORANGE),
            }} />
          <ellipse
            cx='192'
            cy='320'
            rx='64'
            ry='64'
            style={{
              fill: formatCss(COLORS.LIGHT_RED),
            }} />
        </SVG>
      </Root>
    </>
  )
}
