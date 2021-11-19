import { createGlobalStyle } from 'styled-components'

const WEIGHT_MAP = {
  Bold: 700,
  Light: 300,
  Roman: 400,
  SemiBold: 600,
}

const fontFiles = import.meta.globEager('./*.woff2')

const styleString = Object.entries(fontFiles).reduce((acc, [fileName, fileImport]) => {
  const { groups } = fileName.match(/MillerDisplay-(?<weight>.+?)(?<italic>Italic)?\.woff2/)

  const style = !!groups.italic
    ? 'italic'
    : 'normal'
  const weight = WEIGHT_MAP[groups.weight]

  return `${ acc }@font-face {
    font-family: 'Adobe Clean';
    src: url('${ fileImport.default }') format('woff2');
    font-weight: ${ weight };
    font-style: ${ style };
    font-display: fallback;
  }`
}, '')

export const MillerDisplay = createGlobalStyle`
  ${ styleString }
`
