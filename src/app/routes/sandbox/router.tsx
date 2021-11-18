import { ReactElement } from 'react'
import { Route, Routes } from 'react-router'

import { PalimpsestSandboxRouter } from './palimpsest'
import { ParallaxSandboxRouter } from './parallax'
import { SwoopSandboxRouter } from './swoop'

export function SandboxRoute (): ReactElement {
  return (
    <Routes>
      <Route element={ <ParallaxSandboxRouter /> } path='parallax/*' />
      <Route element={ <PalimpsestSandboxRouter /> } path='palimpsest/*' />
      <Route element={ <SwoopSandboxRouter /> } path='swoop/*' />
    </Routes>
  )
}
