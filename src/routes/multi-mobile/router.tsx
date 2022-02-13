import { ReactElement } from 'react'
import { Route, Routes } from 'react-router'
import { ThemeProvider } from 'styled-components'

import { AOC } from './aoc'

import { Theme } from 'styles/theme'

const setMillerTypeface = (parentTheme: Theme): Theme => {
  const mergedTheme = Object.assign({}, parentTheme, {
    typeface: {
      ...parentTheme.typeface,
      accent: parentTheme.typeface.millerDisplay,
      accentFamily: parentTheme.typeface.millerDisplayFamily,
      primary: parentTheme.typeface.millerText,
      primaryFamily: parentTheme.typeface.millerTextFamily,
    },
  })

  return mergedTheme
}

export function MultiMobileRoutes (): ReactElement {
  return (
    <ThemeProvider theme={ setMillerTypeface }>
      <Routes>
        <Route element={ <AOC /> } path='aoc' />
      </Routes>
    </ThemeProvider>
  )
}
