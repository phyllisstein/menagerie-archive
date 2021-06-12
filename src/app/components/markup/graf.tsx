import { useHyphenator } from 'app/hooks/ui'
import { ReactElement, ReactNode, useRef } from 'react'
import styled from 'styled-components'

const BaseP = styled.p`
  ${ ({ theme }) => theme.typeface.primary({ fontSize: 4 }) }

  text-indent: 0;

  & + & {
    text-indent: ${ ({ theme }) => theme.measures.typography.textIndent };
  }
`

interface GrafProps {
  children: ReactNode
}

export function Graf ({ children, ...props }: GrafProps): ReactElement {
  const ref = useRef(null)
  useHyphenator(ref)

  return (
    <BaseP { ...props } ref={ ref }>
      { children }
    </BaseP>
  )
}
