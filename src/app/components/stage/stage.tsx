import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import _ from 'lodash'
import {
  Children,
  FunctionComponentElement,
  ReactElement,
  useEffect,
  useRef,
} from 'react'
import { Props as SceneProps } from './scene'
import { Root, StageRoot } from './stage-styles'

const VALID_TRANSFORMS = [
  'rotate',
  'rotateX',
  'rotateY',
  'rotateZ',
  'scale',
  'scaleX',
  'scaleY',
  'translate',
  'translateX',
  'translateY',
  'translateZ',
]

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

  const childArray = Children.toArray(children)
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
      animate={ scale }
      ref={ rootEl }
      transformTemplate={ joinSortedEntries }
      transition={{
        damping: 10,
        mass: 1.5,
        stiffness: 100,
        type: 'spring',
        when: didZoom ? 'afterChildren' : 'beforeChildren',
      }}>
      <StageRoot
        animate={ translate }
        transformTemplate={ joinSortedEntries }
        transition={{
          damping: 10,
          delay: !didZoom ? 0.25 : 0,
          mass: 1.5,
          stiffness: 100,
          type: 'spring',
        }}>
        { children }
      </StageRoot>
    </Root>
  )
}
