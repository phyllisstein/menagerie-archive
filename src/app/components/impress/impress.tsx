import { Body, Canvas, Root } from './impress-styles'
import { Children, cloneElement, FunctionComponent, useMemo, useRef, useState } from 'react'
import { config, to, useSpring } from 'react-spring'
import { oneLine } from 'common-tags'
import R from 'ramda'
import { standardEase } from 'app/lib/ease'

export interface ImpressProps {
  delay?: number
  height: number
  perspective?: number
  scale?: Scale
  spring?: SpringConfig
  step: number
  width: number
}

export interface Scale {
  max?: number
  min?: number
}

export interface SpringConfig {
  friction: number
  tension: number
}

export interface StepProps {
  active?: boolean
  position?: Coordinates
  relativePosition?: Coordinates
  relativeRotation?: Coordinates
  relativeScale?: number
  rotation?: Coordinates
  scale?: number
}

export interface Coordinates {
  x?: number
  y?: number
  z?: number
}

const clamp = (min: number, max: number, i: number): number => {
  if (i > max) {
    return clamp(min, max, i - max)
  }

  if (i < min) {
    return clamp(min, max, i + max)
  }

  return i
}

const clampRotation = R.partial(clamp, [0, 360])

export const Impress: FunctionComponent<ImpressProps> = ({ children, delay = 350, height, perspective = 1000, scale: scaleConstraints = {}, spring: springConfig = config.default, step, width }) => {
  const [position, setPosition] = useState<Coordinates>({ x: 0, y: 0, z: 0 })
  const [rotation, setRotation] = useState<Coordinates>({ x: 0, y: 0, z: 0 })
  const [scale, setScale] = useState(1)
  const lastScale = useRef(scale)

  const positionedSteps = useMemo(() => {
    const cachedPosition: Coordinates = { x: 0, y: 0, z: 0 }
    const cachedRotation: Coordinates = { x: 0, y: 0, z: 0 }
    let cachedScale = 1

    return Children.map(children, (child, i) => {
      const isCurrent = i + 1 === step

      const {
        position: currentPosition,
        relativePosition,
        relativeRotation,
        relativeScale,
        rotation: currentRotation,
        scale: currentScale,
        ...props
      } = (child.props as StepProps)

      if (currentPosition == null && relativePosition != null) {
        cachedPosition.x = cachedPosition.x + (relativePosition?.x ?? 0)
        cachedPosition.y = cachedPosition.y + (relativePosition?.y ?? 0)
        cachedPosition.z = cachedPosition.z + (relativePosition?.z ?? 0)
      } else {
        cachedPosition.x = currentPosition?.x ?? 0
        cachedPosition.y = currentPosition?.y ?? 0
        cachedPosition.z = currentPosition?.z ?? 0
      }

      if (typeof currentRotation === 'number') {
        cachedRotation.x = 0
        cachedRotation.y = 0
        cachedRotation.z = currentRotation
      } else if (currentRotation == null && typeof relativeRotation === 'number') {
        cachedRotation.x = 0
        cachedRotation.y = 0
        cachedRotation.z = clampRotation((cachedRotation.z ?? 0) + relativeRotation)
      } else if (currentRotation == null && relativeRotation != null) {
        cachedRotation.x = clampRotation((cachedRotation.x ?? 0) + (relativeRotation?.x ?? 0))
        cachedRotation.y = clampRotation((cachedRotation.y ?? 0) + (relativeRotation?.y ?? 0))
        cachedRotation.z = clampRotation((cachedRotation.z ?? 0) + (relativeRotation?.z ?? 0))
      } else {
        cachedRotation.x = currentRotation?.x ?? 0
        cachedRotation.y = currentRotation?.y ?? 0
        cachedRotation.z = currentRotation?.z ?? 0
      }

      if (currentScale == null && relativeScale != null) {
        cachedScale = (cachedScale ?? 1) * relativeScale
      } else {
        cachedScale = currentScale ?? 1
      }

      if (isCurrent) {
        setPosition({ ...cachedPosition })
        setRotation({ ...cachedRotation })
        setScale(cachedScale)
      }

      const transform = oneLine`
        translate(-50%, -50%)
        translate3d(${ cachedPosition.x }px, ${ cachedPosition.y }px, ${ cachedPosition.z }px)
        rotateX(${ cachedRotation.x }deg)
        rotateY(${ cachedRotation.y }deg)
        rotateZ(${ cachedRotation.z }deg)
        scale(${ cachedScale })
      `
      const style = {
        ...props.style,
        position: 'absolute',
        transform,
        transformStyle: 'preserve-3d',
      }

      return cloneElement(child, {
        active: isCurrent,
        style,
      })
    })
  }, [children, step])

  const windowScale = useMemo(() => {
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
  }, [height, scaleConstraints.max, scaleConstraints.min, width])

  const targetPosition = R.map(R.multiply(-1), position) as Coordinates
  const targetRotation = R.map(R.multiply(-1), rotation) as Coordinates

  const targetScale = 1 / scale
  const zoom = targetScale >= lastScale.current
  lastScale.current = targetScale

  const rootAnimation = useSpring({
    config: {
      ...springConfig,
      easing: standardEase,
    },
    delay: zoom ? delay : 0,
    from: {
      perspective: perspective / windowScale,
      scale: windowScale,
    },
    to: {
      perspective: perspective / targetScale,
      scale: targetScale,
    },
  })

  const canvasAnimation = useSpring({
    config: {
      ...springConfig,
      easing: standardEase,
    },
    delay: zoom ? 0 : delay,
    from: {
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    to: {
      position: [targetPosition.x, targetPosition.y, targetPosition.z],
      rotation: [targetRotation.x, targetRotation.y, targetRotation.z],
    },
  })

  return (
    <>
      <Body />
      <Root
        style={{
          perspective: rootAnimation.perspective,
          transform: to(rootAnimation.scale, s => `scale(${ s })`),
        }}>
        <Canvas
          style={{
            transform: to(
              [canvasAnimation.position, canvasAnimation.rotation],
              ([x, y, z], [rotateX, rotateY, rotateZ]) => oneLine`
                rotateZ(${ rotateZ }deg)
                rotateY(${ rotateY }deg)
                rotateX(${ rotateX }deg)
                translate3d(${ x }px, ${ y }px, ${ z }px)
              `,
            ),
          }}>
          { positionedSteps }
        </Canvas>
      </Root>
    </>
  )
}
