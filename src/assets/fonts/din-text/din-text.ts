import { createGlobalStyle } from 'styled-components'

const WEIGHT_MAP = {
  Black: 800,
  Bold: 700,
  ExtraBlack: 900,
  ExtraThin: 100,
  Light: 300,
  Medium: 500,
  Regular: 400,
  Thin: 200,
}

const fontFiles = import.meta.globEager('./*.woff2')

const styleString = Object.entries(fontFiles).reduce((acc, [fileName, fileImport]) => {
  const { groups } = fileName.match(/DINTextPro-(?<weight>.+?)(?<italic>Italic)?\.woff2/)

  const style = !!groups.italic
    ? 'italic'
    : 'normal'
  const weight = WEIGHT_MAP[groups.weight]

  return `${ acc }@font-face {
    font-family: 'DIN Text';
    src: url('${ fileImport.default }') format('woff2');
    font-weight: ${ weight };
    font-style: ${ style };
    font-display: fallback;
  }`
}, '')

export const DINText = createGlobalStyle`
  ${ styleString }
`
