import { Route, Routes } from 'react-router'
import { FunctionComponent } from 'react'

export const VergeRoute: FunctionComponent = () => {
  return (
    <Routes>
      <Route path='making-it-work/*' />
    </Routes>
  )
}
