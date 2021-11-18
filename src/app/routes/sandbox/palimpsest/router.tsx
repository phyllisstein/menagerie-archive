import { ReactElement } from 'react'
import { Route, Routes } from 'react-router'

import { PalimpsestSandboxRoute } from './palimpsest'

export function PalimpsestSandboxRouter (): ReactElement {
  return (
    <Routes>
      <Route index element={ <PalimpsestSandboxRoute /> } />
    </Routes>
  )
}
