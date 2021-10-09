import { Route, Routes } from 'react-router'
import { FunctionComponent } from 'react'
import { Jatte } from './jatte'

export const JatteRoutes: FunctionComponent = () => (
  <Routes>
    <Route element={ <Jatte /> } />
  </Routes>
)
