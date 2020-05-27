import { Impress, Step } from 'app/components/impress'
import { useNavigate, useParams } from 'react-router'

export const Style = () => {
  const navigate = useNavigate()
  const params = useParams()

  const step = params.step
    ? Number.parseInt(params.step, 10)
    : 1
  const next = params.step
    ? `../${ step + 1 }`
    : `${ step + 1 }`
  const previous = params.step
    ? `../${ step - 1 }`
    : `${ step - 1 }`

  return (
    <div>
      <button type='button' onClick={ () => navigate(next) }>
        Next
      </button>
      <button type='button' onClick={ () => navigate(previous) }>
        Previous
      </button>
      <Impress height={ 768 } step={ step } width={ 1024 }>
        <Step>
          <h1>One</h1>
        </Step>
        <Step position={{ x: 1000 }}>
          <h1>Two</h1>
        </Step>
        <Step relative position={{ x: 1000 }}>
          <h1>Three</h1>
        </Step>
        <Step relative position={{ x: -500 }} scale={ 2 }>
          <h1>Four</h1>
        </Step>
      </Impress>
    </div>
  )
}
