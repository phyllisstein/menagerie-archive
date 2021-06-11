import { accent as plumberAccent, primary as plumberPrimary } from './plumber'
import { css } from 'styled-components'

export const accent = (plumberOpts = {}) => css`
  ${accentFamily}
  ${plumberAccent(plumberOpts)}
`

export const accentFamily = css`
  font-family: 'Adobe Clean Serif', Georgia, Garamond, 'Times New Roman',
    'Times', serif;
`

export const primary = (plumberOpts = {}) => css`
  ${primaryFamily}
  ${plumberPrimary(plumberOpts)}
`

export const primaryFamily = css`
  font-family: 'Adobe Clean', -apple-system, BlinkMacSystemFont,
    'Helvetica Neue', Helvetica, sans-serif;
`
