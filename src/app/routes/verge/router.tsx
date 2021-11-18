import { FunctionComponent } from 'react'
import { Route, Routes } from 'react-router'

export const VergeRoute: FunctionComponent = () => {
  return (
    <Routes>
      <Route path='making-it-work/*' />
    </Routes>
  )
}
