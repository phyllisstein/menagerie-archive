/* eslint-disable react/jsx-sort-props */

import { ReactElement, useEffect, useRef, useState } from 'react'
import { Scene, Stage } from 'app/components/stage'
import _ from 'lodash'
import { js } from 'app/styles/theme/palette'
import R from 'ramda'

const getSolid = R.pipe(
  _.partial(_.filter, _, (_value, key) => key.includes('500')),
  _.sample,
  c => c.alpha(0.66).css(),
)

const getJS = R.partial(getSolid, [js])

export function StageSandboxRoute (): ReactElement {
  const [step, setStep] = useState(1)
  const colorRef = useRef([getJS(), getJS(), getJS(), getJS()])

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
          style={{
            backgroundColor: colorRef.current[0],
            height: 750,
            width: 250,
          }}>
          250px [{ step }]
        </div>
      </Scene>
      <Scene translateX={ 500 } scale={ 2 }>
        <div
          style={{
            backgroundColor: colorRef.current[1],
            height: 125,
            width: 250,
          }}>
          500px + 2× [{ step }]
        </div>
      </Scene>
      <Scene translateZ={ -250 } rotate={ -45 }>
        <div
          style={{
            backgroundColor: colorRef.current[2],
            height: 375,
            width: 125,
          }}>
          -12rem × 2z [{ step }]
        </div>
      </Scene>
      <Scene rotateY={ 98 }>
        <div
          style={{
            backgroundColor: colorRef.current[3],
            height: 768,
            width: 1024,
          }}>
          98° [{ step }]
        </div>
      </Scene>
    </Stage>
  )
}
