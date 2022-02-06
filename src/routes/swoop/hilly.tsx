import { gsap, ScrollTrigger } from '@gsap/shockingly/all'
import { FunctionComponent, useEffect, useRef } from 'react'

import { Layer, Root } from './swoop-styles'

import PinkBack from 'assets/swoops/pink/back.svg'
import PinkFore from 'assets/swoops/pink/fore.svg'
import PinkGround from 'assets/swoops/pink/ground.svg'
import PinkMid from 'assets/swoops/pink/mid.svg'
import PurpleBack from 'assets/swoops/purple/back.svg'
import PurpleFore from 'assets/swoops/purple/fore.svg'
import PurpleGround from 'assets/swoops/purple/ground.svg'
import PurpleMid from 'assets/swoops/purple/mid.svg'

gsap.registerPlugin(ScrollTrigger)

export const Hilly: FunctionComponent = () => {
  const wrapperRef = useRef<HTMLDivElement>()
  const tl = useRef<gsap.core.Timeline>()

  useEffect(() => {
    const wrapper = wrapperRef.current

    if (!wrapper) return

    const localTL = (tl.current ??= gsap.timeline({
      scrollTrigger: {
        end: () => `+=${ 2 * window.innerWidth }`,
        pin: true,
        scrub: 1,
        start: 'center center',
        trigger: wrapper,
      },
    }))

    const layerStarts = [0, 0.5, 0.66, 0.8, 0.5, 0.66, 0.8]
    Array.from(wrapper.children).forEach((layer, index) => {
      localTL.fromTo(
        layer,
        {
          xPercent: layerStarts[index] * 100,
        },
        {
          xPercent: `+=${ layerStarts[index] * -100 }`,
        },
        '<',
      )
    })

    return () => {
      localTL.kill()
    }
  }, [])

  return (
    <Root ref={ wrapperRef }>
      <Layer>
        <PurpleGround
          height='100%'
          preserveAspectRatio='none'
          width={ window.innerWidth } />
      </Layer>
      <Layer>
        <PurpleBack
          height='100%'
          preserveAspectRatio='xMinYMin'
          width={ window.innerWidth } />
      </Layer>
      <Layer>
        <PurpleMid
          height='100%'
          preserveAspectRatio='xMinYMin'
          width={ window.innerWidth } />
      </Layer>
      <Layer>
        <PurpleFore
          height='100%'
          preserveAspectRatio='xMinYMin'
          width={ window.innerWidth } />
      </Layer>
      <Layer style={{ left: '-100%' }}>
        <PinkBack
          height='100%'
          preserveAspectRatio='xMinYMin'
          width={ window.innerWidth } />
      </Layer>
      <Layer style={{ left: '-100%' }}>
        <PinkMid
          height='100%'
          preserveAspectRatio='xMinYMin'
          width={ window.innerWidth } />
      </Layer>
      <Layer style={{ left: '-100%' }}>
        <PinkFore
          height='100%'
          preserveAspectRatio='xMinYMin'
          width={ window.innerWidth } />
      </Layer>
    </Root>
  )
}
