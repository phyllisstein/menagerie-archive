import { FunctionComponent } from 'react'
import { Route, Routes } from 'react-router'

import { Colors } from './colors'
import { Parasol } from './parasol'

export const SundayRoutes: FunctionComponent = () => (
    <Routes>
        <Route element={ <Parasol /> } path='parasol' />
        <Route element={ <Colors /> } path='colors' />
    </Routes>
)
