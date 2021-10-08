import { Route, Routes } from 'react-router'
import { ReactElement } from 'react'

export function VergeRoute (): ReactElement {
  return (
    <Routes>
      <Route path='making-it-work/*' />
    </Routes>
  )
}
