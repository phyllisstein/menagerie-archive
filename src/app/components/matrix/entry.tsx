import { FunctionComponent, PropsWithChildren, ReactElement } from 'react'
import { EntryText } from './entry-text'
import { Root } from './entry-styles'

interface Props extends FunctionComponent {}

export const Entry = ({
  children,
  ...rest
}: PropsWithChildren<Props>): ReactElement => {
  return <Root { ...rest }>{ children }</Root>
}

Entry.Text = EntryText
