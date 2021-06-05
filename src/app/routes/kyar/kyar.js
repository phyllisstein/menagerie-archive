import { Route, Routes } from 'react-router'
import { MainKyarRoute } from './main'

export function KyarRoute() {
  return (
    <Routes>
      <Route element={ <MainKyarRoute /> } />
    </Routes>
  )
}
