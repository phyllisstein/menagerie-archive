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
    tl.current ??= gsap.timeline({
      scrollTrigger: {
        horizontal: true,
        scroller: wrapperRef.current,
        trigger: wrapperRef.current,
      },
    })

    Array.from(wrapperRef?.current?.children).forEach((child, index) => {
      tl.current.to(child, {
        scrollTrigger: wrapperRef.current,
        x: `+${ (index * 20) }`,
      })
    })
  })

  return (
    <div style={{ height: '100%', overflow: 'hidden', position: 'relative', width: '100%' }}>
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
            width={ 3 * window.innerWidth / 2 } />
        </Layer>
      </Root>
    </div>
  )
}
