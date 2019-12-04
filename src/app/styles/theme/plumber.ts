import _ from 'lodash'
import { css } from 'styled-components'
import { stripUnit } from 'polished'

interface GetPlumberOpts {
  baseline: Baseline
  fontSize?: number
  gridHeight?: string
  leadingBottom?: number
  leadingTop?: number
  lineHeight?: number
  useBaselineOrigin?: boolean
}

interface PlumberBoxOpts {
  border?: readonly [string, string]
  gridHeight?: string
  margin?: readonly [number, number]
  padding?: readonly [number, number]
}

enum Baseline {
  GuardianEgyptian = 0.21,
  GuardianSans = 0.21,
  PragmataPro = 0.128,
}

const round = _.partial(_.round, _.partial.placeholder, 3)

const getValueAndUnit = _.partial(stripUnit, _.partial.placeholder, true)

const getBaselineCorrection = ({ baseline, fontSize, lineHeight }: { baseline: number, fontSize: number, lineHeight: number }) => {
  const baselineFromBottom = ((lineHeight - fontSize) / 2) + (fontSize * baseline)
  const correctedBaseline = round(baselineFromBottom)
  const baselineDifference = correctedBaseline - baselineFromBottom

  return {
    baselineDifference,
    correctedBaseline,
  }
}

const getPlumber = ({
  baseline: B,
  fontSize: FONT_SIZE = 2,
  gridHeight: GRID_HEIGHT = '1rem',
  leadingBottom: LEADING_BOTTOM = 0,
  leadingTop: LEADING_TOP = 0,
  lineHeight: LINE_HEIGHT = 3,
  useBaselineOrigin: USE_BASELINE_ORIGIN = false,
}: GetPlumberOpts) => {
  function plumber({
    baseline = B,
    fontSize = FONT_SIZE,
    gridHeight = GRID_HEIGHT,
    leadingBottom = LEADING_BOTTOM,
    leadingTop = LEADING_TOP,
    lineHeight = LINE_HEIGHT,
    useBaselineOrigin = USE_BASELINE_ORIGIN,
  } = {}) {
    const [gridHeightValue, gridHeightUnit] = getValueAndUnit(gridHeight)

    const { baselineDifference, correctedBaseline } = getBaselineCorrection({ baseline, fontSize, lineHeight })

    if (useBaselineOrigin) {
      leadingTop -= lineHeight - correctedBaseline
      leadingBottom -= correctedBaseline
    }

    const shift = baselineDifference < 0 ? 0 : 1

    fontSize = round(fontSize * gridHeightValue)
    const marginTop = round((leadingTop - shift) * gridHeightValue)
    const paddingTop = round((shift - baselineDifference) * gridHeightValue)
    const paddingBottom = round((1 - shift + baselineDifference) * gridHeightValue)
    const marginBottom = round((leadingBottom + shift - 1) * gridHeightValue)

    return css`
      font-size: ${ fontSize }${ gridHeightUnit };
      line-height: ${ lineHeight }${ gridHeightUnit };
      margin-bottom: ${ marginBottom }${ gridHeightUnit };
      margin-top: ${ marginTop }${ gridHeightUnit };
      padding-bottom: ${ paddingBottom }${ gridHeightUnit };
      padding-top: ${ paddingTop }${ gridHeightUnit };
    `
  }

  plumber.box = function({
    border = ['0px', '0px'],
    gridHeight = GRID_HEIGHT,
    margin = [0, 0],
    padding = [0, 0],
  }: PlumberBoxOpts) {
    const [gridHeightValue, gridHeightUnit] = getValueAndUnit(gridHeight)

    const [marginTop, marginBottom] = margin.map(m => round(m * gridHeightValue))
    const [paddingTop, paddingBottom] = padding.map(p => round(p * gridHeightValue))
    const [borderTop, borderBottom] = border

    return css`
      margin-bottom: ${ marginBottom }${ gridHeightUnit };
      margin-top: ${ marginTop }${ gridHeightUnit };
      padding-bottom: calc(${ paddingBottom }${ gridHeightUnit } - ${ borderBottom });
      padding-top: calc(${ paddingTop }${ gridHeightUnit } - ${ borderTop });
    `
  }

  return plumber
}

export const primary = getPlumber({ baseline: Baseline.GuardianSans })
export const accent = getPlumber({ baseline: Baseline.GuardianEgyptian })
export const mono = getPlumber({ baseline: Baseline.PragmataPro })
