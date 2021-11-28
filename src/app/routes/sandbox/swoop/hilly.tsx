import { gsap } from 'gsap'
import { FunctionComponent, useEffect, useRef } from 'react'

import { Layer, Root } from './swoop-styles'

import Back from 'assets/swoops/pink-purple/back.svg'
import Fore from 'assets/swoops/pink-purple/fore.svg'
import Ground from 'assets/swoops/pink-purple/ground.svg'
import Mid from 'assets/swoops/pink-purple/mid.svg'

export const Hilly: FunctionComponent = () => {
  const wrapperRef = useRef<HTMLDivElement>()
  const tl = useRef<gsap.core.Timeline>()

  useEffect(() => {
    const wrapper = wrapperRef.current
    const localTL = tl.current ??= gsap.timeline({
      scrollTrigger: {
        end: () => `+=${ window.innerWidth }`,
        pin: true,
        scrub: 1,
        start: 'center center',
        trigger: wrapper,
      },
    })

    if (wrapper) {
      Array.from(wrapper.children).forEach((layer, index) => {
        localTL.to(layer, {
          xPercent: `+=${ index * 20 }`,
        }, '<')
      })
    }

    return () => {
      localTL.kill()
    }
  })

  return (
    <div style={{ height: '100vh', position: 'relative', width: '100vw' }}>
      <Root ref={ wrapperRef } className='hilly'>
        <Layer>
          <Ground
            height='100%'
            preserveAspectRatio='none'
            width={ 10 * window.innerWidth / 2 } />
        </Layer>
        <Layer>
          <Back
            height='100%'
            preserveAspectRatio='xMinYMin'
            style={{ transform: 'translateX(-10%)' }}
            width={ 3 * window.innerWidth / 2 } />
        </Layer>
        <Layer>
          <Mid
            height='100%'
            preserveAspectRatio='xMinYMin'
            width={ 3 * window.innerWidth / 2 } />
        </Layer>
        <Layer>
          <Fore
            height='100%'
            preserveAspectRatio='xMinYMin'
            style={{ transform: 'translateX(10%)' }}
            width={ 3 * window.innerWidth / 2 } />
        </Layer>
      </Root>
    </div>
  )
}
