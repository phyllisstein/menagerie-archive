import { Route, Routes } from 'react-router'
import { ReactElement } from 'react'
import { StageSandboxRoute } from './stage'

export function StageSandboxRouter (): ReactElement {
  return (
    <Routes>
      <Route index element={ <StageSandboxRoute /> } />
    </Routes>
  )
}
