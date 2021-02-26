import { getValueAndUnit, modularScale } from 'polished'
import R from 'ramda'

export const css = (step = 0) => modularScale(step, '1rem', 'minorThird')

export const unitless = step => R.head(getValueAndUnit(css(step)))
