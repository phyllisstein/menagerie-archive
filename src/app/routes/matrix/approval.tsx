/* eslint-disable react/jsx-sort-props */

import { Entry, Grid, Image, Line } from './approval-styles'
import { ReactElement, useEffect, useState } from 'react'
import { Scene, Stage } from 'app/components'
import madge from 'assets/matrix/madge.png'
import Madge from 'assets/matrix/madge.svg'
import Malcolm from 'assets/matrix/MalcolmGladwell.svg'
import malcolmGladwell from 'assets/matrix/MalcolmGladwell.png'

export function ApprovalRoute (): ReactElement {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => {
      setStep(s => {
        if (s === 4) {
          return 0
        }

        return s + 1
      })
    }, 5000)

    return () => clearTimeout(t)
  })

  return (
    <>
      <Stage step={ step } perspective={ 1000 }>
        <Scene layout scale={ 2 }>
          <Grid>
            <Line $axis='x' />
            <Line $axis='y' />
          </Grid>
        </Scene>
        <Scene translateX={ -512 }>
          <Entry>
            <Entry.Text>
              <strong>Ponchos.</strong>
            </Entry.Text>
          </Entry>
        </Scene>
        <Scene translateX={ -128 } translateY={ -256 }>
          <Entry>
            <Entry.Text>
              <strong>Madonna</strong>, Oxford student.
            </Entry.Text>
            <Image
              src={ madge }
              style={{ clipPath: "url('#madge_svg__madge')" }} />
            <Madge />
          </Entry>
        </Scene>
        <Scene translateX={ -128 } translateY={ -512 } scale={ 0.5 }>
          <Entry style={{ minWidth: 256 }}>
            <Entry.Text>
              <strong>PBS Broadway-musical documentary:</strong> Noble but
              misbegotten—and too many of the talking heads are dead.
            </Entry.Text>
          </Entry>
        </Scene>
        <Scene translateX={ -512 } translateY={ -256 }>
          <Entry>
            <Entry.Text>
              <strong>
                <em>Tipping Point</em> author Malcolm Gladwell's
              </strong>
              hair ignites: Geek schadenfreude erupts.
            </Entry.Text>
            <Image
              src={ malcolmGladwell }
              style={{ clipPath: "url('#MalcolmGladwell_svg__gladwell')" }} />
            <Malcolm />
          </Entry>
        </Scene>
      </Stage>
    </>
  )
}
