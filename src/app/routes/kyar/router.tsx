import { Route, Routes } from 'react-router'
import { MainKyarRoute } from './kyar'
import { ReactElement } from 'react'

export function KyarRouter (): ReactElement {
  return (
    <Routes>
      <Route element={ <MainKyarRoute /> } />
    </Routes>
  )
}
