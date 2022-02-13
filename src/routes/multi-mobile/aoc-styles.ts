import styled from '@emotion/styled'

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

export const Content = styled.article`
  grid-column: span 2;
  min-height: 100vh;
  padding: 0 1rem 0 0;

  border-right: 1px solid
    ${ props => props.theme.paletteSpectrumDark.css.gray500 };
`

export const Sidebar = styled.aside`
  grid-column: span 1;
`
