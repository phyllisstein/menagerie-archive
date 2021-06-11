import styled from 'styled-components'

export const P = styled.p`
  ${({ theme }) => theme.typeface.primary({ fontSize: 4, leadingBottom: 1 })}
`
