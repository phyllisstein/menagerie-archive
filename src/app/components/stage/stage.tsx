import { Children, ReactElement, ReactNode, useEffect, useRef } from 'react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { Proscenium, Root, StageRoot } from './stage-styles'
import _ from 'lodash'
import { getValueAndUnit } from 'polished'
import R from 'ramda'
import { useSpring } from 'react-spring'

const VALID_TRANSFORMS = [
  'rotate',
  'rotateX',
  'rotateY',
  'rotateZ',
  'scale',
  'scaleX',
  'scaleY',
  'scaleZ',
  'translate',
  'translateX',
  'translateY',
  'translateZ',
]

interface Props {
  children: ReactNode
  step: number
}

export function Stage({ children, step = 1 }: Props): ReactElement {
  const rootEl = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = rootEl.current
    if (!el) return
    disableBodyScroll(el)

    return () => enableBodyScroll(el)
  }, [rootEl])

  const childArray = Children.toArray(children)
  const currentStep = _.clamp(step, 0, childArray.length - 1)
  const currentChild = childArray[currentStep]
  const transforms = R.pipe(
    R.pick(VALID_TRANSFORMS),
    R.map(def => {
      const [value, unit] = getValueAndUnit(def)
      return unit
        ? value * -1
        : 1 / value
    }),
  )(currentChild.props)

  const styles = useSpring({
    to: {
      ...transforms,
    },
  })

  return (
    <Root ref={ rootEl }>
      <Proscenium>
        <StageRoot animate={ transforms }>
          { children }
        </StageRoot>
      </Proscenium>
    </Root>
  )
}
