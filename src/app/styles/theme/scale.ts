import { modularScale, stripUnit } from 'polished'

const FIRST_STEP = 3

export const css = (step = 0) => modularScale(step + FIRST_STEP, '1rem', 'minorThird')

export const unitless = (step: number) => stripUnit(css(step))
