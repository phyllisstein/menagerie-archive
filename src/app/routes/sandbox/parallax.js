import png1 from 'assets/hobo-lobo/pg1pn1cp4.png'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { useEffect, useRef } from 'react'
import { useSpring } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import { Image, Layer, Root, StoryWrapper } from './parallax-styles'

export function ParallaxSandboxRoute () {
  const wrapperRef = useRef(null)

  const [springValue, animate] = useSpring(() => ({
    scroll: 0,
  }))

  useGesture(
    {
      onWheel: ({ direction: [dx], offset: [scroll] }) => {
        animate.start({
          scroll,
        })
      },
    },
    {
      domTarget: wrapperRef,
    },
  )

  useEffect(() => {
    const el = wrapperRef.current

    if (!el) return

    disableBodyScroll(el)

    return () => enableBodyScroll(el)
  }, [wrapperRef])

  return (
    <Root>
      <StoryWrapper ref={ wrapperRef }>
        <Layer
          $depth={ 1 }
          style={{
            x: springValue.scroll,
          }}>
          <Image src={ png1 } />
        </Layer>
      </StoryWrapper>
    </Root>
  )
}
