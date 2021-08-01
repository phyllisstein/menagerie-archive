/* eslint-disable sort-imports */
declare module '*.jpg' {
  const f: string
  export default f
}

declare module '*.jpeg' {
  const f: string
  export default f
}

declare module '*.png' {
  const f: string
  export default f
}

declare module '*.svg' {
  import { ReactSVGFactory } from 'react'
  const s: ReactSVGFactory
  export default s
}

type OneOrMore<T> = T | T[]

declare module '@fortawesome/fontawesome-svg-core/import.macro' {
  import { IconName } from '@fortawesome/fontawesome-common-types'
  import { IconProp } from '@fortawesome/fontawesome-svg-core'
  
  export const solid: (name: IconName) => IconProp
  export const regular: (name: IconName) => IconProp
  export const light: (name: IconName) => IconProp
  export const thin: (name: IconName) => IconProp
  export const duotone: (name: IconName) => IconProp
  export const brands: (name: IconName) => IconProp
}