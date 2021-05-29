import { Route, Routes } from 'react-router'
import { ImpressSandboxRoute } from './impress'
import { ParallaxSandboxRoute } from './parallax'
import type { ReactElement } from 'react'
import { RepressSandboxRouter } from './repress'

export function SandboxRoute(): ReactElement {
  return (
    <Routes>
      <Route element={ <ImpressSandboxRoute /> } path='impress/*' />
      <Route element={ <ParallaxSandboxRoute /> } path='parallax/*' />
      <Route element={ <RepressSandboxRouter /> } path='repress/*' />
    </Routes>
  )
}
