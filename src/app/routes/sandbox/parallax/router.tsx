import { ReactElement } from 'react'
import { Route, Routes } from 'react-router'

import { Kyar } from './kyar'
import { Layered } from './layered'
import { ParallaxSandboxRoute } from './parallax'

export function ParallaxSandboxRouter (): ReactElement {
  return (
    <Routes>
      <Route index element={ <ParallaxSandboxRoute /> } />
      <Route element={ <Layered /> } path='layered' />
      <Route element={ <Kyar /> } path='kyar' />
    </Routes>
  )
}
