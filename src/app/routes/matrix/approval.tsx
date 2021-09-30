/* eslint-disable react/jsx-sort-props */

import { Entry, Scene, Stage } from 'app/components'
import { ReactElement, useEffect, useState } from 'react'
import gtasa from 'assets/matrix/gtasa.jpg'
import { Image } from './approval-styles'
import madge from 'assets/matrix/madge.png'
import Madge from 'assets/matrix/madge.svg'
import twenty from 'assets/matrix/twenty.jpg'

export function ApprovalRoute (): ReactElement {
  const [step, setStep] = useState(0)

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
      <Scene scale={ 2 } />
      <Scene translateX={ -512 } translateZ={ 256 } scale={ 0.5 }>
        <Entry>
          <Entry.Text>
            <strong>Madonna</strong>, Oxford student.
          </Entry.Text>
          <Image src={ madge } style={{ clipPath: "url('#madge_svg__madge')" }} />
          <Madge />
        </Entry>
      </Scene>
      <Scene translateX={ 250 } translateZ={ -500 }>
        <Entry>
          <Entry.Text>
            <strong>MoMA</strong> charges $20.
          </Entry.Text>
          <Image src={ twenty } />
        </Entry>
      </Scene>
      <Scene relative translateX={ 150 } translateY={ 25 } rotateY={ -55 }>
        <Entry>
          <Entry.Text>
            <strong>Grand Theft Auto: San Andreas.</strong> Vroom.
          </Entry.Text>
          <Image src={ gtasa } />
        </Entry>
      </Scene>
    </Stage>
  )
}
