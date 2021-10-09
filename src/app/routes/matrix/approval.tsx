/* eslint-disable react/jsx-sort-props */

import { Entry, Grid, Image, Label, Line, PulsingIcon } from './approval-styles'
import { ReactElement, useCallback, useState } from 'react'
import { Scene, Stage } from 'app/components'
import { css } from 'app/styles/theme/palette'
import { duotone } from '@fortawesome/fontawesome-svg-core/import.macro'
import dylan from 'assets/matrix/dylan.jpg'
import ghostling from 'assets/matrix/ghostling.png'
import gta from 'assets/matrix/gtasa.jpg'
import { Helmet } from 'react-helmet-async'
import madge from 'assets/matrix/madge.png'
import Madge from 'assets/matrix/madge.svg'
import malcolmGladwell from 'assets/matrix/MalcolmGladwell.png'
import trucker from 'assets/matrix/trucker.png'
import twenty from 'assets/matrix/twenty.jpg'
import washington from 'assets/matrix/washington.jpg'

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
      <Stage step={ step }>
        <Scene layout>
          <Grid>
            <Line $axis='x' />
            <Line $axis='y' />
          </Grid>
        </Scene>
        <Scene layout translateY={ -1536 }>
          <Label>Highbrow</Label>
        </Scene>
        <Scene layout translateY={ 1536 }>
          <Label>Lowbrow</Label>
        </Scene>
        <Scene layout translateX={ 1920 } rotate={ 90 }>
          <Label>Brilliant</Label>
        </Scene>
        <Scene layout translateX={ -1920 } rotate={ -90 }>
          <Label>Despicable</Label>
        </Scene>
        <Scene scale={ 4 } />
        <Scene
          translateX={ -512 }
          translateY={ -128 }
          scale={ 2 }
          onClick={ toggleCurrentStep(1) }>
          <Entry>
            <Entry.Text>
              <strong>Ponchos.</strong>
            </Entry.Text>
          </Entry>
        </Scene>
        <Scene
          translateX={ -256 }
          translateY={ -256 }
          translateZ={ 512 }
          scale={ 1.25 }
          onClick={ toggleCurrentStep(2) }>
          <Entry>
            <Entry.Text>
              <strong>Madonna</strong>, Oxford student.
            </Entry.Text>
            <Image
              src={ madge }
              style={{ clipPath: 'url("#madge_svg__madge")' }} />
            <Madge />
          </Entry>
        </Scene>
        <Scene
          translateX={ -256 }
          translateY={ -768 }
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
          translateX={ -1024 }
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
          </Entry>
        </Scene>
        <Scene
          translateX={ -960 }
          translateY={ -128 }
          translateZ={ 512 }
          scale={ 2 }
          onClick={ toggleCurrentStep(5) }>
          <Entry>
            <Entry.Text>
              <strong>Tucker Carlson:</strong> His smugness boomerangs.
            </Entry.Text>
          </Entry>
        </Scene>
        <Scene
          translateX={ -128 }
          translateY={ -1200 }
          scale={ 2 }
          onClick={ toggleCurrentStep(6) }>
          <Entry>
            <Entry.Text>
              <strong>MoMA</strong> charges $20.
            </Entry.Text>
            <Image src={ twenty } />
          </Entry>
        </Scene>
        <Scene
          translateY={ -512 }
          translateX={ 128 }
          translateZ={ -512 }
          scale={ 1.5 }
          onClick={ toggleCurrentStep(7) }>
          <Entry>
            <Entry.Text>
              <strong>Bob Dylan</strong> bio. Poignant! Idiosyncratic! And full
              of New York trivia.
            </Entry.Text>
            <Image src={ dylan } />
          </Entry>
        </Scene>
        <Scene
          translateY={ 512 }
          translateX={ -1024 }
          scale={ 1.5 }
          onClick={ toggleCurrentStep(8) }>
          <Entry>
            <Entry.Text>
              <strong>Quickie marriages.</strong>
            </Entry.Text>
            <Image src={ trucker } />
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
          translateZ={ 512 }
          onClick={ toggleCurrentStep(10) }>
          <Entry>
            <Entry.Text>
              <strong>Halloween Parade:</strong> People think it's gross and
              tacky. (It's still fun.)
            </Entry.Text>
            <Image src={ ghostling } style={{ maxHeight: 256 }} />
          </Entry>
        </Scene>
        <Scene
          translateY={ 768 }
          translateX={ 512 }
          rotateY={ -45 }
          scale={ 2 }
          onClick={ toggleCurrentStep(11) }>
          <Entry>
            <Entry.Text>
              <strong>Grand Theft Auto: San Andreas.</strong> Vroom.
            </Entry.Text>
            <Image src={ gta } />
          </Entry>
        </Scene>
        <Scene
          translateX={ -960 }
          translateY={ -960 }
          scale={ 1.5 }
          onClick={ toggleCurrentStep(12) }>
          <Entry
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              minWidth: 256,
            }}>
            <Entry.Text>
              <strong>It's All About Love:</strong> Dogma + indie star power =
              pretentious glop.
            </Entry.Text>
            <PulsingIcon
              icon={ duotone('heart-broken') }
              size='3x'
              style={{ color: css.red700 }} />
          </Entry>
        </Scene>
        <Scene
          translateX={ 1024 }
          translateY={ -1024 }
          translateZ={ 256 }
          scale={ 2 }
          onClick={ toggleCurrentStep(13) }>
          <Entry>
            <Entry.Text>
              <strong>His Excellency: George Washington</strong>, by{ ' ' }
              <em>Founding Brothers</em> author Joseph J. Ellis.
            </Entry.Text>
            <Image src={ washington } />
          </Entry>
        </Scene>
      </Stage>
    </>
  )
}
