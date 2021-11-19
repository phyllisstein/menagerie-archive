import { createGlobalStyle } from 'styled-components'

const WEIGHT_MAP = {
  Bold: 700,
  ExtraBold: 800,
  Light: 200,
  Medium: 500,
  Regular: 400,
}

const fontFiles = import.meta.globEager('./*.woff2')

const styleString = Object.entries(fontFiles).reduce((acc, [fileName, fileImport]) => {
  const { groups } = fileName.match(/Capita-(?<weight>.+?)(?<italic>Italic)?\.woff2/)

  const style = !!groups.italic
    ? 'italic'
    : 'normal'
  const weight = WEIGHT_MAP[groups.weight]

  return `${ acc }@font-face {
    font-family: 'Capita';
    src: url('${ fileImport.default }') format('woff2');
    font-weight: ${ weight };
    font-style: ${ style };
    font-display: fallback;
  }`
}, '')

export const Capita = createGlobalStyle`
  ${ styleString }
`
