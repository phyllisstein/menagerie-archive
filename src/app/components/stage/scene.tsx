import {
  Children,
  CSSProperties,
  FunctionComponent,
  useContext,
  useEffect,
  useLayoutEffect,
} from 'react'
import { getValueAndUnit } from 'polished'
import R from 'ramda'
import { Root } from './scene-styles'
import { StageTransform } from './stage'
import { Transform } from './transform'

const mergeTransforms = R.mergeWithKey(
  (key: string, lhs: number, rhs: number): number => {
    console.log({ key, lhs, rhs })
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

const stringifyTransform = ([kind, amount]: [
  string,
  number | string,
]): string => {
  if (kind.includes('translate')) {
    return `${ kind }(${ amount }px)`
  }

  if (kind.includes('rotate')) {
    return `${ kind }(${ amount }deg)`
  }

  return `${ kind }(${ amount })`
}

const stringifyMirrorTransform = ([kind, amount]: [
  string,
  number | string,
]): string => {
  if (kind.includes('translate')) {
    return `${ kind }(${ -amount }px)`
  }

  if (kind.includes('rotate')) {
    return `${ kind }(${ -amount }deg)`
  }
}

const createTransform = R.pipe(
  R.toPairs,
  R.filter(
    ([key]) =>
      key.includes('rotate') ||
      key.includes('scale') ||
      key.includes('translate'),
  ),
  R.map(stringifyTransform),
  R.filter(Boolean),
  R.join(' '),
)
const createMirrorTransform = R.pipe(
  R.toPairs,
  R.filter(([kind]) => kind.includes('rotate') || kind.includes('translate')),
  R.map(([kind, amount]) => [kind, -amount]),
  R.fromPairs,
)

export interface Props {
  active?: boolean
  layout?: boolean
  style?: CSSProperties
}

export const Scene: FunctionComponent<Props> = function Scene (props) {
  const {
    active,
    children: allChildren,
    layout,
    style: styleProp = {},
    ...rest
  } = props

  const registerTransform = useContext(StageTransform)

  const { mirrorTransform, renderedChildren, scale, transform } =
    Children.toArray(allChildren).reduce(
      (acc, child) => {
        if (child.type === Transform && child.props.scale) {
          acc.scale = child.props.scale
        } else if (child.type === Transform) {
          acc.transform.push(createTransform(child.props))
          acc.mirrorTransform = mergeTransforms(
            acc.mirrorTransform,
            createMirrorTransform(child.props),
          )
        } else {
          acc.renderedChildren.push(child)
        }

        return acc
      },
      {
        mirrorTransform: {},
        renderedChildren: [],
        scale: 1,
        transform: ['translate(-50%, -50%)'],
      },
    )

  useEffect(() => {
    if (!registerTransform || layout) return

    registerTransform({
      scale: 1 / scale,
      translate: mirrorTransform,
    })
  }, [])

  return (
    <Root { ...rest } style={{ ...styleProp, transform: transform.join(' ') }}>
      { renderedChildren }
    </Root>
  )
}
