import { Navigate, Route, Routes } from 'react-router'
import { Bluey } from './bluey'
import { Hilly } from './hilly'
import { ReactElement } from 'react'

export function SwoopSandboxRouter (): ReactElement {
  return (
    <Routes>
      <Route element={ <Navigate replace to='hilly' /> } path='/' />
      <Route element={ <Hilly /> } path='/hilly' />
      <Route element={ <Bluey /> } path='/bluey' />
    </Routes>
  )
}
