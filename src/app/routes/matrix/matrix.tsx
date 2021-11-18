import { ReactElement } from 'react'
import { Route, Routes } from 'react-router'

import { ApprovalRoute } from './approval'

export function SandboxRoute (): ReactElement {
  return (
    <Routes>
      <Route index element={ <ApprovalRoute /> } />
    </Routes>
  )
}
