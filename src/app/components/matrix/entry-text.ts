import styled from 'styled-components'

export const EntryText = styled.article`
  ${ ({ theme }) => theme.typeface.primary({ fontSize: 4 }) }

  padding: 2rem;

  &&& > strong {
    font-weight: 700;
  }
`
