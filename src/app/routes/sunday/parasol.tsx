import gsap, { DrawSVGPlugin, MorphSVGPlugin } from '@gsap/shockingly/all'
import { FunctionComponent, useEffect, useRef } from 'react'

import { toLCH } from './color-transformers'
import { COLORS } from './palette'
import { Root, SVG } from './parasol-styles'

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin)

export const Parasol: FunctionComponent = () => {
  const svgRef = useRef()
  const tlRef = useRef(gsap.timeline({ repeat: -1, yoyo: true }))

  useEffect(() => {
    let tl = tlRef.current
    const svg = svgRef.current

    if (!tl || !svg) return

    const els = gsap.utils.toArray(svg.children)

    tl.from(els, { drawSVG: '0% 2%', duration: 1, stagger: 0.1 })
      .to(els, { drawSVG: '98% 100%', duration: 1, stagger: 0.1 })

    return () => {
      tl.kill()
      tl = null
      tlRef.current = null
      tlRef.current = gsap.timeline({ repeat: -1, yoyo: true })
    }
  }, [])

  return (
    <Root>
      <SVG ref={ svgRef } style={{ height: '100vh', width: '100vw' }} viewBox='0 0 500 500'>
        <path d='M 250 100 c -250 64, -300 100, -500 225 c -5 5, 0 5, 0 5' style={{ fill: 'none', stroke: toLCH(COLORS.ORANGE), strokeLinecap: 'round', strokeWidth: 10, transform: 'translate(250px, 250px) rotate(0deg) translate(-250px, -250px)' }} />
        <path d='M 250 100 c -250 64, -300 100, -500 225 c -5 5, 0 5, 0 5' style={{ fill: 'none', stroke: toLCH(COLORS.RED), strokeLinecap: 'round', strokeWidth: 10, transform: 'translate(250px, 250px) rotate(-1deg) translate(-245px, -250px)' }} />
        <path d='M 250 100 c -250 64, -300 100, -500 225 c -5 5, 0 5, 0 5' style={{ fill: 'none', stroke: toLCH(COLORS.YELLOW), strokeLinecap: 'round', strokeWidth: 10, transform: 'translate(250px, 250px) rotate(2deg) translate(-255px, -250px)' }} />
        <path d='M 250 100 c -250 64, -300 100, -500 225 c -5 5, 0 5, 0 5' style={{ fill: 'none', stroke: toLCH(COLORS.LIGHT_RED), strokeLinecap: 'round', strokeWidth: 10, transform: 'translate(250px, 250px) rotate(1deg) translate(-255px, -250px)' }} />
        <path d='M 250 100 c -250 64, -300 100, -500 225 c -5 5, 0 5, 0 5' style={{ fill: 'none', stroke: toLCH(COLORS.PINK), strokeLinecap: 'round', strokeWidth: 10, transform: 'translate(250px, 250px) rotate(-2deg) translate(-245px, -250px)' }} />
      </SVG>
    </Root>
  )
}
