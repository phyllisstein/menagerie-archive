import styled from '@emotion/styled'
import { ReactElement } from 'react'

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
