import {impress} from 'app/state'
import {oneLine} from 'common-tags'
import _ from 'lodash'
import React, {FunctionComponent, useMemo} from 'react'
import {useRecoilState, useRecoilValue} from 'recoil'
import {Root} from './step-styles'

export interface StepCoordinates {
  x?: number
  y?: number
  z?: number
}

export interface StepProps {
  active?: boolean
  position?: StepCoordinates
  relative?: boolean
  rotation?: StepCoordinates
  scale?: number
  step?: number
}

const DEFAULTS = {
  x: 0,
  y: 0,
  z: 0,
}

export const Step: FunctionComponent<StepProps> = ({
  active = false,
  children,
  position = {},
  relative = false,
  rotation = {},
  scale = 1,
  step,
}) => {
  const [currentAnimation, setCurrentAnimation] = useRecoilState(
    impress.animation(step),
  )
  const previousAnimation = useRecoilValue(impress.animation(step - 1))

  useMemo(() => {
    const nextPosition = _.defaults({...position}, DEFAULTS)
    const nextRotation = _.defaults({...rotation}, DEFAULTS)
    let nextScale = scale

    if (relative) {
      nextPosition.x += previousAnimation?.position?.x ?? 0
      nextPosition.y += previousAnimation?.position?.y ?? 0
      nextPosition.z += previousAnimation?.position?.z ?? 0
      nextRotation.x += previousAnimation?.rotation?.x ?? 0
      nextRotation.y += previousAnimation?.rotation?.y ?? 0
      nextRotation.z += previousAnimation?.rotation?.z ?? 0
      nextScale *= previousAnimation?.scale ?? 1
    }

    setCurrentAnimation({
      position: {...nextPosition},
      rotation: {...nextRotation},
      scale: nextScale,
    })
  }, [
    position.x,
    position.y,
    position.z,
    rotation.x,
    rotation.y,
    rotation.z,
    previousAnimation.position.x,
    previousAnimation.position.y,
    previousAnimation.position.z,
    previousAnimation.rotation.x,
    previousAnimation.rotation.y,
    previousAnimation.rotation.z,
    previousAnimation.scale,
    relative,
  ])

  const transform = oneLine`
    translate(-50%, -50%)
    translate3d(${currentAnimation.position.x}px, ${currentAnimation.position.y}px, ${currentAnimation.position.z}px)
    rotateX(${currentAnimation.rotation.x}deg)
    rotateY(${currentAnimation.rotation.y}deg)
    rotateZ(${currentAnimation.rotation.z}deg)
    scale(${currentAnimation.scale})
  `

  return (
    <Root
      animate={{opacity: active ? 1 : 0.3}}
      style={{position: 'absolute', transform, transformStyle: 'preserve-3d'}}>
      {children}
    </Root>
  )
}
