import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { Proscenium, Root, StageRoot } from './stage-styles'
import type { ReactElement, ReactNode } from 'react'
import { useEffect, useRef } from 'react'
import { useScenes } from './use-scenes'

interface Props {
  children: ReactNode
  step: number
}

export function Stage({ children, step = 0 }: Props): ReactElement {
  const rootEl = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = rootEl.current
    if (!el) return
    disableBodyScroll(el)

    return () => enableBodyScroll(el)
  }, [rootEl])

  const [transformedChildren, parentTransforms] = useScenes(children)
  const currentTransform = parentTransforms[step]

  return (
    <Root ref={ rootEl }>
      <Proscenium>
        <StageRoot style={{ transform: currentTransform }}>
          { transformedChildren }
        </StageRoot>
      </Proscenium>
    </Root>
  )
}
