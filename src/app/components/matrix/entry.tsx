import { DotIcon, Root } from './entry-styles'
import {
  faCircle,
  faCircleArrowDown,
  faCircleArrowDownLeft,
  faCircleArrowDownRight,
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleArrowUp,
  faCircleArrowUpLeft,
  faCircleArrowUpRight,
} from '@fortawesome/pro-solid-svg-icons'
import { FunctionComponent, PropsWithChildren, ReactElement } from 'react'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
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
  let icon = faCircle

  switch (dot) {
    case DotPosition.Bottom:
      icon = faCircleArrowUp
      break
    case DotPosition.BottomLeft:
      icon = faCircleArrowUpRight
      break
    case DotPosition.BottomRight:
      icon = faCircleArrowUpLeft
      break
    case DotPosition.Left:
      icon = faCircleArrowRight
      break
    case DotPosition.Right:
      icon = faCircleArrowLeft
      break
    case DotPosition.Top:
      icon = faCircleArrowDown
      break
    case DotPosition.TopLeft:
      icon = faCircleArrowDownRight
      break
    case DotPosition.TopRight:
      icon = faCircleArrowDownLeft
      break
  }

  return (
    <Root { ...rest } $position={ dot }>
      { dot != null && <DotIcon icon={ icon } style={{ position: 'absolute' }} /> }
      { children }
    </Root>
  )
}

Entry.Text = EntryText
Entry.DotPosition = DotPosition
