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

  ${ ({ theme }) =>
    theme.responsive.greaterThan(
      'md',
      css`
        padding: 2rem;
      `,
    ) }
`

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`

export const MarginP = styled(P)`
  ${ ({ theme }) =>
    theme.typeface.primary({
      fontSize: 7,
      leadingBottom: 1,
      leadingTop: 3,
      lineHeight: 9,
    }) }
  
  font-style: italic;

  & > em {
    font-style: normal;
  }
`

export const Sidebar = styled.aside`
  grid-column: span 1;
`
