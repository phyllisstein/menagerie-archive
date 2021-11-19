import { createGlobalStyle } from 'styled-components'

const WEIGHT_MAP = {
  Black: 900,
  Bold: 700,
  ExtraBold: 800,
  Light: 200,
  Medium: 500,
  Regular: 400,
  SemiLight: 300,
}

const STRETCH_MAP = {
  Cond: 'condensed',
  SemiCn: 'semi-condensed',
}

const fontFiles = import.meta.globEager('./*.woff2')

const styleString = Object.entries(fontFiles).reduce((acc, [fileName, fileImport]) => {
  const { groups } = fileName.match(/AdobeClean-(?<weight>.+?)(?<stretch>Cond|SemiCn)?(?<italic>It)?\.woff2/)

  const style = groups.italic === 'It'
    ? 'italic'
    : 'normal'
  const weight = WEIGHT_MAP[groups.weight]
  const stretch = STRETCH_MAP[groups.stretch] || 'normal'

  return `${ acc }@font-face {
    font-family: 'Adobe Clean';
    src: url('${ fileImport.default }') format('woff2');
    font-weight: ${ weight };
    font-style: ${ style };
    font-stretch: ${ stretch };
    font-display: fallback;
  }`
}, '')

export const AdobeClean = createGlobalStyle`
  ${ styleString }
`
