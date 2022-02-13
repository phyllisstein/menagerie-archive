import { Children, FunctionComponent } from 'react'
import * as R from 'remeda'

import { Margin } from './margin'

export const Gloss: FunctionComponent = ({ children }) => {
  const { childEls, marginEl } = R.groupBy(Children.toArray(children), c =>
    c?.type === Margin ? 'marginEl' : 'childEls',
  )

  return (
    <>
      <div style={{ transform: 'translate3d(10%, 0, 0)' }}>{ childEls }</div>
      <div
        style={{ position: 'absolute', transform: 'translate3d(50%, 0, 0)' }}>
        { marginEl }
      </div>
    </>
  )
}
