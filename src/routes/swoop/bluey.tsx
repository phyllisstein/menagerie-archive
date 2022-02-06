import { useGesture } from '@use-gesture/react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { animate, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { FunctionComponent, useEffect, useRef } from 'react'

import { Layer, Root } from './swoop-styles'

import Back from 'assets/swoops/pink-purple/back.svg'
import Fore from 'assets/swoops/pink-purple/fore.svg'
import Ground from 'assets/swoops/pink-purple/ground.svg'
import Mid from 'assets/swoops/pink-purple/mid.svg'

export const Bluey: FunctionComponent = () => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const midSwoopScroll = useMotionValue(0)
  const groundSwoopScroll = useTransform(midSwoopScroll, x => x * 0.48)
  const backSwoopScroll = useTransform(midSwoopScroll, x => x * 0.69)
  const foreSwoopScroll = useTransform(midSwoopScroll, x => x * 1.2)

  const totalWidth = window.innerWidth * 1.44
  const halfWidth = totalWidth / 2

  useGesture(
    {
      onWheel: ({ direction: [dx], offset: [scroll] }) => {
        animate(midSwoopScroll, scroll, {
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

    console.log({ wrapper })

    if (wrapper == null) return

    disableBodyScroll(wrapper)

    return () => enableBodyScroll(wrapper)
  }, [wrapperRef.current])

  return (
    <Root ref={ wrapperRef } className='hilly'>
      <svg
        viewBox='0 0 321.1 184.8'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'>
        <defs>
          <clipPath
            id='b79654d2-8762-44af-88be-966d2d7e2902'
            transform='translate(99.4 40.3)'>
            <rect height='73.14' style={{ fill: 'none' }} width='192.4' />
          </clipPath>
          <linearGradient
            gradientUnits='userSpaceOnUse'
            id='fb5ef0dd-9508-41c8-8c96-35fae3e30fb4'
            x1='210.86'
            x2='183'
            y1='30.8'
            y2='114.97'>
            <stop offset='0' stopColor='#00ffd9' />
            <stop offset='1' stopColor='#64009e' />
          </linearGradient>
          <radialGradient
            cx='224.92'
            cy='-19.94'
            gradientUnits='userSpaceOnUse'
            id='be77b89e-5285-4848-91ac-c86b65c4423f'
            r='134.21'>
            <stop offset='0' stopColor='#fff' />
            <stop offset='0.53' stopColor='#00ffd9' />
            <stop offset='1' stopColor='#64009e' />
          </radialGradient>
          <linearGradient
            gradientTransform='matrix(-0.76, -0.65, 0.65, -0.76, -3630.82, -860.57)'
            id='aef970b3-3bb8-4704-b967-f4b3259fe3ae'
            x1='-3505.81'
            x2='-3385.33'
            xlinkHref='#be77b89e-5285-4848-91ac-c86b65c4423f'
            y1='1702.29'
            y2='1702.29' />
          <linearGradient
            gradientTransform='translate(-1957.9 -116.9) rotate(-4.8)'
            id='b156967f-abb2-420e-9146-55d8c6be6384'
            x1='1962.08'
            x2='2092.61'
            xlinkHref='#be77b89e-5285-4848-91ac-c86b65c4423f'
            y1='331.47'
            y2='331.47' />
          <radialGradient
            cx='-2895.32'
            cy='427.28'
            gradientTransform='translate(-2998 551.4) rotate(180)'
            id='f0b5affa-039d-400c-a7b6-2cb64b26c2e8'
            r='134.2'
            xlinkHref='#be77b89e-5285-4848-91ac-c86b65c4423f' />
          <linearGradient
            gradientTransform='matrix(0.76, 0.65, -0.65, 0.76, 632.79, 1411.92)'
            id='f16e834d-70fa-42ff-9784-c7df26609285'
            x1='-1409.84'
            x2='-1289.36'
            xlinkHref='#be77b89e-5285-4848-91ac-c86b65c4423f'
            y1='-651.97'
            y2='-651.97' />
          <linearGradient
            gradientTransform='translate(-1040.1 668.2) rotate(175.2)'
            id='bdadf8d2-7c65-4a55-b13e-f58f8947982a'
            x1='-1184.89'
            x2='-1054.35'
            xlinkHref='#be77b89e-5285-4848-91ac-c86b65c4423f'
            y1='514.06'
            y2='514.06' />
        </defs>
        <g style={{ isolation: 'isolate' }}>
          <g data-name='Layer 1' id='bb3c2f2f-d5e4-42ef-929f-938c0eb35b9b'>
            <g
              style={{
                clipPath: 'url(#b79654d2-8762-44af-88be-966d2d7e2902)',
              }}>
              <rect
                height='73.14'
                style={{
                  fill: 'url(#fb5ef0dd-9508-41c8-8c96-35fae3e30fb4)',
                }}
                width='192.4'
                x='99.4'
                y='40.3' />
              <g style={{ mixBlendMode: 'multiply' }}>
                <path
                  d='M152.6,67.6a70.5,70.5,0,0,1-27.7-5.7,70.6,70.6,0,0,1-38-39.7,15,15,0,0,1,28.2-10.5,39.5,39.5,0,0,0,21.7,22.6,38.6,38.6,0,0,0,30.9.2,39.1,39.1,0,0,0,21.2-22.3,39.5,39.5,0,0,0-1.1-31.1,15.1,15.1,0,0,1,7.2-20,15.1,15.1,0,0,1,20,7.2,69.5,69.5,0,0,1,2,54.6,69.8,69.8,0,0,1-37.5,39.2A67.4,67.4,0,0,1,152.6,67.6Z'
                  style={{
                    fill: 'url(#be77b89e-5285-4848-91ac-c86b65c4423f)',
                  }}
                  transform='translate(99.4 40.3)' />
              </g>
              <path
                d='M132,25a62.4,62.4,0,0,1,18.5,68.5,13.3,13.3,0,0,1-25.1-9,35,35,0,0,0-1.7-27.8A34.5,34.5,0,0,0,75.6,41.8,35.1,35.1,0,0,0,58.5,63.5a13.3,13.3,0,1,1-25.7-6.8A61,61,0,0,1,62.7,18.5a61.8,61.8,0,0,1,47.9-5.2A60.5,60.5,0,0,1,132,25Z'
                style={{
                  fill: 'url(#aef970b3-3bb8-4704-b967-f4b3259fe3ae)',
                }}
                transform='translate(99.4 40.3)' />
              <path
                d='M155.1,58.8a7,7,0,0,1,1.9,2.8,6.6,6.6,0,0,1-4,8.4c-38.6,13.7-63.5,13.9-76.4.6-8.2-8.5-9.1-20.2-9.8-30.5S65.3,23.7,61.1,21s-15.4-1.4-28.7,5.5a6.6,6.6,0,0,1-8.9-2.7,6.7,6.7,0,0,1,2.8-8.9C44.8,5.2,58.5,3.6,68.2,10S79.1,28.5,79.9,39.1c.6,8.9,1.2,17.3,6.2,22.4,8.6,8.9,30.2,7.6,62.5-3.9A6.6,6.6,0,0,1,155.1,58.8Z'
                style={{
                  fill: 'url(#b156967f-abb2-420e-9146-55d8c6be6384)',
                }}
                transform='translate(99.4 40.3)' />
              <g style={{ mixBlendMode: 'multiply' }}>
                <path
                  d='M-30.4,36.5A70.1,70.1,0,0,1-2.7,42.2,70.4,70.4,0,0,1,35.3,82,15,15,0,0,1,7.1,92.5,39.4,39.4,0,0,0-14.6,69.8a39,39,0,0,0-30.9-.2A39.1,39.1,0,0,0-66.7,91.9,39.5,39.5,0,0,0-65.6,123a15.1,15.1,0,0,1-7.2,20,15.1,15.1,0,0,1-20-7.2,69.5,69.5,0,0,1-2-54.6A70.1,70.1,0,0,1-57.3,42,69.2,69.2,0,0,1-30.4,36.5Z'
                  style={{
                    fill: 'url(#f0b5affa-039d-400c-a7b6-2cb64b26c2e8)',
                  }}
                  transform='translate(99.4 40.3)' />
              </g>
              <path
                d='M-9.8,79.1A62.3,62.3,0,0,1-28.3,10.7a13.3,13.3,0,0,1,17-8.1A13.3,13.3,0,0,1-3.2,19.7,35,35,0,0,0-1.5,47.5,34.6,34.6,0,0,0,46.6,62.3,35.1,35.1,0,0,0,63.7,40.6,13.4,13.4,0,0,1,80,31.1a13.5,13.5,0,0,1,9.5,16.4,62.1,62.1,0,0,1-30,38.2,61.7,61.7,0,0,1-47.9,5.1A60.5,60.5,0,0,1-9.8,79.1Z'
                style={{
                  fill: 'url(#f16e834d-70fa-42ff-9784-c7df26609285)',
                }}
                transform='translate(99.4 40.3)' />
              <path
                d='M-32.8,45.3a5.8,5.8,0,0,1-2-2.8,6.6,6.6,0,0,1,4-8.4c38.6-13.6,63.6-13.8,76.4-.6,8.3,8.6,9.1,20.2,9.8,30.5s1.5,16.4,5.8,19.2,15.3,1.4,28.6-5.6a6.6,6.6,0,0,1,8.9,2.8,6.5,6.5,0,0,1-2.8,8.8c-18.5,9.7-32.2,11.3-41.9,5S43.1,75.6,42.3,65c-.6-8.9-1.2-17.2-6.2-22.4-8.6-8.9-30.2-7.5-62.5,3.9A6.4,6.4,0,0,1-32.8,45.3Z'
                style={{
                  fill: 'url(#bdadf8d2-7c65-4a55-b13e-f58f8947982a)',
                }}
                transform='translate(99.4 40.3)' />
            </g>
          </g>
        </g>
      </svg>
    </Root>
  )
}
