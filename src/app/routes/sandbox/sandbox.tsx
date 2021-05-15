import { Route, Routes } from 'react-router'
import { ImpressSandboxRoute } from './impress'
import { PerspectiveSandboxRoute } from './perspective'
import type { ReactElement } from 'react'

export function SandboxRoute(): ReactElement {
  return (
    <Routes>
      <Route element={ <ImpressSandboxRoute /> } path='impress/*' />
      <Route element={ <PerspectiveSandboxRoute /> } path='perspective' />
    </Routes>
  )
}
