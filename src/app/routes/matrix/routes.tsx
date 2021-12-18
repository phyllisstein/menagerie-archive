import { ReactElement } from 'react'
import { Route, Routes } from 'react-router'

import { ApprovalMatrix } from './approval'

export function MatrixRoutes (): ReactElement {
    return (
        <Routes>
            <Route index element={ <ApprovalMatrix /> } />
        </Routes>
    )
}
