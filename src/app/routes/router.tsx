import React, { FunctionComponent } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Style } from './style'

export const Router: FunctionComponent = () =>
  <Routes>
    <Route element={ <Style /> } path='/style' />
  </Routes>
