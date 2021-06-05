import { Route, Routes } from 'react-router'
import type { ReactElement } from 'react'
import { StageSandboxRoute } from './stage'

export function StageSandboxRouter(): ReactElement {
  return (
    <Routes>
      <Route element={ <StageSandboxRoute /> } />
    </Routes>
  )
}
