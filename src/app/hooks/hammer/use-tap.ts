import { Input, Tap } from 'hammerjs'
import { useEffect } from 'react'
import { useHammer } from './use-hammer'

type TapCallback = (ev: Input) => void

export const useTap = (handler: TapCallback): void => {
    const mc = useHammer()

    mc.add(new Tap())

    useEffect(() => {
        mc.on('tap', handler)

        return () => mc.off('tap', handler)
    }, [handler])
}
