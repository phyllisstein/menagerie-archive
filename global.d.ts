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
  import { ReactSVGElement } from 'react'
  const s: ReactSVGElement
  export default s
}

type OneOrMore<T> = T | T[]
