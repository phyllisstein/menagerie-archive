import { ReactElement } from 'react'
import styled from 'styled-components'

const SuperiorBase = styled.span`
    padding: 0 1ex;
    color: ${ ({ theme }) => theme.palette.css.celery400 };
`

interface SuperiorProps {
    children: string
}

export function Superior ({ children }: SuperiorProps): ReactElement {
    return <SuperiorBase>{ children }</SuperiorBase>
}
