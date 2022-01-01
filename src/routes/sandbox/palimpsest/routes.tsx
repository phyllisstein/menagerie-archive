import { ReactElement } from 'react'
import { Route, Routes } from 'react-router'

import { PalimpsestRoute } from './palimpsest'

export function PalimpsestRoutes (): ReactElement {
  return (
    <Routes>
      <Route index element={ <PalimpsestRoute /> } />
    </Routes>
  )
}
