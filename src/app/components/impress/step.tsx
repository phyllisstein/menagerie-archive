import { useCallback, useEffect } from 'react'
import fp from 'lodash/fp'
import { impress } from 'app/state'
import { oneLine } from 'common-tags'
import { Root } from './step-styles'
import { useNavigate } from 'react-router'
import { useRecoilState } from 'recoil'
import { useStep } from 'app/hooks/impress'

const withDefaults = fp.defaults({ x: 0, y: 0, z: 0 })

export const Step = ({
  children,
  position = {},
  relative = false,
  rotation = {},
  scale = 1,
  step,
  style,
  ...props
}) => {
  const [{ previous }, setCurrentAndPreviousAnimation] = useRecoilState(
    impress.currentAndPreviousAnimation(step)
  )
  const [currentStep] = useStep()

  const nextPosition = withDefaults(position)
  const nextRotation = withDefaults(rotation)

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

  // FIXME: Flattening and sorting the transforms makes them almost
  // impossible to reason about. Ideally, each step would take many
  // transform parameters and apply them in sequence.
  const transform = oneLine`
    translate(-50%, -50%)
    rotateX(${nextRotation.x}deg)
    rotateY(${nextRotation.y}deg)
    rotateZ(${nextRotation.z}deg)
    translate3d(${nextPosition.x}px, ${nextPosition.y}px, ${nextPosition.z}px)
    scale(${nextScale})
  `

  useEffect(() => {
    setCurrentAndPreviousAnimation({
      current: {
        position: nextPosition,
        rotation: nextRotation,
        scale: nextScale
      }
    })
  }, [transform])

  const navigate = useNavigate()
  const jumpToStep = useCallback(() => {
    if (step === currentStep) {
      navigate('../1')
    } else {
      navigate(`../${step}`)
    }
  }, [currentStep, step])

  return (
    <Root
      {...props}
      animate={{ opacity: step === currentStep ? 0.6 : 0.2 }}
      style={{
        ...style,
        transform
      }}
      onClick={jumpToStep}
    >
      {children}
    </Root>
  )
}
