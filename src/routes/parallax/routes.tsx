import { ReactElement } from 'react'
import { Route, Routes } from 'react-router'

import { Layered } from './layered'
import { Parallax } from './parallax'

export function ParallaxRoutes (): ReactElement {
  return (
    <Routes>
      <Route index element={ <Parallax /> } />
      <Route element={ <Layered /> } path='layered' />
    </Routes>
  )
}
