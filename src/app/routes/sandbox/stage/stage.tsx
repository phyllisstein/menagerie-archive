import { Scene, Stage } from 'app/components'
import { js } from 'app/styles/theme/palette'
import _ from 'lodash'
import R from 'ramda'
import { ReactElement, useEffect, useState } from 'react'

const getSolid = R.pipe(
  _.partial(_.filter, _, (_value, key) => key.includes('500')),
  _.sample,
  c => c.alpha(0.5).css(),
)

const getJS = R.partial(getSolid, [js])

export function StageSandboxRoute (): ReactElement {
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
    }, 5000)

    return () => clearTimeout(t)
  })

  return (
    <Stage step={ step }>
      <Scene translateX={ 250 }>
        <div
          style={{ backgroundColor: getJS(), height: '250px', width: '250px' }}>
          250px [{ step }]
        </div>
      </Scene>
      <Scene translateX={ 500 } scale={ 2 }>
        <div
          style={{ backgroundColor: getJS(), height: '250px', width: '250px' }}>
          500px + 2× [{ step }]
        </div>
      </Scene>
      <Scene translateZ={ -250 } rotate={ -45 }>
        <div
          style={{ backgroundColor: getJS(), height: '250px', width: '250px' }}>
          -12rem × 2z [{ step }]
        </div>
      </Scene>
      <Scene rotateY={ 98 }>
        <div
          style={{ backgroundColor: getJS(), height: '250px', width: '250px' }}>
          98° [{ step }]
        </div>
      </Scene>
    </Stage>
  )
}
