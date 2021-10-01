/* eslint-disable react/jsx-sort-props */

import { Entry, Grid, Image, Label, Line } from './approval-styles'
import { ReactElement, useCallback, useState } from 'react'
import { Scene, Stage } from 'app/components'
import dylan from 'assets/matrix/dylan.jpg'
import ghostling from 'assets/matrix/ghostling.png'
import { Helmet } from 'react-helmet-async'
import madge from 'assets/matrix/madge.png'
import Madge from 'assets/matrix/madge.svg'
import Malcolm from 'assets/matrix/MalcolmGladwell.svg'
import malcolmGladwell from 'assets/matrix/MalcolmGladwell.png'
import trucker from 'assets/matrix/trucker.png'
import twenty from 'assets/matrix/twenty.jpg'

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
      <Helmet>
        <title>The Approval Matrix</title>
      </Helmet>
      <Stage height={ 1024 } step={ step } width={ 1024 }>
        <Scene layout>
          <Grid>
            <Line $axis='x' />
            <Line $axis='y' />
          </Grid>
        </Scene>
        <Scene layout translateY={ -1000 }>
          <Label>
            Highbrow
          </Label>
        </Scene>
        <Scene layout translateY={ 1000 }>
          <Label>
            Lowbrow
          </Label>
        </Scene>
        <Scene layout translateX={ 1200 } rotate={ 90 }>
          <Label>
            Brilliant
          </Label>
        </Scene>
        <Scene layout translateX={ -1200 } rotate={ -90 }>
          <Label>
            Despicable
          </Label>
        </Scene>
        <Scene translateZ={ 2048 } />
        <Scene translateX={ -512 } translateY={ -25 } onClick={ toggleCurrentStep(1) }>
          <Entry>
            <Entry.Text>
              <strong>Ponchos.</strong>
            </Entry.Text>
          </Entry>
        </Scene>
        <Scene
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
          scale={ 1.5 }
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
          translateY={ -512 }
          onClick={ toggleCurrentStep(4) }>
          <Entry>
            <Entry.Text>
              <strong>
                <em>Tipping Point</em> author Malcolm Gladwell's
              </strong>{ ' ' }
              hair ignites: Geek schadenfreude erupts.
            </Entry.Text>
            <Image src={ malcolmGladwell } />
            <Malcolm />
          </Entry>
        </Scene>
        <Scene
          translateX={ -960 }
          translateY={ -128 }
          scale={ 1.25 }
          onClick={ toggleCurrentStep(5) }>
          <Entry>
            <Entry.Text>
              <strong>Tucker Carlson:</strong> His smugness boomerangs.
            </Entry.Text>
          </Entry>
        </Scene>
        <Scene
          translateX={ -128 }
          translateY={ -768 }
          scale={ 1.25 }
          onClick={ toggleCurrentStep(6) }>
          <Entry>
            <Entry.Text>
              <strong>MoMA</strong> charges $20.
              <Image src={ twenty } />
            </Entry.Text>
          </Entry>
        </Scene>
        <Scene
          scale={ 1.25 }
          translateY={ -512 }
          translateX={ 128 }
          translateZ={ -512 }
          onClick={ toggleCurrentStep(7) }>
          <Entry>
            <Entry.Text>
              <strong>Bob Dylan</strong> bio. Poignant! Idiosyncratic! And full
              of New York trivia.
              <Image src={ dylan } />
            </Entry.Text>
          </Entry>
        </Scene>
        <Scene
          translateY={ 512 }
          translateX={ -1024 }
          scale={ 2 }
          onClick={ toggleCurrentStep(8) }>
          <Entry>
            <Entry.Text>
              <strong>Quickie marriages.</strong>
              <Image src={ trucker } />
            </Entry.Text>
          </Entry>
        </Scene>
        <Scene
          translateY={ 512 }
          translateX={ -256 }
          scale={ 2 }
          onClick={ toggleCurrentStep(9) }>
          <Entry>
            <Entry.Text>
              <strong>Surviving Christmas:</strong> a Yuletide <em>Gigli</em>?
            </Entry.Text>
          </Entry>
        </Scene>
        <Scene
          translateY={ 256 }
          translateX={ 128 }
          onClick={ toggleCurrentStep(10) }>
          <Entry>
            <Entry.Text>
              <strong>Halloween Parade:</strong> People think it's gross and
              tacky. (It's still fun.)
              <Image src={ ghostling } style={{ maxHeight: 256 }} />
            </Entry.Text>
          </Entry>
        </Scene>
      </Stage>
    </>
  )
}
