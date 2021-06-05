import { Route, Routes } from 'react-router'
import { StageSandboxRoute } from './stage'

export function StageSandboxRouter() {
  return (
    <Routes>
      <Route element={ <StageSandboxRoute /> } />
    </Routes>
  )
}
