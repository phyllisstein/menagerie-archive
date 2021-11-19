import DeepWeakMap from 'deep-weak-map'
import mem from 'mem'
import * as R from 'ramda'
import { useMemo, useRef } from 'react'

type Callback = (...args: unknown[]) => unknown

export const useMem = (cb: Callback): unknown => {
  const cache = useRef(new DeepWeakMap())
  return useMemo(
    () => mem(cb, { cache: cache.current, cacheKey: R.identity }),
    [],
  )
}
