import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import React, {
  Children,
  FunctionComponentElement,
  ReactElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { Root, StageRoot } from './stage-styles'
import { Scene, Props as SceneProps } from './scene'
import _ from 'lodash'
import { canUseDOM } from 'exenv'
import R from 'ramda'

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

const getScale = (childProps: SceneProps, windowScale: number): ScaleMap => {
  const entries = (Object.entries(childProps) as Array<[string, number]>)
    .filter(([kind]) => kind.includes('scale'))
    .reverse()
    .map(([kind, amount]) => [kind, (1 / amount) * windowScale])

  return Object.fromEntries(entries)
}

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
  perspective?: number | string
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
  height,
  perspective,
  scale: scaleConstraints = {},
  step,
  width,
}: Props): ReactElement {
  width ??= canUseDOM ? window.innerWidth : 0
  height ??= canUseDOM ? window.innerHeight : 0

  const [windowScale, setWindowScale] = useState(() =>
    getWindowScale(height, width, scaleConstraints),
  )

  perspective ??= canUseDOM ? window.innerWidth : 1000

  const rootEl = useRef<HTMLDivElement>(null)
  const staleScale = useRef<ScaleMap>({ scale: 1, scaleX: 1, scaleY: 1 })

  useEffect(() => {
    const getScale = (): void => {
      const nextScale = getWindowScale(height, width, scaleConstraints)
      if (nextScale !== windowScale) {
        setWindowScale(nextScale)
      }
    }

    getScale()

    window.addEventListener('resize', getScale, { passive: true })

    return () => window.removeEventListener('resize', getScale)
  }, [])

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
  const scale = getScale(currentChild.props, windowScale)

  const didZoom =
    scale.scale >= staleScale.current.scale ||
    scale.scaleX >= staleScale.current.scaleX ||
    scale.scaleY >= staleScale.current.scaleY

  useEffect(() => {
    const freshScale = getScale(currentChild.props, windowScale)
    staleScale.current = { ...freshScale }
  }, [currentChild, windowScale])

  return (
    <Root
      ref={ rootEl }
      $perspective={ perspective }
      animate={ scale }
      transformTemplate={ joinSortedEntries }
      transition={{
        damping: 15,
        mass: 1.5,
        stiffness: 75,
        type: 'spring',
        when: didZoom ? 'afterChildren' : 'beforeChildren',
      }}>
      <StageRoot
        animate={ translate }
        transformTemplate={ joinSortedEntries }
        transition={{
          damping: 15,
          mass: 1.5,
          stiffness: 75,
          type: 'spring',
        }}>
        { layoutSteps }
        { childArray }
      </StageRoot>
    </Root>
  )
}
