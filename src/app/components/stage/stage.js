import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { useEffect, useRef } from 'react'
import { Proscenium, Root, StageRoot } from './stage-styles'
import { useScenes } from './use-scenes'

export function Stage({ children, step = 0 }) {
  const rootEl = useRef(null)

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
