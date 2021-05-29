import _ from 'lodash-es'
import { js } from 'app/styles/theme/palette'
import type { ReactElement } from 'react'

interface Props extends JSX.IntrinsicElements {
  transform: string[] | string
}

export function Repressed({ style, transform = '' }: Props): ReactElement {
  const backgroundColor = _.sample(js)?.alpha(0.33).css()
  const transforms = Array.isArray(transform)
    ? ['translate(-50%, -50%)', ...transform]
    : ['translate(-50%, -50%)', transform]

  return (
    <div
      style={{
        ...style,
        backgroundColor,
        position: 'absolute',
        transform: transforms.join(' '),
        transformOrigin: 'center',
        transformStyle: 'preserve-3d',
      }}>
      { transforms.join(' ') }
    </div>
  )
}
