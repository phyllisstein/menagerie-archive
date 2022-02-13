import styled from '@emotion/styled'
import { ReactElement, useEffect, useRef, useState } from 'react'
import { animated, useSpring } from 'react-spring'

const InferiorBase = styled(animated.span)`
  padding: 0 1ex;
  color: ${ ({ theme }) => theme.palette.css.red400 };
`

interface InferiorProps {
  children: string
}

export function Inferior ({ children }: InferiorProps): ReactElement {
  const ref = useRef(null)

  return <InferiorBase ref={ ref }>{ children }</InferiorBase>
}
