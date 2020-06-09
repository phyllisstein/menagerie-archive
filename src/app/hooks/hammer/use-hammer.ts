import { HammerManager, Manager } from 'hammerjs'
import { useEffect, useRef } from 'react'

export const useHammer = (target?: EventTarget): HammerManager => {
  const mc = useRef(new Manager(target ?? document.body, {
    recognizers: [],
  }))

  useEffect(() => {
    mc.current.set({ enable: true })

    return () => mc.current.destroy()
  }, [''])

  return mc.current
}
