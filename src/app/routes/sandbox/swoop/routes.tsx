import { ReactElement } from 'react'
import { Navigate, Route, Routes } from 'react-router'

import { Bluey } from './bluey'
import { Hilly } from './hilly'

export function SwoopRoutes (): ReactElement {
    return (
        <Routes>
            <Route index element={ <Navigate replace to='hilly' /> } />
            <Route element={ <Hilly /> } path='hilly' />
            <Route element={ <Bluey /> } path='bluey' />
        </Routes>
    )
}
