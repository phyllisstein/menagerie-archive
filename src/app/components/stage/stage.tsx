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
import { Proscenium, Root, StageRoot } from './stage-styles'

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

export interface Props {
  children: OneOrMore<SceneElement>
  step: number
}

type SceneElement = FunctionComponentElement<SceneProps>

export function Stage ({ children, step }: Props): ReactElement {
  const rootEl = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = rootEl.current
    if (el == null) return
    disableBodyScroll(el)

    return () => enableBodyScroll(el)
  }, [rootEl])

  const childArray = Children.toArray(children)
  const currentStep = _.clamp(step, 0, childArray.length - 1)
  const currentChild = childArray[currentStep] as SceneElement

  const includedTransforms = (
    Object.entries(currentChild.props) as Array<[string, number]>
  )
    .filter(([kind]) => VALID_TRANSFORMS.includes(kind))
    .reverse()
    .map(([kind, amount]) => {
      const inverse = kind.includes('scale') ? 1 / amount : amount * -1

      return [kind, inverse]
    })

  const allTransforms = Object.fromEntries(includedTransforms)

  return (
    <Root ref={ rootEl }>
      <Proscenium>
        <StageRoot
          animate={ allTransforms }
          transformTemplate={ transforms => {
            return Object.entries(transforms)
              .map(([kind, value]) => `${ kind }(${ value })`)
              .join(' ')
          } }
          transition={{
            type: 'spring',
            damping: 10,
            stiffness: 100,
            mass: 1.5,
          }}>
          { children }
        </StageRoot>
      </Proscenium>
    </Root>
  )
}
