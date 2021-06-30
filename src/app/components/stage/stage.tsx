import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import _ from 'lodash'
import { Children, ReactElement, ReactNode, useEffect, useRef } from 'react'
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

const INVERSE_TRANSFORMS = []

interface Props {
  children: ReactNode
  step: number
}

export function Stage ({ children, step = 1 }: Props): ReactElement {
  const rootEl = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = rootEl.current
    if (el == null) return
    disableBodyScroll(el)

    return () => enableBodyScroll(el)
  }, [rootEl])

  const childArray = Children.toArray(children)
  const currentStep = _.clamp(step, 0, childArray.length - 1)
  const currentChild = childArray[currentStep]

  const includedTransforms = Object.entries(currentChild.props)
    .filter(([kind]) => VALID_TRANSFORMS.includes(kind))
    .reverse()
    .map(([kind, amount]) => {
      const inverse = kind.includes('scale') ? 1 / amount : amount * -1

      return [kind, inverse]
    })

  const missingTransforms = VALID_TRANSFORMS.reduce<Array<[string, string]>>(
    (acc, transform) => {
      const [_match, name, axis] = Array.from(
        /^([a-z]+)([XYZ]?)$/.exec(transform) as string[],
      )
      const currentKeys = Object.keys(currentChild.props)
      const value = transform.includes('scale') ? 1 : 0

      if (
        axis === '' &&
        currentKeys.find(key => key.startsWith(name)) == null
      ) {
        const entry = [transform, value]
        acc.push(entry)
      }

      if (axis !== '' && currentKeys.find(key => key === axis) != null) {
        const entry = [transform, value]
        acc.push(entry)
      }

      return acc
    },
    [],
  )

  // const allTransforms = Object.fromEntries(
  //   includedTransforms.concat(missingTransforms),
  // )
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
