import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import React, {
  Children,
  FunctionComponentElement,
  ReactElement,
  useEffect,
  useMemo,
  useRef,
} from 'react'
import { Root, StageRoot } from './stage-styles'
import { Scene, Props as SceneProps } from './scene'
import _ from 'lodash'
import R from 'ramda'

const mergeTransforms = R.mergeWithKey(
  (key: string, lhs: number, rhs: number): number => {
    if (
      !key.includes('scale') &&
      !key.includes('translate') &&
      !key.includes('rotate')
    ) {
      console.log('Not merging: %s:\t\t %n != %n', key, lhs, rhs)
      return rhs
    }

    console.log('Merging: %s:\t\t %n + %n = %n', key, lhs, rhs)
    return lhs + rhs
  },
)

const getScale = (childProps: SceneProps): ScaleMap => {
  const entries = (Object.entries(childProps) as Array<[string, number]>)
    .filter(([kind]) => kind.includes('scale'))
    .reverse()
    .map(([kind, amount]) => [kind, 1 / amount])

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
  step: number
}

type SceneElement = FunctionComponentElement<SceneProps>

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

export function Stage ({ children, step }: Props): ReactElement {
  const rootEl = useRef<HTMLDivElement>(null)
  const staleScale = useRef<ScaleMap>({ scale: 1, scaleX: 1, scaleY: 1 })

  useEffect(() => {
    const el = rootEl.current
    if (el == null) return
    disableBodyScroll(el)

    return () => enableBodyScroll(el)
  }, [rootEl])

  useEffect(() => {
    const freshScale = getScale(currentChild.props)
    staleScale.current = { ...freshScale }
  })

  const childArray = useMemo(() => {
    return Children.toArray(children).map((child, childNumber, childArray) => {
      const childEl = child as SceneElement

      if (childEl.props.relative == null || childNumber === 0) return child

      const previousStep = _.clamp(childNumber, 0, childNumber - 1)

      const previousChild = childArray[previousStep] as SceneElement
      const relativeProps = mergeTransforms(previousChild.props, childEl.props)
      return React.cloneElement(childEl, relativeProps)
    })
  }, [children])

  const currentStep = _.clamp(step, 0, childArray.length - 1)
  const currentChild = childArray[currentStep] as SceneElement

  const translate = getTranslate(currentChild.props)
  const scale = getScale(currentChild.props)
  const didZoom =
    scale.scale >= staleScale.current.scale ||
    scale.scaleX >= staleScale.current.scaleX ||
    scale.scaleY >= staleScale.current.scaleY

  return (
    <Root
      ref={ rootEl }
      animate={ scale }
      transformTemplate={ joinSortedEntries }
      transition={{
        damping: 10,
        mass: 1,
        stiffness: 100,
        type: 'spring',
        when: didZoom ? 'afterChildren' : 'beforeChildren',
      }}>
      <StageRoot
        animate={ translate }
        transformTemplate={ joinSortedEntries }
        transition={{
          damping: 10,
          mass: 1,
          stiffness: 100,
          type: 'spring',
        }}>
        { childArray }
      </StageRoot>
    </Root>
  )
}
