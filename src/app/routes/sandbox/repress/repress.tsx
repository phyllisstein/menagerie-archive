import { Repress, Repressed } from 'app/components'
import type { ReactElement } from 'react'

export function RepressSandboxRoute(): ReactElement {
  return (
    <Repress>
      <Repressed />
    </Repress>
  )
}
