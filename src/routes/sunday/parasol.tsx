import gsap, { DrawSVGPlugin, MorphSVGPlugin } from '@gsap/shockingly/all'
import R from 'ramda'
import { FunctionComponent, useEffect, useRef } from 'react'

import { COLORS_P3 } from './palette'
import { Root, SVG } from './parasol-styles'

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin)

export const Parasol: FunctionComponent = () => {
  const rootRef = useRef()

  useEffect(() => {
    const svg = rootRef.current

    if (!svg) return

    const svgChildren = gsap.utils.toArray('path', svg)

    if (!svgChildren.length) return

    gsap.to(svgChildren, {
      drawSVG: '0% 0%',
      repeat: -1,
      stagger: 1,
      yoyo: true,
    })
  })

  return (
    <Root ref={ rootRef }>
      <SVG viewBox='0 0 500 500'>
        <path
          d='M 250 100 c -250 64, -300 100, -500 225 c -5 5, 0 5, 0 5'
          style={{
            fill: 'none',
            stroke: COLORS_P3.RED,
            strokeLinecap: 'round',
            strokeWidth: 5,
            transform: 'translate(250px, 250px) rotate(-1deg) translate(-245px, -250px)',
          }} />
      </SVG>
      <SVG viewBox='0 0 500 500'>
        <path
          d='M 250 100 c -250 64, -300 100, -500 225 c -5 5, 0 5, 0 5'
          style={{
            fill: 'none',
            stroke: COLORS_P3.ORANGE,
            strokeLinecap: 'round',
            strokeWidth: 5,
            transform: 'translate(250px, 250px) rotate(0deg) translate(-250px, -250px)',
          }} />
      </SVG>
      <SVG viewBox='0 0 500 500'>
        <path
          d='M 250 100 c -250 64, -300 100, -500 225 c -5 5, 0 5, 0 5'
          style={{
            fill: 'none',
            stroke: COLORS_P3.YELLOW,
            strokeLinecap: 'round',
            strokeWidth: 5,
            transform: 'translate(250px, 250px) rotate(2deg) translate(-255px, -250px)',
          }} />
      </SVG>
      <SVG viewBox='0 0 500 500'>
        <path
          d='M 250 100 c -250 64, -300 100, -500 225 c -5 5, 0 5, 0 5'
          style={{
            fill: 'none',
            stroke: COLORS_P3.LIGHT_RED,
            strokeLinecap: 'round',
            strokeWidth: 5,
            transform: 'translate(250px, 250px) rotate(1deg) translate(-255px, -250px)',
          }} />
      </SVG>
      <SVG viewBox='0 0 500 500'>
        <path
          d='M 250 100 c -250 64, -300 100, -500 225 c -5 5, 0 5, 0 5'
          style={{
            fill: 'none',
            stroke: COLORS_P3.PINK,
            strokeLinecap: 'round',
            strokeWidth: 5,
            transform: 'translate(250px, 250px) rotate(-2deg) translate(-245px, -250px)',
          }} />
      </SVG>
    </Root>
  )
}
