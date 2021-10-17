import { Route, Routes } from 'react-router'
import { FunctionComponent } from 'react'
import { WorkRoute } from './making-it-work'

export const PackageRoute: FunctionComponent = () => {
  return (
    <Routes>
      <Route element={ <WorkRoute /> } />
    </Routes>
  )
}
