import { css, SimpleInterpolation } from 'styled-components'
import { pxToRem } from 'styled-media-query'

const breakpoints = pxToRem(
  {
    lg: '1056px',
    max: '1584px',
    md: '672px',
    sm: '320px',
    xlg: '1312px',
  },
  16,
)

type Breakpoint = keyof typeof breakpoints

export const between = (
  start: Breakpoint,
  end: Breakpoint,
  style: SimpleInterpolation,
) => css`
  @media screen and (min-width: ${ breakpoints[
    start
  ] }) and (max-width: ${ breakpoints[end] }) {
    ${ style }
  }
`

export const greaterThan = (
  breakpoint: Breakpoint,
  style: SimpleInterpolation,
) => css`
  @media screen and (min-width: ${ breakpoints[breakpoint] }) {
    ${ style }
  }
`

export const lessThan = (
  breakpoint: Breakpoint,
  style: SimpleInterpolation,
) => css`
  @media screen and (max-width: ${ breakpoints[breakpoint] }) {
    ${ style }
  }
`
