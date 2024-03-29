import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { useMotionValue, useTransform } from 'framer-motion'
import { FunctionComponent, useEffect, useRef } from 'react'
import { useGesture } from 'react-use-gesture'

import { Layer, Root, StoryWrapper } from './layered-styles'

import Background from 'assets/sunny/background.svg'
import Green from 'assets/sunny/green.svg'
import Orange from 'assets/sunny/orange.svg'
import Sun from 'assets/sunny/sun.svg'
import Yellow from 'assets/sunny/yellow.svg'

export const Layered: FunctionComponent = () => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const mainLayer = useMotionValue(0)
  const backOneLayer = useTransform(mainLayer, x => `${ x * 1.44 }%`)
  const backTwoLayer = useTransform(mainLayer, x => `${ x }%`)
  const backThreeLayer = useTransform(mainLayer, x => `${ x * 0.5 }%`)

  useGesture(
    {
      onWheel: ({ direction: [dx], offset: [scroll] }) => {
        mainLayer.set(scroll / (window.innerWidth * 2) * 100)
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
        { /* <Layer>
          <Background />
        </Layer> */ }
        <Layer style={{ x: backThreeLayer }}>
          <Yellow
            preserveAspectRatio='none'
            style={{ height: '100vh', width: '300vw' }} />
        </Layer>
        <Layer style={{ x: backTwoLayer }}>
          <Orange
            preserveAspectRatio='none'
            style={{ height: '100vh', width: '300vw' }} />
        </Layer>
        <Layer style={{ x: backOneLayer }}>
          <Green
            preserveAspectRatio='none'
            style={{ height: '100vh', width: '300vw' }} />
        </Layer>
      </StoryWrapper>
    </Root>
  )
}
