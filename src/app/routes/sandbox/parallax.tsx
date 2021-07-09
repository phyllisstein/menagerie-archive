import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { Layer, Root, StoryWrapper } from './parallax-styles'
import { ReactElement, useEffect, useRef } from 'react'
import { useMotionValue, useTransform } from 'framer-motion'
import { useGesture } from 'react-use-gesture'
import wcBlack from 'assets/watercolors/black.png'
import wcBlue from 'assets/watercolors/blue.png'
import wcGreen from 'assets/watercolors/green.png'
import wcPurple from 'assets/watercolors/purple.png'
import wcRed from 'assets/watercolors/red.png'
import wcYellow from 'assets/watercolors/yellow.png'

export function ParallaxSandboxRoute (): ReactElement {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const mainLayer = useMotionValue(0)
  const backThreeLayer = useTransform(mainLayer, x => x * -1.44)
  const backTwoLayer = useTransform(mainLayer, x => x * -1.2)
  const backOneLayer = useTransform(mainLayer, x => x * -0.5)
  const frontOneLayer = useTransform(mainLayer, x => x * 0.5)
  const frontTwoLayer = useTransform(mainLayer, x => x * 1.2)
  const frontThreeLayer = useTransform(mainLayer, x => x * 1.44)

  useGesture(
    {
      onWheel: ({ direction: [dx], offset: [scroll] }) => {
        mainLayer.set(scroll)
      },
    },
    {
      domTarget: wrapperRef,
    },
  )

  useEffect(() => {
    const wrapper = wrapperRef.current

    if (wrapper == null) return

    enableBodyScroll(wrapper)

    return () => disableBodyScroll(wrapper)
  })

  return (
    <Root>
      <StoryWrapper ref={ wrapperRef }>
        <Layer
          $depth={ 3 }
          className='backThreeLayer'
          style={{
            x: backThreeLayer,
          }}>
          <img src={ wcPurple } />
        </Layer>
        <Layer
          $depth={ 2 }
          className='backTwoLayer'
          style={{
            x: backTwoLayer,
          }}>
          <img src={ wcGreen } />
        </Layer>
        <Layer
          $depth={ 1 }
          className='backOneLayer'
          style={{
            x: backOneLayer,
          }}>
          <img src={ wcBlue } />
        </Layer>
        <Layer
          $depth={ 4 }
          className='frontOneLayer'
          style={{
            x: frontOneLayer,
          }}>
          <img src={ wcRed } />
        </Layer>
        <Layer
          $depth={ 5 }
          className='frontTwoLayer'
          style={{
            x: frontTwoLayer,
          }}>
          <img src={ wcYellow } />
        </Layer>
        <Layer
          $depth={ 6 }
          className='frontThreeLayer'
          style={{
            x: frontThreeLayer,
          }}>
          <img src={ wcBlack } />
        </Layer>
      </StoryWrapper>
    </Root>
  )
}
