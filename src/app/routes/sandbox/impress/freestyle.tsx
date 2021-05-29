import { Face, Impress, Step } from './styles'
import { Controls } from 'app/components'
import type { ReactElement } from 'react'

export function FreestyleImpressSandboxRoute(): ReactElement {
  return (
    <div>
      <Impress>
        <Step position={{ z: 125 }}>
          <Face $background='indigo400'>F</Face>
        </Step>
        <Step position={{ z: 125 }} rotation={{ y: 90 }}>
          <Face $background='red400'>R</Face>
        </Step>
        <Step position={{ z: 125 }} rotation={{ y: 180 }}>
          <Face $background='celery400'>BK</Face>
        </Step>
        <Step position={{ z: 125 }} rotation={{ y: 270 }}>
          <Face $background='blue400'>L</Face>
        </Step>
        <Step rotation={{ x: 90 }}>
          <Face $background='yellow400'>T</Face>
        </Step>
        <Step position={{ z: 125 }} rotation={{ x: -90 }}>
          <Face $background='orange400'>B</Face>
        </Step>
      </Impress>
      <Controls />
    </div>
  )
}
