import { Route, Routes } from 'react-router'
import { ImpressSandboxRoute } from './impress'
import { ParallaxSandboxRoute } from './parallax'
import { ReactElement } from 'react'
import { StageSandboxRouter } from './stage'
import { VariorumRouter } from './variorum'

export function SandboxRoute(): ReactElement {
  return (
    <Routes>
      <Route element={ <ImpressSandboxRoute /> } path='impress/*' />
      <Route element={ <ParallaxSandboxRoute /> } path='parallax/*' />
      <Route element={ <StageSandboxRouter /> } path='stage/*' />
      <Route element={ <VariorumRouter /> } path='variorum/*' />
    </Routes>
  )
}
