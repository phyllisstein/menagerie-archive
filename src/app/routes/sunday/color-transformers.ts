import { Color } from 'chroma-js'

const round = (n: number, d: number) => Math.round(n * 10 ** d) / 10 ** d
const roundTwo = (n: number) => round(n, 2)

export const toLCH = (c: Color) =>
  `lch(${ roundTwo(c.get('lch.l')) }% ${ roundTwo(c.get('lch.c')) } ${ roundTwo(
    c.get('lch.h'),
  ) }deg)`
