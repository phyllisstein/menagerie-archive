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

    tl.from(els, { drawSVG: '0% 5%', duration: 1, stagger: 0.1 })
      .to(els, { drawSVG: '95% 100%', duration: 1, stagger: 0.1 })

    // gsap.fromTo(els, { drawSVG: '0%' }, { drawSVG: '100%', duration: 3, repeat: -1, stagger: 1, yoyo: true })

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
        <path d='M 250 100 c -250 64, -300 100, -500 225 c -5 5, 0 5, -5 16' style={{ fill: 'none', stroke: toLCH(COLORS.ORANGE), strokeWidth: 10, transform: 'translate(250px, 250px) rotate(0deg) translate(-250px, -250px)' }} />
        <path d='M 250 100 c -250 64, -300 100, -500 225 c -5 5, 0 5, -5 16' style={{ fill: 'none', stroke: toLCH(COLORS.RED), strokeWidth: 10, transform: 'translate(250px, 250px) rotate(-1deg) translate(-235px, -250px)' }} />
        <path d='M 250 100 c -250 64, -300 100, -500 225 c -5 5, 0 5, -5 16' style={{ fill: 'none', stroke: toLCH(COLORS.YELLOW), strokeWidth: 10, transform: 'translate(250px, 250px) rotate(2deg) translate(-275px, -250px)' }} />
        <path d='M 250 100 c -250 64, -300 100, -500 225 c -5 5, 0 5, -5 16' style={{ fill: 'none', stroke: toLCH(COLORS.LIGHT_RED), strokeWidth: 10, transform: 'translate(250px, 250px) rotate(1deg) translate(-260px, -250px)' }} />
        <path d='M 250 100 c -250 64, -300 100, -500 225 c -5 5, 0 5, -5 16' style={{ fill: 'none', stroke: toLCH(COLORS.PINK), strokeWidth: 10, transform: 'translate(250px, 250px) rotate(-2deg) translate(-220px, -250px)' }} />
      </SVG>
    </Root>
  )
}
