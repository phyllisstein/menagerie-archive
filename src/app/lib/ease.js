import bezier from 'bezier-easing'

export const standardEase = bezier(0.4, 0, 0.2, 1)
export const decelerationEase = bezier(0, 0, 0.2, 0.1)
export const accelerationEase = bezier(0.4, 0, 1, 1)
export const sharpEase = bezier(0.4, 0, 0.6, 1)
export const swiftInOutEase = bezier(0.35, 0, 0.25, 1)
export const swiftOutEase = bezier(0.25, 0.8, 0.25, 1)
export const swiftInEase = bezier(0.55, 0, 0.55, 0.2)
