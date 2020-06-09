import { DIRECTION_LEFT, DIRECTION_RIGHT } from 'hammerjs'
import { Icon, Root } from './controls-styles'
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'
import React, { FunctionComponent, useMemo } from 'react'
import { useSwipe, useTap } from 'app/hooks/hammer'
import { Button } from '../button'
import { canUseDOM } from 'exenv'
import { useStep } from './use-step'

export const Controls: FunctionComponent = () => {
  const [, previous, next] = useStep()

  useSwipe(ev => {
    if (ev.direction === DIRECTION_LEFT) {
      previous()
    }

    if (ev.direction === DIRECTION_RIGHT) {
      next()
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

  useTap(ev => {
    if (ev.center.x <= leftQuarterEnd) {
      previous()
    }

    if (ev.center.x >= rightQuarterStart) {
      next()
    }
  })

  return (
    <Root>
      <Button onClick={ previous }>
        <Icon path={ mdiChevronLeft } />
      </Button>
      <Button onClick={ next }>
        <Icon path={ mdiChevronRight } />
      </Button>
    </Root>
  )
}
