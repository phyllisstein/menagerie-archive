import { Navigate, Route, Routes } from 'react-router'
import { CubeImpressSandboxRoute } from './cube'
import { FreestyleImpressSandboxRoute } from './freestyle'
import type { ReactElement } from 'react'

export function ImpressSandboxRoute(): ReactElement {
  return (
    <Routes>
      <Route element={ <Navigate to='1' /> } path='cube' />
      <Route element={ <CubeImpressSandboxRoute /> } path='cube/:step' />
      <Route element={ <Navigate to='1' /> } path='freestyle' />
      <Route
        element={ <FreestyleImpressSandboxRoute /> }
        path='freestyle/:step' />
    </Routes>
  )
}
