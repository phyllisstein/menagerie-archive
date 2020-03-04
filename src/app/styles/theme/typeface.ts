import {
  accent as plumberAccent,
  mono as plumberMono,
  PlumberOpts,
  primary as plumberPrimary,
} from './plumber'
import { css } from 'styled-components'

export const accent = (plumberOpts: PlumberOpts = {}) => css`
  ${ accentFamily }
  ${ plumberAccent(plumberOpts) }
`

export const accentFamily = css`
  font-family: 'Guardian Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const mono = (plumberOpts: PlumberOpts = {}) => css`
  ${ monoFamily }
  ${ plumberMono(plumberOpts) }
`

export const monoFamily = css`
  font-family: 'PragmataPro', SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
`

export const primary = (plumberOpts: PlumberOpts = {}) => css`
  ${ primaryFamily }
  ${ plumberPrimary(plumberOpts) }
`

export const primaryFamily = css`
  font-family: 'Guardian Egyptian', Garamond, 'Times New Roman', 'Times', serif;
`
