import { css } from 'styled-components'

import {
  accent as plumberAccent,
  millerDisplay as plumberMillerDisplay,
  millerText as plumberMillerText,
  primary as plumberPrimary,
} from './plumber'

export const accentFamily = css`
  font-family: 'Adobe Clean Serif', Georgia, Garamond, 'Times New Roman',
    'Times', serif !important;
`

export const accent = (plumberOpts = {}) => css`
  ${ accentFamily }
  ${ plumberAccent(plumberOpts) }
`

export const millerDisplayFamily = css`
  font-family: 'Miller Display', Georgia, Garamond, 'Times New Roman', 'Times',
    serif;
`

export const millerDisplay = (plumberOpts = {}) => css`
  ${ millerDisplayFamily }
  ${ plumberMillerDisplay(plumberOpts) }
`

export const millerTextFamily = css`
  font-family: 'Miller Text', Georgia, Garamond, 'Times New Roman', 'Times',
    serif;
`

export const millerText = (plumberOpts = {}) => css`
  ${ millerTextFamily }
  ${ plumberMillerText(plumberOpts) }
`

export const primaryFamily = css`
  font-family: 'Adobe Clean', -apple-system, BlinkMacSystemFont,
    'Helvetica Neue', Helvetica, sans-serif !important;
`

export const primary = (plumberOpts = {}) => css`
  ${ primaryFamily }
  ${ plumberPrimary(plumberOpts) }
`
