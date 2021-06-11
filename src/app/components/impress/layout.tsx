import _ from 'lodash'
import { oneLine } from 'common-tags'
import { Root } from './layout-styles'

const COORDINATE_DEFAULTS = {
  x: 0,
  y: 0,
  z: 0
}

export const Layout = ({
  children,
  position = {},
  style,
  rotation = {},
  scale = 1,
  ...props
}) => {
  const positionWithDefaults = _.defaults(position, COORDINATE_DEFAULTS)
  const rotationWithDefaults = _.defaults(rotation, COORDINATE_DEFAULTS)

  const transform = oneLine`
    translate(-50%, -50%)
    rotateX(${rotationWithDefaults.x}deg)
    rotateY(${rotationWithDefaults.y}deg)
    rotateZ(${rotationWithDefaults.z}deg)
    translate3d(${positionWithDefaults.x}px, ${positionWithDefaults.y}px, ${positionWithDefaults.z}px)
    scale(${scale})
  `

  return (
    <Root {...props} style={{ ...style, transform }}>
      {children}
    </Root>
  )
}
