import { Body, Root, StageRoot } from './stage-styles'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import React, {
  Children,
  createContext,
  FunctionComponentElement,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { canUseDOM } from 'exenv'
import { debounce } from 'lodash/fp'
import R from 'ramda'
import { Props as SceneProps } from './scene'

type TransformRegistrationFn = (transform: Transform) => void
export const StageTransform = createContext<TransformRegistrationFn | null>(
  null,
)

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

export interface Props {
  children: OneOrMore<SceneElement>
  height?: number
  perspective?: number
  scale?: ScaleConstraints
  step: number
  width?: number
}

type SceneElement = FunctionComponentElement<SceneProps>

export interface ScaleConstraints {
  min?: number
  max?: number
}

interface ScaleMap {
  scale: number
  scaleX: number
  scaleY: number
}

interface TranslateMap {
  rotate: number
  rotateX: number
  rotateY: number
  rotateZ: number
  translate: number
  translateX: number
  translateY: number
  translateZ: number
}

interface Transform {
  scale: number
  translate: TranslateMap
}

export function Stage ({
  children,
  height = 768,
  perspective: perspectiveBase = 1000,
  scale: scaleConstraints = {},
  step: rawStep,
  width = 1024,
}: Props): ReactElement {
  const [windowScale, setWindowScale] = useState(() =>
    getWindowScale(height, width, scaleConstraints),
  )

  const step = R.clamp(1, Children.count(children), rawStep) - 1
  const rootEl = useRef<HTMLDivElement>(null)
  const staleScale = useRef<number>(1)
  const [transforms, setTransforms] = useState<Transform[]>([])
  const registerTransform = useCallback((transform: Transform) => {
    setTransforms(transforms => [...transforms, transform])
  }, [])

  useEffect(() => {
    const triggerRescale = debounce(250, (): void => {
      const nextScale = getWindowScale(height, width, scaleConstraints)
      setWindowScale(nextScale)
    })

    triggerRescale()

    window.addEventListener('resize', triggerRescale, { passive: true })

    return () => window.removeEventListener('resize', triggerRescale)
  }, [height, width, scaleConstraints])

  useEffect(() => {
    const el = rootEl.current
    if (el == null) return
    disableBodyScroll(el)

    return () => enableBodyScroll(el)
  }, [rootEl])

  const transform = R.prop(step, transforms) || { scale: 1, translate: {}}

  const didZoom = transform.scale >= staleScale.current
  staleScale.current = transform.scale

  const scale = transform.scale * windowScale
  const perspective = perspectiveBase / scale

  return (
    <>
      <Body />
      <Root
        ref={ rootEl }
        animate={{ perspective, scale }}
        initial={{ perspective: perspectiveBase, scale: 1 }}
        transition={{
          damping: 15,
          delay: didZoom ? 0.25 : 0,
          mass: 1.5,
          stiffness: 75,
          type: 'spring',
        }}>
        <StageRoot
          animate={ transform.translate }
          transition={{
            damping: 15,
            delay: didZoom ? 0 : 0.25,
            mass: 1.5,
            stiffness: 75,
            type: 'spring',
          }}>
          <StageTransform.Provider value={ registerTransform }>
            { children }
          </StageTransform.Provider>
        </StageRoot>
      </Root>
    </>
  )
}
