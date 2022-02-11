import { gsap, ScrollTrigger } from '@gsap/shockingly/all'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
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

    disableBodyScroll(wrapper)

    return () => {
      enableBodyScroll(wrapper)
    }
  }, [])

  return (
    <div ref={ wrapperRef }>
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
    </div>
  )
}
