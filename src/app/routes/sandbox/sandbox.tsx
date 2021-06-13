import { Route, Routes } from 'react-router'
import { ImpressSandboxRoute } from './impress'
import { ParallaxSandboxRoute } from './parallax'
import { ReactElement } from 'react'
import { StageSandboxRouter } from './stage'
import { PalimpsestSandboxRouter } from './palimpsest'

export function SandboxRoute (): ReactElement {
  return (
    <Routes>
      <Route element={ <ImpressSandboxRoute /> } path='impress/*' />
      <Route element={ <ParallaxSandboxRoute /> } path='parallax/*' />
      <Route element={ <StageSandboxRouter /> } path='stage/*' />
      <Route element={ <PalimpsestSandboxRouter /> } path='palimpsest/*' />
    </Routes>
  )
}
