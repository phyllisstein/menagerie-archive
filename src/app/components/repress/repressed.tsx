import _ from 'lodash-es'
import { js } from 'app/styles/theme/palette'
import R from 'ramda'
import type { ReactElement } from 'react'

interface Props {
  transform: string[]
}

const getSolid = R.pipe(
  _.partial(_.filter, _, (_value, key) => key.includes('400')),
  _.sample,
  c => c.alpha(0.33).css(),
)

export function Repressed({ style, transform = [] }: Props): ReactElement {
  const backgroundColor = getSolid(js)
  const transforms = ['translate(-50%, -50%)', ...transform]

  return (
    <div
      style={{
        ...style,
        backgroundColor,
        backfaceVisibility: 'visible',
        position: 'absolute',
        transform: transforms.join(' '),
        transformOrigin: 'center',
        transformStyle: 'preserve-3d',
        top: '50%',
        left: '50%',
        padding: '25px',
        width: '500px',
        height: '500px',
      }}>
      { transforms.map((t, i) => (
        <span key={ i }>
          { t }
          <br />
        </span>
      )) }
    </div>
  )
}
