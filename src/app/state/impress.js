import { atom } from 'recoil'

export const animation = step => atom({
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
    key: `impress/animation/${ step }`,
})
