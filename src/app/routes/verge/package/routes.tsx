import { FunctionComponent } from 'react'
import { Route, Routes } from 'react-router'

import { WorkRoute } from './making-it-work'

export const PackageRoutes: FunctionComponent = () => {
  return (
    <Routes>
      <Route element={ <WorkRoute /> } />
    </Routes>
  )
}
