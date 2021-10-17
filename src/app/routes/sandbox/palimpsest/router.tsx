import { Route, Routes } from 'react-router'
import { ReactElement } from 'react'
import { PalimpsestSandboxRoute } from './palimpsest'

export function PalimpsestSandboxRouter (): ReactElement {
  return (
    <Routes>
      <Route index element={ <PalimpsestSandboxRoute /> } />
    </Routes>
  )
}
