import { Route, Routes } from 'react-router'
import { MainKyarRoute } from './main'
import type { ReactElement } from 'react'

export function KyarRoute(): ReactElement {
  return (
    <Routes>
      <Route element={ <MainKyarRoute /> } />
    </Routes>
  )
}
