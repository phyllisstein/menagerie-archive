import { FunctionComponent } from 'react'
import { Route, Routes } from 'react-router'

import { Colors } from './colors'
import { Sunday } from './sunday'

export const SundayRoutes: FunctionComponent = () => (
  <Routes>
    <Route index element={ <Sunday /> } />
    <Route element={ <Colors /> } path='colors' />
  </Routes>
)
