import {Impress, Step, useStep} from 'app/components/impress'
import React, {FunctionComponent} from 'react'

export const Style: FunctionComponent = () => {
  const [, next, previous] = useStep()

  return (
    <div>
      <button type='button' onClick={next}>
        Next
      </button>
      <button type='button' onClick={previous}>
        Previous
      </button>
      <Impress height={768} width={1024}>
        <Step>
          <h1>One</h1>
        </Step>
        <Step position={{x: 1000}}>
          <h1>Two</h1>
        </Step>
        <Step relative position={{x: 1000}}>
          <h1>Three</h1>
        </Step>
        <Step relative position={{x: -500}} scale={2}>
          <h1>Four</h1>
        </Step>
      </Impress>
    </div>
  )
}
