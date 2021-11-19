import { ReactElement } from 'react'
import { Route, Routes } from 'react-router'

import { PalimpsestRoutes } from './palimpsest'
import { ParallaxRoutes } from './parallax'
import { SwoopRoutes } from './swoop'

export function SandboxRoutes (): ReactElement {
  return (
    <Routes>
      <Route element={ <ParallaxRoutes /> } path='parallax/*' />
      <Route element={ <PalimpsestRoutes /> } path='palimpsest/*' />
      <Route element={ <SwoopRoutes /> } path='swoop/*' />
    </Routes>
  )
}
