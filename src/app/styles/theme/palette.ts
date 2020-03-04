import chroma, { Color } from 'chroma-js'
import R from 'ramda'

export const js = {
  burntSienna: chroma('#ee7e59'),
  candyPink: chroma('#ec687f'),
  creamCanada: chroma('#f5c25d'),
  grannySmith: chroma('#9cdd96'),
  lilacBlush: chroma('#a97ace'),
  text: chroma('#000').alpha(0.87),
  viking: chroma('#5cc9ee'),
}

type JSColors = typeof js
type CSSColors = { [c in keyof JSColors]: string }

export const css: CSSColors = R.map(R.invoker(0, 'css'), js)
