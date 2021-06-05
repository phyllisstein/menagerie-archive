import { Scene, Stage } from 'app/components'
import { useEffect, useState } from 'react'
import _ from 'lodash'
import { js } from 'app/styles/theme/palette'
import R from 'ramda'
import type { ReactElement } from 'react'

const getSolid = R.pipe(
  _.partial(_.filter, _, (_value, key) => key.includes('400')),
  _.sample,
  c => c.alpha(0.33).css(),
)

export function StageSandboxRoute(): ReactElement {
  const [step, setStep] = useState(1)
  const backgroundColor = getSolid(js)

  useEffect(() => {
    const t = setTimeout(() => {
      setStep(s => {
        if (s === 3) {
          return 0
        }

        return s + 1
      })
    }, 2500)

    return () => clearTimeout(t)
  })

  return (
    <Stage step={ step }>
      <Scene translateX='250px'>
        <div style={{ backgroundColor, height: '250px', width: '250px' }}>
          250px
        </div>
      </Scene>
      <Scene translateX='500px' scale='0.5'>
        <div style={{ backgroundColor, height: '250px', width: '250px' }}>
          500px + 2×
        </div>
      </Scene>
      <Scene translateX='-12rem' scaleX='2'>
        <div style={{ backgroundColor, height: '250px', width: '250px' }}>
          -12rem × 2z
        </div>
      </Scene>
      <Scene rotateY='98deg'>
        <div style={{ backgroundColor, height: '250px', width: '250px' }}>
          98°
        </div>
      </Scene>
    </Stage>
  )
}
