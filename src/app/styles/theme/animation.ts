import { css } from 'styled-components'
import { StandardPropertiesHyphen } from 'csstype'

export enum AnimationCurve {
  Acceleration = 'acceleration',
  Deceleration = 'deceleration',
  Sharp = 'sharp',
  Standard = 'standard',
}

export enum AnimationDuration {
  Complex = 'complex',
  Elevation = 'elevation',
  Entering = 'entering',
  Exiting = 'exiting',
}

interface AnimationOpts {
  curve?: AnimationCurve
  duration?: AnimationDuration
  property?: keyof StandardPropertiesHyphen | 'all'
}

export function animation({ curve = AnimationCurve.Standard, duration = AnimationDuration.Entering, property = 'all' }: AnimationOpts = {}) {
  const durationMS = animation.duration[duration]
  const curveBezier = animation.curve[curve]

  return css`
    transition: ${ property } ${ durationMS }ms ${ curveBezier };
  `
}

// Q.v. <https://github.com/angular/components/blob/master/src/material/core/animation/animation.ts#L11-L14>.
animation.duration = {
  complex: 375,
  elevation: 280,
  entering: 225,
  exiting: 195,
}

// Q.v. <https://github.com/angular/components/blob/master/src/material/core/animation/animation.ts#L20-L22>.
animation.curve = {
  acceleration: 'cubic-bezier(0.4, 0, 1, 1)',
  deceleration: 'cubic-bezier(0, 0, 0.2, 1)',
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
}
