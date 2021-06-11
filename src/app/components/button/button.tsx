import { Root } from './button-styles'

export const Button = ({ children, color = 'indigo', ...props }) => {
  return (
    <Root {...props} $color={color}>
      {children}
    </Root>
  )
}
