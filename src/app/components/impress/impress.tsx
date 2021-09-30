import { Body, Canvas, Root } from './impress-styles'
import { FunctionComponent, useEffect, useRef, useState } from 'react'
import { useStep, useSteppedChildren } from 'app/hooks/impress'
import { addEventListener } from 'consolidated-events'
import { canUseDOM } from 'exenv'
import { impress } from 'app/state'
import R from 'ramda'
import { useRecoilValue } from 'recoil'

export type ScaleConstraints = { min?: number; max?: number }

export interface ImpressProps {
  height?: number
  perspective?: number
  scale?: ScaleConstraints
  width?: number
}

const getWindowScale = (height: number, width: number, scaleConstraints: ScaleConstraints = {}): number => {
  if (!canUseDOM) {
    return 1
  }

  const scaleHeight = window.innerHeight / height
  const scaleWidth = window.innerWidth / width
  const scaleWindow = scaleHeight > scaleWidth ? scaleWidth : scaleHeight

  if (scaleConstraints.max != null && scaleWindow > scaleConstraints.max) {
    return scaleConstraints.max
  }

  if (scaleConstraints.min != null && scaleWindow < scaleConstraints.min) {
    return scaleConstraints.min
  }

  return scaleWindow
}

export const Impress: FunctionComponent<ImpressProps> = ({
  children,
  height,
  perspective: perspectiveBase = 1000,
  scale: scaleConstraints = {},
  width,
  ...props
}) => {
  width ??= canUseDOM ? window.innerWidth : 0
  height ??= canUseDOM ? window.innerHeight : 0

  const [windowScale, setWindowScale] = useState(() =>
    getWindowScale(height, width, scaleConstraints)
  )
  const [steppedChildren, stepCount] = useSteppedChildren(children)
  const [step] = useStep(stepCount)
  const previousScale = useRef(0)

  const current = useRecoilValue(impress.animation(step))

  const targetPosition = R.map(R.multiply(-1), current.position)
  const targetRotation = R.map(R.multiply(-1), current.rotation)
  const targetScale = 1 / current.scale

  useEffect(() => {
    const getScale = () => {
      const nextScale = getWindowScale(height, width, scaleConstraints)
      if (nextScale !== windowScale) {
        setWindowScale(nextScale)
      }
    }

    getScale()

    return addEventListener(window, 'resize', getScale, { passive: true })
  }, [])

  const zoom = targetScale >= previousScale.current
  previousScale.current = targetScale
  const perspective = perspectiveBase / targetScale

  return (
    <>
      <Body />
      <Root
        {...props}
        animate={{
          perspective,
          scale: targetScale * windowScale
        }}
        initial={{
          perspective: perspectiveBase,
          scale: windowScale
        }}
        transition={{
          delay: zoom ? 0.5 : 0,
          duration: 1,
          type: 'tween'
        }}
      >
        <Canvas
          animate={{
            rotateX: targetRotation.x,
            rotateY: targetRotation.y,
            rotateZ: targetRotation.z,
            x: targetPosition.x,
            y: targetPosition.y,
            z: targetPosition.z
          }}
          initial={{
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            x: 0,
            y: 0,
            z: 0
          }}
          // FIXME: Flattening and sorting the transforms makes them almost
          // impossible to reason about. Ideally, each step would take many
          // transform parameters and apply them in sequence.
          transformTemplate={({ rotateX, rotateY, rotateZ, x, y, z }) =>
            `translate3d(${x}, ${y}, ${z}) rotateZ(${rotateZ}) rotateY(${rotateY}) rotateX(${rotateX})`}
          transition={{
            delay: zoom ? 0 : 0.5,
            duration: 1,
            type: 'tween'
          }}
        >
          {steppedChildren}
        </Canvas>
      </Root>
    </>
  )
}
