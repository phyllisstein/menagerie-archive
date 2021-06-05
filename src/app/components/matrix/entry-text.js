import styled from 'styled-components'

export const EntryText = styled.article`
  ${ ({ theme }) => theme.typeface.primary({ fontSize: 1 }) }

  &&& > strong {
    font-weight: 700;
  }
`
