import gsap, { DrawSVGPlugin, MorphSVGPlugin } from '@gsap/shockingly/all'
import R from 'ramda'
import { FunctionComponent, useEffect, useRef } from 'react'

import { toLCH } from './color-transformers'
import { COLORS } from './palette'
import { Root, SVG } from './parasol-styles'

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin)

export const Parasol: FunctionComponent = () => {
    const rootRef = useRef()
    const primaryTLRef = useRef(gsap.timeline({ repeat: -1 }))
    const secondaryTLRef = useRef(gsap.timeline({ repeat: -1 }))
    const combinedTLRef = useRef(gsap.timeline({ repeat: -1 }))

    useEffect(() => {
        const primaryTL = primaryTLRef.current
        const secondaryTL = secondaryTLRef.current
        const combinedTL = combinedTLRef.current
        const svg = rootRef.current

        if (!primaryTL || !svg) return

        const svgChildren = gsap.utils.toArray('path', svg.current)
        const [primary, secondary] = R.splitAt(5, svgChildren)

        if (!primary || !primary.length) return

        primaryTL
            .from(primary, { drawSVG: '0% 0%', duration: 1, stagger: 1 })
            .to(primary, { drawSVG: '100% 100%', duration: 1, stagger: 1 })

        secondaryTL
            .from(secondary, { drawSVG: '0% 100%', duration: 1, stagger: 1 })
            .to(secondary, { drawSVG: '100% 100%', duration: 1, stagger: 1 })

        return () => {
            primaryTL.clear()
            secondaryTL.clear()
        }
    })

    return (
        <Root ref={ rootRef }>
            <SVG
                style={{
                    background: 'transparent',
                    height: '100vh',
                    width: '100vw',
                }}
                viewBox='0 0 500 500'>
                <path
                    d='M 250 100 c -250 64, -300 100, -500 225 c -5 5, 0 5, 0 5'
                    style={{
                        fill: 'none',
                        stroke: toLCH(COLORS.RED),
                        strokeLinecap: 'round',
                        strokeWidth: 5,
                        transform:
                            'translate(250px, 250px) rotate(-1deg) translate(-245px, -250px)',
                    }} />
            </SVG>
            <SVG
                style={{
                    background: 'transparent',
                    height: '100vh',
                    width: '100vw',
                }}
                viewBox='0 0 500 500'>
                <path
                    d='M 250 100 c -250 64, -300 100, -500 225 c -5 5, 0 5, 0 5'
                    style={{
                        fill: 'none',
                        stroke: toLCH(COLORS.ORANGE),
                        strokeLinecap: 'round',
                        strokeWidth: 5,
                        transform:
                            'translate(250px, 250px) rotate(0deg) translate(-250px, -250px)',
                    }} />
            </SVG>
            <SVG
                style={{
                    background: 'transparent',
                    height: '100vh',
                    width: '100vw',
                }}
                viewBox='0 0 500 500'>
                <path
                    d='M 250 100 c -250 64, -300 100, -500 225 c -5 5, 0 5, 0 5'
                    style={{
                        fill: 'none',
                        stroke: toLCH(COLORS.YELLOW),
                        strokeLinecap: 'round',
                        strokeWidth: 5,
                        transform:
                            'translate(250px, 250px) rotate(2deg) translate(-255px, -250px)',
                    }} />
            </SVG>
            <SVG
                style={{
                    background: 'transparent',
                    height: '100vh',
                    width: '100vw',
                }}
                viewBox='0 0 500 500'>
                <path
                    d='M 250 100 c -250 64, -300 100, -500 225 c -5 5, 0 5, 0 5'
                    style={{
                        fill: 'none',
                        stroke: toLCH(COLORS.LIGHT_RED),
                        strokeLinecap: 'round',
                        strokeWidth: 5,
                        transform:
                            'translate(250px, 250px) rotate(1deg) translate(-255px, -250px)',
                    }} />
            </SVG>
            <SVG
                style={{
                    background: 'transparent',
                    height: '100vh',
                    width: '100vw',
                }}
                viewBox='0 0 500 500'>
                <path
                    d='M 250 100 c -250 64, -300 100, -500 225 c -5 5, 0 5, 0 5'
                    style={{
                        fill: 'none',
                        stroke: toLCH(COLORS.PINK),
                        strokeLinecap: 'round',
                        strokeWidth: 5,
                        transform:
                            'translate(250px, 250px) rotate(-2deg) translate(-245px, -250px)',
                    }} />
            </SVG>
        </Root>
    )
}
