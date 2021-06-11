import { DIRECTION_LEFT, DIRECTION_RIGHT } from 'hammerjs'
import {
  faChevronsLeft,
  faChevronsRight
} from '@fortawesome/pro-duotone-svg-icons'
import { Icon, Root } from './controls-styles'
import { useSwipe, useTap } from 'app/hooks/hammer'
import { Button } from '../button'
import { canUseDOM } from 'exenv'
import { useMemo } from 'react'
import { useStep } from 'app/hooks/impress'

export const Controls = (props = {}) => {
  const [, previous, next] = useStep()

  useSwipe(ev => {
    if (ev.direction === DIRECTION_LEFT) {
      next()
    }

    if (ev.direction === DIRECTION_RIGHT) {
      previous()
    }
  })

  const leftQuarterEnd = useMemo(() => {
    if (!canUseDOM) {
      return 0
    }

    return Math.round(window.innerWidth / 4)
  }, [canUseDOM])

  const rightQuarterStart = useMemo(() => {
    if (!canUseDOM) {
      return Infinity
    }

    return Math.round(window.innerWidth - window.innerWidth / 4)
  }, [canUseDOM])

  return (
    <Root {...props}>
      <Button onClick={previous}>
        <Icon icon={faChevronsLeft} />
      </Button>
      <Button onClick={next}>
        <Icon icon={faChevronsRight} />
      </Button>
    </Root>
  )
}
