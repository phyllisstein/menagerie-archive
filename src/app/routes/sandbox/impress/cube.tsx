import { Face, Impress, Step } from './styles'
import { Controls } from 'app/components'
import type { ReactElement } from 'react'

export function CubeImpressSandboxRoute(): ReactElement {
  return (
    <div>
      <Impress>
        <Step position={{ z: 50 }}>
          <Face $background='gray600'>F</Face>
        </Step>
        <Step position={{ z: 50 }} rotation={{ y: 90 }}>
          <Face $background='red600'>R</Face>
        </Step>
        <Step position={{ z: 50 }} rotation={{ y: 180 }}>
          <Face $background='celery600'>BK</Face>
        </Step>
        <Step position={{ z: 50 }} rotation={{ y: 270 }}>
          <Face $background='blue600'>L</Face>
        </Step>
        <Step position={{ z: 50 }} rotation={{ x: 90 }}>
          <Face $background='yellow600'>T</Face>
        </Step>
        <Step position={{ z: 50 }} rotation={{ x: 270 }}>
          <Face $background='orange600'>B</Face>
        </Step>
      </Impress>
      <Controls />
    </div>
  )
}
