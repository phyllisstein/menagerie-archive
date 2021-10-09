import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { canUseDOM } from 'exenv'
import _ from 'lodash'
import R from 'ramda'
import React, {
  Children,
  FunctionComponentElement,
  ReactElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { Props as SceneProps } from './scene'
import { Body, Root, StageRoot } from './stage-styles'

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

const mergeTransforms = R.mergeWithKey(
  (key: string, lhs: number, rhs: number): number => {
    if (
      !key.includes('scale') &&
      !key.includes('translate') &&
      !key.includes('rotate')
    ) {
      return rhs
    }

    return lhs + rhs
  },
)

const getTranslate = (childProps: SceneProps): TranslateMap => {
  const entries = (Object.entries(childProps) as Array<[string, number]>)
    .filter(([kind]) => kind.includes('translate') || kind.includes('rotate'))
    .reverse()
    .map(([kind, amount]) => [kind, amount * -1])

  return Object.fromEntries(entries)
}

const joinSortedEntries = (obj: { [key: string]: unknown }): string =>
  Object.entries(obj)
    .map(([kind, amount]) => `${ kind }(${ amount })`)
    .join(' ')

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

export function Stage ({
  children,
  height = 768,
  perspective: perspectiveBase = 1000,
  scale: scaleConstraints = {},
  step,
  width = 1024,
}: Props): ReactElement {
  const [windowScale, setWindowScale] = useState(() =>
    getWindowScale(height, width, scaleConstraints),
  )

  const rootEl = useRef<HTMLDivElement>(null)
  const staleScale = useRef<number>(1)

  useEffect(() => {
    const triggerRescale = (): void => {
      const nextScale = getWindowScale(height, width, scaleConstraints)
      setWindowScale(nextScale)
    }

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

  const childArray = useMemo(() => {
    return Children.toArray(children)
      .filter(child => (child as SceneElement).props.layout == null)
      .map((child, childNumber, childArray) => {
        const childEl = child as SceneElement

        if (childEl.props.relative == null || childNumber === 0) {
          return childEl
        }

        const previousStep = _.clamp(childNumber, 0, childNumber - 1)
        const previousChild = childArray[previousStep] as SceneElement

        const mergedTransforms = mergeTransforms(
          previousChild.props,
          childEl.props,
        )

        return React.cloneElement(childEl, {
          ...childEl.props,
          ...mergedTransforms,
        })
      })
  }, [children])

  const layoutSteps = useMemo(() => {
    return Children.toArray(children).filter(
      child => (child as SceneElement).props.layout != null,
    )
  }, [children])

  const currentStep = _.clamp(step, 0, childArray.length - 1)
  const currentChild = childArray[currentStep]

  const translate = getTranslate(currentChild.props)
  const currentScale = 1 / (currentChild.props.scale ?? 1)
  const didZoom = currentScale >= staleScale.current
  staleScale.current = currentScale

  const scale = currentScale * windowScale
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
          animate={ translate }
          transition={{
            damping: 15,
            delay: didZoom ? 0 : 0.25,
            mass: 1.5,
            stiffness: 75,
            type: 'spring',
          }}>
          { layoutSteps }
          { childArray }
        </StageRoot>
      </Root>
    </>
  )
}
