import { forwardRef, FunctionComponent, ReactHTML } from 'react'
import styled from 'styled-components'
import { useHyphenator } from 'app/hooks/ui'

const BaseP = styled.p`
  ${ ({ theme }) => theme.typeface.primary({ fontSize: 4 }) }

  text-indent: 0;

  & + & {
    text-indent: ${ ({ theme }) => theme.measures.typography.textIndent };
  }
`

type Graf = ReactHTML['p']

interface GrafProps extends Graf {}

export const P: FunctionComponent<GrafProps> = forwardRef<
HTMLParagraphElement,
GrafProps
>(function P ({ children, ...props }, ref) {
  useHyphenator(ref)

  return (
    <BaseP { ...props } ref={ ref }>
      { children }
    </BaseP>
  )
})
