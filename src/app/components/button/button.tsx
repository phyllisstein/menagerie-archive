import { Root } from './button-styles'

export const Button = ({ children, color = 'chartreuse', ...props }) => {
  return (
    <Root { ...props } $color={ color }>
      { children }
    </Root>
  )
}
