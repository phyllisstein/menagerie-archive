import { createGlobalStyle } from 'styled-components'

const WEIGHT_MAP = {
  Black: 900,
  Bold: 700,
  Medium: 500,
  Regular: 400,
}

const fontFiles = import.meta.globEager('./*.woff2')

const styleString = Object.entries(fontFiles).reduce((acc, [fileName, fileImport]) => {
  const { groups } = fileName.match(/AdobeCleanSerif-(?<weight>.+?)(?<italic>It)?\.woff2/)

  const style = !!groups.italic
    ? 'italic'
    : 'normal'
  const weight = WEIGHT_MAP[groups.weight]

  return `${ acc }@font-face {
    font-family: 'Adobe Clean Serif';
    src: url('${ fileImport.default }') format('woff2');
    font-weight: ${ weight };
    font-style: ${ style };
    font-display: fallback;
  }`
}, '')

export const AdobeCleanSerif = createGlobalStyle`
  ${ styleString }
`
