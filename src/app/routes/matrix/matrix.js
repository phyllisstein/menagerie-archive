import { Navigate, Route, Routes } from 'react-router'
import { ApprovalRoute } from './approval'

export function SandboxRoute() {
  return (
    <Routes>
      <Route element={ <Navigate to='1' /> } path='approval' />
      <Route element={ <ApprovalRoute /> } path='approval/:step' />
    </Routes>
  )
}
