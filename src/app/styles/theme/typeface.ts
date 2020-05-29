import {css} from 'styled-components'
import {
  accent as plumberAccent,
  hed as plumberHed,
  primary as plumberPrimary,
} from './plumber'

export const accent = (plumberOpts = {}) => css`
  ${accentFamily}
  ${plumberAccent(plumberOpts)}
`

export const accentFamily = css`
  font-family: 'Egyptienne', Georgia, Garamond, 'Times New Roman', 'Times',
    serif;
`

export const hed = (plumberOpts = {}) => css`
  ${hedFamily}
  ${plumberHed(plumberOpts)}
`

export const hedFamily = css`
  font-family: 'Miller Display', Georgia, Garamond, 'Times New Roman', 'Times',
    serif;
`

export const primary = (plumberOpts = {}) => css`
  ${primaryFamily}
  ${plumberPrimary(plumberOpts)}
`

export const primaryFamily = css`
  font-family: 'Miller Text', Georgia, Garamond, 'Times New Roman', 'Times',
    serif;
`
