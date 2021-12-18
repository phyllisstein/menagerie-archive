import { forwardRef, FunctionComponent, ReactHTML, Ref } from 'react'
import styled from 'styled-components'

import { useHyphenator } from 'app/hooks/ui'

const BaseP = styled.p<{ $indent?: boolean }>`
    ${ ({ theme }) => theme.typeface.primary({ fontSize: 4 }) }

    text-indent: ${ ({ $indent, theme }) =>
        $indent ? theme.measures.typography.textIndent : '0' };

    & + & {
        text-indent: ${ ({ theme }) => theme.measures.typography.textIndent };
    }
`

type Graf = ReactHTML['p']

interface GrafProps extends Graf {
    indent?: boolean
    ref?: Ref<HTMLParagraphElement>
}

export const P: FunctionComponent<GrafProps> = forwardRef<
    HTMLParagraphElement,
    GrafProps
>(function P ({ children, indent, ...props }, ref) {
    useHyphenator(ref)

    return (
        <BaseP { ...props } ref={ ref } $indent={ indent }>
            { children }
        </BaseP>
    )
})
