import { animate, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { FunctionComponent, useEffect, useRef } from 'react'
import { Layer, Root } from './swoop-styles'
import Back from 'assets/swoops/pink-purple/back.svg'
import Fore from 'assets/swoops/pink-purple/fore.svg'
import Ground from 'assets/swoops/pink-purple/ground.svg'
import Mid from 'assets/swoops/pink-purple/mid.svg'
import { useGesture } from '@use-gesture/react'

export const Hilly: FunctionComponent = () => {
  const wrapperRef = useRef<HTMLDivElement>({})

  const midSwoopScroll = useMotionValue(0)
  const groundSwoopScroll = useTransform(midSwoopScroll, x => x * 0.48)
  const backSwoopScroll = useTransform(midSwoopScroll, x => x * 0.69)
  const foreSwoopScroll = useTransform(midSwoopScroll, x => x * 1.2)

  const totalWidth = window.innerWidth * 1.44
  const halfWidth = totalWidth / 2

  useGesture(
    {
      onWheel: ({ direction: [dx], offset: [scroll] }) => {
        animate(midSwoopScroll, scroll * -1, {
          damping: 10, // 10
          mass: 0.75, // 1
          stiffness: 75, // 100
          type: 'spring',
        })
      },
    },
    {
      target: wrapperRef,
      wheel: {
        bounds: {
          left: -window.innerWidth / 2.5,
          right: window.innerWidth / 2.5,
        },
      },
    },
  )

  useEffect(() => {
    const wrapper = wrapperRef.current

    if (wrapper == null) return

    disableBodyScroll(wrapper)

    return () => enableBodyScroll(wrapper)
  }, [wrapperRef.current])

  return (
    <Root ref={ wrapperRef } className='hilly'>
      <Layer style={{ x: groundSwoopScroll, y: '-50%' }}>
        <Ground
          height='100%'
          preserveAspectRatio='none'
          width={ 3 * totalWidth } />
      </Layer>
      <Layer style={{ x: backSwoopScroll, y: '-50%' }}>
        <Back
          height='100%'
          preserveAspectRatio='xMinYMin'
          width={ 3 * totalWidth } />
      </Layer>
      <Layer style={{ x: midSwoopScroll, y: '-50%' }}>
        <Mid
          height='100%'
          preserveAspectRatio='xMinYMin'
          width={ 3 * totalWidth } />
      </Layer>
      <Layer style={{ x: foreSwoopScroll, y: '-50%' }}>
        <Fore
          height='100%'
          preserveAspectRatio='xMinYMin'
          width={ 3 * totalWidth } />
      </Layer>
    </Root>
  )
}
