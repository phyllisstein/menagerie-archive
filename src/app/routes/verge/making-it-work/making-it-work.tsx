import { Route, Routes } from 'react-router'
import { Package } from './package'
import { ReactElement } from 'react'

export function WorkRoute (): ReactElement {
  return (
    <Routes>
      <Route element={ <Package /> } />
    </Routes>
  )
}
