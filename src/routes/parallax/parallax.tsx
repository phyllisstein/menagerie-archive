import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { useMotionValue, useTransform } from 'framer-motion'
import { ReactElement, useEffect, useRef } from 'react'
import { useGesture } from 'react-use-gesture'

import { Layer, Root, StoryWrapper } from './parallax-styles'

import wcBlack from 'assets/watercolors/black.png'
import wcBlue from 'assets/watercolors/blue.png'
import wcGreen from 'assets/watercolors/green.png'
import wcPurple from 'assets/watercolors/purple.png'
import wcRed from 'assets/watercolors/red.png'
import wcYellow from 'assets/watercolors/yellow.png'

export function Parallax (): ReactElement {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const mainLayer = useMotionValue(0)
  const backThreeLayer = useTransform(mainLayer, x => `${ x * 0 }%`)
  const backTwoLayer = useTransform(mainLayer, x => `${ x * 100 * 1.2 }%`)
  const backOneLayer = useTransform(mainLayer, x => `${ x * 100 * 1.44 }%`)
  const frontOneLayer = useTransform(mainLayer, x => `${ x * 100 * 1.728 }%`)
  const frontTwoLayer = useTransform(mainLayer, x => `${ x * 100 * 2.0736 }%`)
  const frontThreeLayer = useTransform(mainLayer, x => `${ x * 100 * 2.48832 }%`)

  useGesture(
    {
      onWheel: ({ direction: [dx], offset: [scroll] }) => {
        mainLayer.set(scroll / window.innerWidth)
      },
    },
    {
      domTarget: wrapperRef,
    },
  )

  useEffect(() => {
    const wrapper = wrapperRef.current

    if (wrapper == null) return

    disableBodyScroll(wrapper)

    return () => enableBodyScroll(wrapper)
  })

  return (
    <Root>
      <StoryWrapper ref={ wrapperRef }>
        <Layer
          className='backThreeLayer'
          depth={ 3 }
          style={{
            x: backThreeLayer,
          }}>
          <img src={ wcPurple } />
        </Layer>
        <Layer
          className='backTwoLayer'
          depth={ 2 }
          style={{
            x: backTwoLayer,
          }}>
          <img src={ wcGreen } />
        </Layer>
        <Layer
          className='backOneLayer'
          depth={ 1 }
          style={{
            x: backOneLayer,
          }}>
          <img src={ wcBlue } />
        </Layer>
        <Layer
          className='frontOneLayer'
          depth={ 4 }
          style={{
            x: frontOneLayer,
          }}>
          <img src={ wcRed } />
        </Layer>
        <Layer
          className='frontTwoLayer'
          depth={ 5 }
          style={{
            x: frontTwoLayer,
          }}>
          <img src={ wcYellow } />
        </Layer>
        <Layer
          className='frontThreeLayer'
          depth={ 6 }
          style={{
            x: frontThreeLayer,
          }}>
          <img src={ wcBlack } />
        </Layer>
      </StoryWrapper>
    </Root>
  )
}
