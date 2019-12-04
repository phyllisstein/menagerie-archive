import { Fonts, Globals, theme } from 'app/styles'
import { Route, Switch } from 'react-router'
import { Docker } from './routes'
import React from 'react'
import { ThemeProvider } from 'styled-components'

export const App = () => (
  <ThemeProvider theme={ theme }>
    <>
      <Fonts.GuardianEgyptian />
      <Fonts.GuardianSans />
      <Fonts.PragmataPro />
      <Globals.Body />
      <Switch>
        <Route path='/docker/*'>
          <Docker />
        </Route>
      </Switch>
    </>
  </ThemeProvider>
)
