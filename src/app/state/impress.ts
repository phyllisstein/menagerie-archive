import {atom, atomFamily, selectorFamily} from 'recoil'

export const animation = atomFamily({
  default: {
    position: {
      x: 0,
      y: 0,
      z: 0,
    },
    rotation: {
      x: 0,
      y: 0,
      z: 0,
    },
    scale: 1,
  },
  key: 'impress/animation',
})

export const shouldZoom = selectorFamily({
  key: 'impress/scale-up',
  get: step => ({get}) => {
    const {scale: currentScale} = get(animation(step))
    const {scale: previousScale} = get(animation(step - 1))
    return 1 / currentScale >= previousScale
  },
})

export const step = atom({
  key: 'impress/step',
  default: 1,
})
