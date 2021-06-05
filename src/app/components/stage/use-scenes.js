import React, { Children } from 'react'
import { getValueAndUnit } from 'polished'
import R from 'ramda'

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

const positionChildren = (children) => {
  return children.reduce(
    ([clones, transforms], child) => {
      const transformProps = Object.entries(child.props).filter(([k]) =>
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
              const parentValue = unit ? value * -1 : 1 / value
              return `${ parentValue }${ unit }`
            })
            |> #.join(', ')

          return `${ kind }(${ parentValues })`
        })
        .reverse()
        .join(' ')

      const style = child.props.style
        ? { ...child.props.style, transform: childTransforms }
        : { transform: childTransforms }

      const clone = React.cloneElement(child, {
        style,
      })

      clones.push(clone)
      transforms.push(parentTransforms)

      return [clones, transforms]
    },
    [[], []],
  )
}

export const useScenes = (children) => {
  if (!children) {
    return []
  }

  const childArray = Children.toArray(children)
  const [clonedChildren, parentTransforms] = positionChildren(childArray)
  return [clonedChildren, parentTransforms]
}
