import { ReactElement } from 'react'
import { Route, Routes } from 'react-router'

import { Kyar } from './kyar'

export function DallowayRoutes (): ReactElement {
  return (
    <Routes>
      <Route element={ <Kyar /> } path='kyar' />
    </Routes>
  )
}
