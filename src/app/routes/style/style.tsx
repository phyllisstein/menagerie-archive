import React, { FunctionComponent, useState } from 'react'
import { Impress} from 'app/components/impress'
import { Step } from './style-styles'

export const Style: FunctionComponent = () => {
  const [step, setStep] = useState(1)

  return (
    <div>
      <button type='button' onClick={ () => setStep(s => s + 1) }>
        Next
      </button>
      <button type='button' onClick={ () => setStep(s => s - 1) }>
        Previous
      </button>
      <Impress height={ 768 } step={ step } width={ 1024 }>
        <Step>
          <h1>One</h1>
        </Step>
        <Step position={{ x: 1000 }}>
          <h1>Two</h1>
        </Step>
        <Step relativePosition={{ x: 1000 }}>
          <h1>Three</h1>
        </Step>
        <Step relativePosition={{ x: -500 }} scale={ 2 }>
          <h1>Four</h1>
        </Step>
        <Step rotation={{ z: 45 }}>
          <h1>Five</h1>
        </Step>
        <Step relativeRotation={{ y: 180 }}>
          <h1>Six</h1>
        </Step>
      </Impress>
    </div>
  )
}
