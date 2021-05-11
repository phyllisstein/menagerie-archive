import type { ReactSVGElement } from 'react'

declare module '*.jpg' {
  const f: string
  export default f
}

declare module '*.png' {
  const f: string
  export default f
}

declare module '*.svg' {
  const s: ReactSVGElement
  export default s
}