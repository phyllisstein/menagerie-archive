import { GuardianEgyptian, GuardianSans, PragmataPro } from 'app/styles/fonts'
import React, { FunctionComponent } from 'react'
import { Body } from 'app/styles/global'
import { Router } from './routes'
import theme from 'app/styles/theme'
import { ThemeProvider } from 'styled-components'

export const App: FunctionComponent = () => (
  <ThemeProvider theme={ theme }>
    <>
      <GuardianEgyptian />
      <GuardianSans />
      <PragmataPro />

      <Body />

      <Router />
    </>
  </ThemeProvider>
)
