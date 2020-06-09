import { HammerInput, Tap } from 'hammerjs'
import { useHammer } from './use-hammer'

type TapCallback = (ev: HammerInput) => void

export const useTap = (handler: TapCallback): void => {
  const mc = useHammer()
  mc.add(new Tap())
  mc.on('tap', handler)
}
