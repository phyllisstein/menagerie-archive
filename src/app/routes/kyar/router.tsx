import { ReactElement } from 'react'
import { Route, Routes } from 'react-router'
import { MainKyarRoute } from './kyar'

export function KyarRouter (): ReactElement {
  return (
    <Routes>
      <Route element={ <MainKyarRoute /> } />
    </Routes>
  )
}
