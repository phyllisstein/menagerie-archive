import { HammerManager, Manager } from 'hammerjs'
import { useLayoutEffect, useMemo } from 'react'
import { canUseDOM } from 'exenv'

export const useHammer = (target?: EventTarget): HammerManager => {
  const mc = useMemo(() => {
    if (!canUseDOM) {
      return new Manager()
    }

    const manager = new Manager(target ?? document.body, {
      enable: false,
    })

    return manager
  }, [canUseDOM])

  useLayoutEffect(() => {
    mc.set({ enable: true })
    return mc.destroy
  }, [mc])

  return mc
}
