import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { P } from 'components/markup'

export const Container = styled.section`
  display: grid;
  grid-template-columns: 3fr 2fr 1fr;
`

export const Content = styled.article`
  grid-column: span 2;
  min-height: 100vh;
  padding: 0 1rem;

  ${({ theme }) =>
    theme.responsive.greaterThan(
      'md',
      css`
        padding: 2rem;
      `,
    )}
`

export const MarginP = styled(P)`
  ${({ theme }) =>
    theme.typeface.primary({
      fontSize: 8,
      leadingBottom: 0,
      leadingTop: 0,
      lineHeight: 9,
    })}

  margin: 0;
  padding: 0;
  
  font-style: italic;

  & > em {
    font-style: normal;
  }
`

export const Sidebar = styled.aside`
  grid-column: span 1;
`
