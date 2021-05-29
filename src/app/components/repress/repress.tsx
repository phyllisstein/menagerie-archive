import type { FunctionComponentElement, ReactElement, ReactNode } from 'react'
import _ from 'lodash-es'
import { Body } from './repress-styles'
import { js } from 'app/styles/theme/palette'
import type { Repressed } from './repressed'

interface Props extends JSX.IntrinsicElements {
  children: Array<FunctionComponentElement<typeof Repressed>>
}

export function Repress({ children, style }: Props): ReactElement {
  const backgroundColor = _.sample(js)?.alpha(0.1).css()

  return (
    <>
      <div
        style={{
          ...style,
          backgroundColor,
          left: '50%',
          perspective: 1000,
          position: 'absolute',
          // transformOrigin: 'top left',
          // transform: 'translate(-50%, -50%)',
          transformOrigin: 'center',
          transformStyle: 'preserve-3d',
          top: '50%',
          willChange: 'transform',
        }}>
        { children }
      </div>
    </>
  )
}
