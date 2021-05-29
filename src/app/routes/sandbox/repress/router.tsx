import { Route, Routes } from 'react-router'
import type { ReactElement } from 'react'
import { RepressSandboxRoute } from './repress'

export function RepressSandboxRouter(): ReactElement {
  return (
    <Routes>
      <Route element={ <RepressSandboxRoute /> } />
    </Routes>
  )
}
