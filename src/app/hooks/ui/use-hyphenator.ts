/* global Hyphenopoly:false */

import { canUseDOM } from 'exenv'
import pWaitFor from 'p-wait-for'
import * as R from 'ramda'
import { useEffect } from 'react'

export const useHyphenator = targetRef => {
  useEffect(() => {
    const hyphenate = async () => {
      if (!canUseDOM) {
        return await Promise.resolve()
      }

      await pWaitFor(() => {
        return (
          R.has('hyphenators', Hyphenopoly) &&
          R.hasPath(['hyphenators', 'HTML'], Hyphenopoly)
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
