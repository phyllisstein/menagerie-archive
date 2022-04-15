import { css } from '@emotion/react'

import {
  accent as plumberAccent,
  caslon as plumberCaslon,
  millerDisplay as plumberMillerDisplay,
  millerText as plumberMillerText,
  primary as plumberPrimary,
  PlumberProps,
} from './plumber'

export const accentFamily = css`
  font-family: 'Adobe Clean Serif', Georgia, Garamond, 'Times New Roman',
    'Times', serif !important;
`

export const accent = (plumberOpts: Partial<PlumberProps> = {}) => css`
  ${ accentFamily }
  ${ plumberAccent(plumberOpts) }
`

export const caslonFamily = css`
  font-family: 'Adobe Caslon Pro', Georgia, Garamond, 'Times New Roman', 'Times',
    serif !important;
`

export const caslon = (plumberOpts: Partial<PlumberProps> = {}) => css`
  ${ caslonFamily }
  ${ plumberCaslon(plumberOpts) }
`

export const millerDisplayFamily = css`
  font-family: 'Miller Display', Georgia, Garamond, 'Times New Roman', 'Times',
    serif;
`

export const millerDisplay = (plumberOpts: Partial<PlumberProps> = {}) => css`
  ${ millerDisplayFamily }
  ${ plumberMillerDisplay(plumberOpts) }
`

export const millerTextFamily = css`
  font-family: 'Miller Text', Georgia, Garamond, 'Times New Roman', 'Times',
    serif;
`

export const millerText = (plumberOpts: Partial<PlumberProps> = {}) => css`
  ${ millerTextFamily }
  ${ plumberMillerText(plumberOpts) }
`

export const primaryFamily = css`
  font-family: 'Adobe Clean', -apple-system, BlinkMacSystemFont,
    'Helvetica Neue', Helvetica, sans-serif !important;
`

export const primary = (plumberOpts: Partial<PlumberProps> = {}) => css`
  ${ primaryFamily }
  ${ plumberPrimary(plumberOpts) }
`
