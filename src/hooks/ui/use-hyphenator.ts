/* global Hyphenopoly:false */

import { canUseDOM } from 'exenv'
import pWaitFor from 'p-wait-for'
import R from 'ramda'
import { useEffect } from 'react'

export const useHyphenator = targetRef => {
  useEffect(() => {
    const ref = targetRef?.current
    if (!ref) return

    const hyphenate = async () => {
      if (!canUseDOM) {
        return await Promise.resolve()
      }

      await pWaitFor(() => {
        return (
          typeof Hyphenopoly !== 'undefined' &&
          typeof Hyphenopoly.hyphenators !== 'undefined' &&
          typeof Hyphenopoly.hyphenators.HTML !== 'undefined'
        )
      })

      let hyphenator

      if (typeof targetRef.current === 'string') {
        hyphenator = await Hyphenopoly.hyphenators['en-us']
      }

      if (targetRef.current instanceof HTMLElement) {
        hyphenator = await Hyphenopoly.hyphenators.HTML
      }

      hyphenator(targetRef.current, '.__default')
    }

    Promise.resolve()
      .then(async () => {
        return await hyphenate()
      })
      .catch(err => {
        throw err
      })
  }, [targetRef])
}
