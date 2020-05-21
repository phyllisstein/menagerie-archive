import { modularScale, stripUnit } from 'polished'

export const css = (step = 0) => modularScale(step, '1rem', 'minorThird')

export const unitless = step => stripUnit(css(step))
