import DeepWeakMap from 'deep-weak-map'
import mem from 'mem'
import R from 'ramda'
import { useMemo, useRef } from 'react'

export const useMem = cb => {
  const cache = useRef(new DeepWeakMap())
  return useMemo(mem(cb, { cache: cache.current, cacheKey: R.identity }), [])
}
