import { config, useSpring } from 'react-spring'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { Image, Layer, Root, StoryWrapper } from './parallax-styles'
import { ReactElement, useEffect, useRef } from 'react'
import _ from 'lodash-es'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import png1 from 'assets/hobo-lobo/pg1pn1cp4.png'
import png2 from 'assets/hobo-lobo/pg1pn2cp4.png'
import png3 from 'assets/hobo-lobo/pg1pn3cp4.png'
import png4 from 'assets/hobo-lobo/pg1pn4cp3.png'
import png5 from 'assets/hobo-lobo/pg1pn5cp4.png'
import { thin } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useGesture } from 'react-use-gesture'

export function ParallaxSandboxRoute(): ReactElement {
  const wrapperRef = useRef<HTMLDivElement>(null)

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
