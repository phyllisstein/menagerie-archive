import { useMemo, useRef } from 'react'
import DeepWeakMap from 'deep-weak-map'
import mem from 'mem'
import R from 'ramda'

type Callback = (...args: unknown[]) => unknown

export const useMem = (cb: Callback): unknown => {
  const cache = useRef(new DeepWeakMap())
  return useMemo(mem(cb, { cache: cache.current, cacheKey: R.identity }), [])
}
