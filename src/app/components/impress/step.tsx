import { FunctionComponent, useEffect } from 'react'
import _ from 'lodash'
import { impress } from 'app/state'
import { oneLine } from 'common-tags'
import { Root } from './step-styles'
import { useRecoilState } from 'recoil'
import { useStep } from 'app/hooks/impress'

export interface StepCoordinates {
  x?: number
  y?: number
  z?: number
}

export interface StepProps {
  position?: StepCoordinates
  relative?: boolean
  rotation?: StepCoordinates
  scale?: number
  step?: number
}

const COORDINATE_DEFAULTS = {
  x: 0,
  y: 0,
  z: 0,
}

export const Step: FunctionComponent<StepProps> = ({
  children,
  position = {},
  relative = false,
  rotation = {},
  scale = 1,
  step,
}) => {
  const [{ previous }, setCurrentAndPreviousAnimation] = useRecoilState(impress.currentAndPreviousAnimation(step))
  const [currentStep] = useStep()

  const nextPosition = _.defaults({ ...position }, COORDINATE_DEFAULTS)
  const nextRotation = _.defaults({ ...rotation }, COORDINATE_DEFAULTS)
  let nextScale = scale

  if (relative) {
    nextPosition.x += previous?.position?.x ?? 0
    nextPosition.y += previous?.position?.y ?? 0
    nextPosition.z += previous?.position?.z ?? 0
    nextRotation.x += previous?.rotation?.x ?? 0
    nextRotation.y += previous?.rotation?.y ?? 0
    nextRotation.z += previous?.rotation?.z ?? 0
    nextScale *= previous?.scale ?? 1
  }

  const transform = oneLine`
    translate(-50%, -50%)
    translate3d(${ nextPosition.x }px, ${ nextPosition.y }px, ${ nextPosition.z }px)
    rotateX(${ nextRotation.x }deg)
    rotateY(${ nextRotation.y }deg)
    rotateZ(${ nextRotation.z }deg)
    scale(${ nextScale })
  `

  useEffect(() => {
    setCurrentAndPreviousAnimation({
      current: {
        position: nextPosition,
        rotation: nextRotation,
        scale: nextScale,
      },
    })
  }, [transform])

  return (
    <Root
      animate={{ opacity: step === currentStep ? 1 : 0.3 }}
      style={{ transform }}>
      { children }
    </Root>
  )
}
