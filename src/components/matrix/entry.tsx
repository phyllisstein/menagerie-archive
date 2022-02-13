import { faDotCircle } from '@fortawesome/pro-duotone-svg-icons/faDotCircle'
import { FunctionComponent, PropsWithChildren, ReactElement } from 'react'

import { DotIcon, Root } from './entry-styles'
import { EntryText } from './entry-text'

export enum DotPosition {
  Bottom,
  BottomLeft,
  BottomRight,
  Left,
  Right,
  Top,
  TopLeft,
  TopRight,
}

interface Props extends FunctionComponent {
  dot?: DotPosition
}

export const Entry = ({
  children,
  dot,
  ...rest
}: PropsWithChildren<Props>): ReactElement => {
  return (
    <Root { ...rest } $position={ dot }>
      { dot != null && (
        <DotIcon icon={ faDotCircle } style={{ position: 'absolute' }} />
      ) }
      { children }
    </Root>
  )
}
