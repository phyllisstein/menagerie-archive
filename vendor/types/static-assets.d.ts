import { ComponentType } from 'react'

declare module '*.css' {
  type CSSString = string
  export default CSSString
}

declare module '*.svg' {
  export default ComponentType
}
