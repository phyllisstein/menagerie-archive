import { Route, Routes } from 'react-router'

import * as TwentyTwo from './2022'

export function TalkRoutes () {
  return (
    <Routes>
      <Route path='2022'>
        <Route element={ <TwentyTwo.BoundariesTalk /> } path='boundaries' />
      </Route>
    </Routes>
  )
}
