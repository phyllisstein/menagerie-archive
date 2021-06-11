import styled from 'styled-components'

export const Original = styled.span`
  padding: 0 1ex;
  color: ${({ theme }) => theme.palette.css.celery400};
`

export const Replacement = styled.span`
  padding: 0 1ex;

  color: ${({ theme }) => theme.palette.css.red400};
  text-decoration: line-through;
`
