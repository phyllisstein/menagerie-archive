import { Route, Routes } from 'react-router'
import { ApprovalRoute } from './approval'
import { ReactElement } from 'react'

export function SandboxRoute (): ReactElement {
  return (
    <Routes>
      <Route element={ <ApprovalRoute /> } />
    </Routes>
  )
}
