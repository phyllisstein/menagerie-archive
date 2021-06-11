import { Navigate, Route, Routes } from 'react-router'
import { DorianVariorumRoute } from './dorian'
import { ReactElement } from 'react'

export function VariorumSandboxRoute(): ReactElement {
  return (
    <Routes>
      <Route element={ <Navigate to='dorian' /> } path='/' />
      <Route element={ <DorianVariorumRoute /> } path='dorian' />
    </Routes>
  )
}
