import { Body, Canvas, Root } from './impress-styles'
import React, {
  Children,
  cloneElement,
  FunctionComponent,
  ReactChildren,
  useEffect,
  useState,
} from 'react'
import { addEventListener } from 'consolidated-events'
import { canUseDOM } from 'exenv'
import { Controls } from './controls'
import { impress } from 'app/state'
import R from 'ramda'
import { Step } from './step'
import { useMem } from 'app/hooks/optimization'
import { useRecoilValue } from 'recoil'
import { useStep } from 'app/hooks/impress'

export interface ScaleConstraints {
  max?: number
  min?: number
}

export interface ImpressProps {
  height: number
  perspective?: number
  scale?: ScaleConstraints
  width: number
}

const getWindowScale = (
  height: number,
  width: number,
  scaleConstraints: ScaleConstraints = {},
): number => {
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
  perspective = 1000,
  scale: scaleConstraints = {},
  width,
}) => {
  const [windowScale, setWindowScale] = useState(() => getWindowScale(height, width, scaleConstraints))

  const getSteppedChildren = useMem((c: ReactChildren) => {
    console.debug('Reticulating splines...')

    const childArray = Children.toArray(c)

    let stepCount = 0

    return childArray
      .reduce((acc, child, index) => {
        if (child.type === Step) {
          stepCount += 1
          const nextChild = cloneElement(child, {
            step: stepCount,
          })
          acc.push(nextChild)
        } else {
          acc.push(child)
        }

        return acc
      }, [])
  })

  const getStepCount = useMem((c: ReactChildren) => {
    const childArray = Children.toArray(children)

    return childArray
      .filter(c => c.type === Step)
      .length
  })

  const steppedChildren = getSteppedChildren(children)
  const [step] = useStep(getStepCount(children))

  const currentAnimation = useRecoilValue(impress.animation(step))

  const targetPosition = R.map(R.multiply(-1), currentAnimation.position)
  const targetRotation = R.map(R.multiply(-1), currentAnimation.rotation)

  useEffect(() => {
    const getScale = (): void => {
      const nextScale = getWindowScale(height, width, scaleConstraints)
      if (nextScale !== windowScale) {
        setWindowScale(nextScale)
      }
    }

    getScale()

    return addEventListener(window, 'resize', getScale, { passive: true })
  })

  let targetScale = 1 / currentAnimation.scale
  const zoom = useRecoilValue<boolean>(impress.shouldZoom(step))
  targetScale *= windowScale

  return (
    <>
      <Body />
      <Root
        animate={{
          perspective: perspective / targetScale,
          scale: targetScale,
        }}
        initial={{
          perspective: perspective / windowScale,
          scale: windowScale,
        }}
        transition={{
          delay: zoom ? 0.5 : 0,
          duration: 1,
          ease: [0.4, 0, 0.2, 1],
          type: 'tween',
        }}>
        <Canvas
          animate={{
            rotateX: targetRotation.x,
            rotateY: targetRotation.y,
            rotateZ: targetRotation.z,
            x: targetPosition.x,
            y: targetPosition.y,
            z: targetPosition.z,
          }}
          initial={{
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            x: 0,
            y: 0,
            z: 0,
          }}
          transformTemplate={ ({ rotateX, rotateY, rotateZ, x, y, z }) =>
            `translate3d(${ x }, ${ y }, ${ z }) rotateZ(${ rotateZ }) rotateY(${ rotateY }) rotateX(${ rotateX })`
          }
          transition={{
            delay: zoom ? 0 : 0.5,
            duration: 1,
            ease: [0.4, 0, 0.2, 1],
            type: 'tween',
          }}>
          { steppedChildren }
        </Canvas>
      </Root>
      <Controls />
    </>
  )
}
