import { DIRECTION_HORIZONTAL, Input, Swipe } from 'hammerjs'
import { useEffect } from 'react'
import { useHammer } from './use-hammer'

type SwipeCallback = (ev: Input) => void

export const useSwipe = (handler: SwipeCallback): void => {
  const mc = useHammer()

  mc.add(new Swipe({ direction: DIRECTION_HORIZONTAL }))

  useEffect(() => {
    mc.on('swipe', handler)

    return () => mc.off('swipe', handler)
  }, [handler])
}
