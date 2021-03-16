import { useEffect, useRef } from 'react'
import { Manager } from 'hammerjs'

export const useHammer = target => {
    const mc = useRef(
        new Manager(target ?? document.body, {
            recognizers: [],
        }),
    )

    useEffect(() => {
        const mcRef = mc.current
        mcRef.set({ enable: true })

        return () => mcRef.destroy()
    }, [''])

    return mc.current
}
