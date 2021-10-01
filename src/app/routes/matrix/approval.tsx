/* eslint-disable react/jsx-sort-props */

import { Entry, Grid, Image, Line } from './approval-styles'
import { ReactElement, useCallback, useState } from 'react'
import { Scene, Stage } from 'app/components'
import madge from 'assets/matrix/madge.png'
import Madge from 'assets/matrix/madge.svg'
import Malcolm from 'assets/matrix/MalcolmGladwell.svg'
import malcolmGladwell from 'assets/matrix/MalcolmGladwell.png'
import R from 'ramda'

export function ApprovalRoute (): ReactElement {
  const [step, setStep] = useState(0)

  const toggleCurrentStep = useCallback(
    clickableStep => {
      return () => {
        if (clickableStep === step) {
          setStep(0)
          return
        }

        setStep(clickableStep)
      }
    },
    [step],
  )

  return (
    <>
      <Stage step={ step } perspective={ 1000 }>
        <Scene layout scale={ 2 }>
          <Grid>
            <Line $axis='x' />
            <Line $axis='y' />
          </Grid>
        </Scene>
        <Scene scale={ 2 } />
        <Scene translateX={ -512 } onClick={ toggleCurrentStep(1) }>
          <Entry>
            <Entry.Text>
              <strong>Ponchos.</strong>
            </Entry.Text>
          </Entry>
        </Scene>
        <Scene
          style={{ pointerEvents: 'none' }}
          translateX={ -128 }
          translateY={ -256 }
          onClick={ toggleCurrentStep(2) }>
          <Entry>
            <Entry.Text>
              <strong>Madonna</strong>, Oxford student.
            </Entry.Text>
            <Image src={ madge } style={{ clipPath: "url('#madge')" }} />
            <Madge />
          </Entry>
        </Scene>
        <Scene
          translateX={ -128 }
          translateY={ -512 }
          scale={ 0.5 }
          onClick={ toggleCurrentStep(3) }>
          <Entry style={{ minWidth: 256 }}>
            <Entry.Text>
              <strong>PBS Broadway-musical documentary:</strong> Noble but
              misbegotten—and too many of the talking heads are dead.
            </Entry.Text>
          </Entry>
        </Scene>
        <Scene
          translateX={ -512 }
          translateY={ -256 }
          onClick={ toggleCurrentStep(4) }>
          <Entry>
            <Entry.Text>
              <strong>
                <em>Tipping Point</em> author Malcolm Gladwell's
              </strong>
              hair ignites: Geek schadenfreude erupts.
            </Entry.Text>
            <Image
              src={ malcolmGladwell }
              style={{ clipPath: "url('#gladwell')" }} />
            <Malcolm />
          </Entry>
        </Scene>
      </Stage>
    </>
  )
}
