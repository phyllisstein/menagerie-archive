import { atom, atomFamily, selectorFamily } from 'recoil'

export const animation = atomFamily({
    default: {
        position: {
            x: 0,
            y: 0,
            z: 0,
        },
        relative: false,
        rotation: {
            x: 0,
            y: 0,
            z: 0,
        },
        scale: 1,
    },
    key: 'impress:animation',
})

export const canvasMinMax = atom({
    default: {
        maxScale: 1,
        maxX: 0,
        maxY: 0,
        maxZ: 0,
        minScale: 1,
        minX: 0,
        minY: 0,
        minZ: 0,
    },
    key: 'impress:canvasMinMax',
})

export const currentAndPreviousAnimation = selectorFamily({
    get: step => ({ get }) => {
        const current = get(animation(step))
        const previous = get(animation(step - 1))
        return { current, previous }
    },
    key: 'impress:current-and-previous-animation',
    set: step => ({ get, set }, newValue) => {
        if (newValue.current != null) {
            set(animation(step), newValue.current)
        }

        if (newValue.previous != null) {
            set(animation(step - 1), newValue.previous)
        }
    },
})

export const overviewScale = atom({
    default: 1,
    key: 'impress:overview-scale',
})

export const shouldZoom = selectorFamily({
    get: step => ({ get }) => {
        const { current, previous } = get(currentAndPreviousAnimation(step))
        return 1 / current.scale > previous.scale
    },
    key: 'impress:scale-up',
})

export const step = atom({
    default: 1,
    key: 'impress:step',
})
