import React, {
  Children,
  FunctionComponentElement,
  ReactChild,
  ReactChildren,
  ReactFragment,
  ReactPortal,
} from 'react'
import _ from 'lodash'
import { getValueAndUnit } from 'polished'
import mem from 'mem'
import R from 'ramda'

type ChildArray = Array<ReactChild | ReactFragment | ReactPortal>
type Scene = FunctionComponentElement<SceneProps>
type ChildrenWithTransforms = [Scene[], string[]]

const VALID_TRANSFORMS = [
  'rotate',
  'rotate3d',
  'rotateX',
  'rotateY',
  'rotateZ',
  'scale',
  'scale3d',
  'scaleX',
  'scaleY',
  'scaleZ',
  'translate',
  'translate3d',
  'translateX',
  'translateY',
  'translateZ',
]

const positionChildren = (children: ChildArray): ChildrenWithTransforms => {
  return children.reduce(
    ([clones, transforms], child) => {
      const sc = child as unknown as Scene

      const transformProps = Object.entries(sc.props).filter(([k]) =>
        VALID_TRANSFORMS.includes(k),
      )

      const childTransforms = [['translate', '-50%, -50%'], ...transformProps]
        .map(([kind, amount]) => {
          return `${ kind }(${ amount })`
        })
        .join(' ')

      const parentTransforms = [['translate', '-50%, -50%'], ...transformProps]
        .map(([kind, amount]) => {
          const parentValues = amount
            |> #.split(', ')
            |> #.map(R.trim)
            |> #.map(getValueAndUnit.bind(null))
            |> #.map(([value, unit]) => {
              const parentValue = !!unit ? value * -1 : 1 / value
              return `${ parentValue }${ unit }`
            })
            |> #.join(', ')

          return `${ kind }(${ parentValues })`
        })
        .reverse()
        .join(' ')

      const style = sc.props.style
        ? { ...sc.props.style, transform: childTransforms }
        : { transform: childTransforms }

      const clone = React.cloneElement(sc, {
        style,
      })

      clones.push(clone)
      transforms.push(parentTransforms)

      return [clones, transforms]
    },
    [[], []],
  ) as any
}

export const useScenes = (children: ReactNode) => {
  if (!children) {
    return []
  }

  const childArray = Children.toArray(children)
  const [clonedChildren, parentTransforms] = positionChildren(childArray)
  return [clonedChildren, parentTransforms]
}
