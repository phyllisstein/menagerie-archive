/* eslint-disable react/jsx-sort-props */

import { Entry, Grid, Image, Label, Line, PulsingIcon } from './approval-styles'
import { ReactElement, useCallback, useState } from 'react'
import { Scene, Stage } from 'app/components'
import { css } from 'app/styles/theme/palette'
import { duotone } from '@fortawesome/fontawesome-svg-core/import.macro'
import dylan from 'assets/matrix/dylan.jpg'
import ghery from 'assets/matrix/ghery.png'
import ghostling from 'assets/matrix/ghostling.png'
import gta from 'assets/matrix/gtasa.jpg'
import { Helmet } from 'react-helmet-async'
import housewives from 'assets/matrix/housewives.png'
import locas from 'assets/matrix/locas.jpg'
import madge from 'assets/matrix/madge.png'
import Madge from 'assets/matrix/madge.svg'
import malcolmGladwell from 'assets/matrix/MalcolmGladwell.png'
import purpleHeart from 'assets/matrix/purple-heart.png'
import reynolds from 'assets/matrix/reynolds.png'
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
      <Stage height={ 768 } step={ step } width={ 1024 }>
        <Scene layout>
          <Grid>
            <Line $axis='x' />
            <Line $axis='y' />
          </Grid>
        </Scene>
        <Scene layout translateY={ -1440 }>
          <Label>Highbrow</Label>
        </Scene>
        <Scene layout translateY={ 1240 }>
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
          translateX={ -1200 }
          translateZ={ 128 }
          scale={ 1.5 }
          rotateY={ 35 }
          rotateX={ 10 }
          rotateZ={ 5 }
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
          translateX={ -512 }
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
              minWidth: 512,
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
        <Scene
          translateX={ 1024 }
          translateY={ -360 }
          onClick={ toggleCurrentStep(14) }>
          <Entry>
            <Entry.Text>
              <strong>Ghery</strong> picked for WTC performing-arts center.
            </Entry.Text>
            <Image src={ ghery } />
          </Entry>
        </Scene>
        <Scene
          translateX={ 1440 }
          translateY={ 1024 }
          translateZ={ -128 }
          scale={ 1.5 }
          onClick={ toggleCurrentStep(15) }>
          <Entry>
            <Entry.Text>
              <strong>
                <em>Desperate Housewives:</em>
              </strong>{ ' ' }
              <em>Melrose</em>-like genius, plus a career boost for Felicity
              Huffman.
            </Entry.Text>
            <Image src={ housewives } />
          </Entry>
        </Scene>
        <Scene
          translateX={ 1440 }
          translateY={ 384 }
          translateZ={ 128 }
          onClick={ toggleCurrentStep(16) }>
          <Entry>
            <Entry.Text>
              Jaime Hernandez's{ ' ' }
              <strong>
                <em>Locas: A Love & Rockets Book</em>
              </strong>
              .
            </Entry.Text>
            <Image src={ locas } />
          </Entry>
        </Scene>
        <Scene
          translateX={ -256 }
          translateY={ 900 }
          onClick={ toggleCurrentStep(17) }>
          <Entry>
            <Entry.Text>
              <strong>Burt Reynolds</strong>
              as Boss Hogg in <em>Dukes of Hazzard</em> movie. Toupée makers,
              rejoice.
            </Entry.Text>
            <Image src={ reynolds } />
          </Entry>
        </Scene>
        <Scene
          translateX={ -256 }
          translateY={ 900 }
          onClick={ toggleCurrentStep(17) }>
          <Entry>
            <Entry.Text>
              <strong>Burt Reynolds</strong>
              as Boss Hogg in <em>Dukes of Hazzard</em> movie. Toupée makers,
              rejoice.
            </Entry.Text>
            <Image src={ reynolds } />
          </Entry>
        </Scene>
        <Scene
          translateY={ 1000 }
          translateX={ -850 }
          translateZ={ 256 }
          onClick={ toggleCurrentStep(19) }>
          <Entry>
            <Entry.Text>
              <strong>Stolen Honor: Wounds That Never Heal:</strong>
              Sinclair flip-flops on anti-Kerry doc.
            </Entry.Text>
            <Image src={ purpleHeart } style={{ width: 256, height: 'auto' }} />
          </Entry>
        </Scene>
      </Stage>
    </>
  )
}
