import { Route, Routes } from 'react-router'
import { ImpressSandboxRoute } from './impress'
import { ParallaxSandboxRoute } from './parallax'
import type { ReactElement } from 'react'
import { StageSandboxRouter } from './stage'

export function SandboxRoute(): ReactElement {
  return (
    <Routes>
      <Route element={ <ImpressSandboxRoute /> } path='impress/*' />
      <Route element={ <ParallaxSandboxRoute /> } path='parallax/*' />
      <Route element={ <StageSandboxRouter /> } path='stage/*' />
    </Routes>
  )
}
