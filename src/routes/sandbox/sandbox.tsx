import { Route, Routes } from 'react-router'
import { PerspectiveRoute } from './perspective'
import type { ReactElement } from 'react'

export function SandboxRoute(): ReactElement {
  return (
    <Routes>
      <Route element={ <PerspectiveRoute /> } path='perspective' />
    </Routes>
  )
}
