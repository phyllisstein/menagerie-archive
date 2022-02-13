import styled from '@emotion/styled'
import { FunctionComponent, Ref, useRef } from 'react'

import { useHyphenator } from 'hooks/ui'

const BaseP = styled.p<{ $indent?: boolean }>`
  ${ ({ theme }) => theme.typeface.primary({ fontSize: 8, lineHeight: 9 }) }

  text-indent: ${ ({ $indent, theme }) =>
    $indent ? theme.measures.typography.textIndent : '0' };
  hyphens: manual;

  & + & {
    text-indent: ${ ({ theme }) => theme.measures.typography.textIndent };
  }
`

type Graf = JSX.IntrinsicElements['p']

interface GrafProps extends Graf {
  indent?: boolean
  ref?: Ref<HTMLParagraphElement>
}

export const P: FunctionComponent<GrafProps> = ({
  children,
  indent,
  ...props
}) => {
  const grafRef = useRef<HTMLParagraphElement>()
  useHyphenator(grafRef)

  return (
    <BaseP { ...props } ref={ grafRef } $indent={ indent }>
      { children }
    </BaseP>
  )
}
