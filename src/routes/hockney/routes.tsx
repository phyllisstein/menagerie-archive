import { ReactElement } from 'react'
import { Route, Routes } from 'react-router'

import { ThreeD } from './three-d'

export function HockneyRoutes (): ReactElement {
  return (
    <Routes>
      <Route element={ <ThreeD /> } path='3d' />
    </Routes>
  )
}
