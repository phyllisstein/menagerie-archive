import { Route, Routes } from 'react-router-dom'
import { FunctionComponent } from 'react'
import { Style } from './style'

export const Router: FunctionComponent = () =>
  <Routes>
    <Route element={ <Style /> } path='style/*' />
  </Routes>
