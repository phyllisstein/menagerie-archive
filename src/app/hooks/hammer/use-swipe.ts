import { DIRECTION_HORIZONTAL, HammerInput, Swipe } from 'hammerjs'
import { useHammer } from './use-hammer'

type SwipeCallback = (ev: HammerInput) => void

export const useSwipe = (handler: SwipeCallback): void => {
  const mc = useHammer()
  mc.add(new Swipe({ direction: DIRECTION_HORIZONTAL }))
  mc.on('swipe', handler)
}
