import { Repress, Repressed } from 'app/components'
import type { ReactElement } from 'react'

export function RepressSandboxRoute(): ReactElement {
  return (
    <Repress>
      <Repressed
        transform={ [
          'scaleZ(1.5)',
          'translateX(50px)',
          'rotateX(45deg)',
          'rotateZ(45deg)',
          'translateZ(250px)',
          'rotateY(90deg)',
          'translateY(125px)',
          'scale(2)',
          'scaleY(3)',
          'scaleX(-2)',
        ] } />
    </Repress>
  )
}
