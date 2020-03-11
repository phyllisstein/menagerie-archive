import { Body } from 'app/styles/global'
import { FunctionComponent } from 'react'
import { Router } from './routes'
import theme from 'app/styles/theme'
import { ThemeProvider } from 'styled-components'

export const App: FunctionComponent = () => (
  <ThemeProvider theme={ theme }>
    <>
      <Body />

      <Router />
    </>
  </ThemeProvider>
)
