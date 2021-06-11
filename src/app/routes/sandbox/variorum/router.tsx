import { Route, Routes } from 'react-router'
import { ReactElement } from 'react'
import { VariorumSandboxRoute } from './variorum'

export function VariorumSandboxRouter (): ReactElement {
  return (
    <Routes>
      <Route element={<VariorumSandboxRoute />} />
    </Routes>
  )
}
