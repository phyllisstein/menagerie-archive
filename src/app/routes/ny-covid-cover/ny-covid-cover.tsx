import {Impress, Step} from 'app/components/impress'
import React, {useCallback, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router'

export const COVIDCover = () => {
  const navigate = useNavigate()
  const params = useParams()

  const step = params.step ? Number.parseInt(params.step, 10) : 1

  useEffect(() => {
    if (!step) {
      navigate('1')
    }
  }, [step])

  const next = useCallback(() => navigate(`../${step + 1}`), [step])
  const previous = useCallback(() => navigate(`../${step - 1}`), [step])

  return (
    <>
      <button type='button' onClick={next}>
        Next
      </button>
      <button type='button' onClick={previous}>
        Previous
      </button>
      <Impress height={768} step={step} width={1024}>
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
    </>
  )
}
