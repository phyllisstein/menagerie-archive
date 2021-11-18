import { FunctionComponent } from 'react'

import { Root, SVG } from './color-styles'

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
              fill: 'color(display-p3 0.6037 0.1014 0)',
              // fill: 'lch(35% 100 45)',
              // fill: 'rgb(60.75% 13.8% 0%)',
            }} />
          <ellipse
            cx='192'
            cy='64'
            rx='64'
            ry='64'
            style={{
              fill: 'color(display-p3 0.7364 0.5987 0)',
              // fill: 'lch(65% 100 85)',
              // fill: 'rgb(74.41% 59.75% 0%)',
            }} />
          <ellipse
            cx='320'
            cy='64'
            rx='64'
            ry='64'
            style={{
              fill: 'color(display-p3 0.7042 0 0.2356)',
              // fill: 'lch(40% 100 20)',
              // fill: 'rgb(73.07% 0% 23.86%)',
            }} />
          <ellipse
            cx='448'
            cy='64'
            rx='64'
            ry='64'
            style={{
              fill: 'color(display-p3 0.6492 0.3095 0)',
              // fill: 'lch(45% 100 60)',
              // fill: 'rgb(64.53% 32.59% 0%)',
            }} />
          <ellipse
            cx='64'
            cy='192'
            rx='64'
            ry='64'
            style={{
              fill: 'color(display-p3 0 0.2797 0.0249)',
              // fill: 'lch(25% 100 140)',
              // fill: 'rgb(0% 27.43% 6.29%)',
            }} />
          <ellipse
            cx='192'
            cy='192'
            rx='64'
            ry='64'
            style={{
              fill: 'color(display-p3 0 0.2525 0.6632)',
              // fill: 'lch(30% 100 285)',
              // fill: 'rgb(0% 25.87% 65.37%)',
            }} />
          <ellipse
            cx='320'
            cy='192'
            rx='64'
            ry='64'
            style={{
              fill: 'color(display-p3 0.5327 0.5927 1)',
              // fill: 'lch(65% 100 285)',
              // fill: 'rgb(53.15% 59.65% 100%)',
            }} />
          <ellipse
            cx='448'
            cy='192'
            rx='64'
            ry='64'
            style={{
              fill: 'color(display-p3 0.9059 0.9505 1)',
              // fill: 'lch(95% 110 250)',
              // fill: 'rgb(89.99% 95.15% 100%)',
            }} />
        </SVG>
      </Root>
    </>
  )
}
