import type { CSSPalette } from 'app/styles/theme/palette'
import { FunctionComponent } from 'react'
import { Root } from './button-styles'

interface ButtonProps {
    className?: string
    color?: keyof CSSPalette
}

export const Button: FunctionComponent<ButtonProps> = ({ children, className, color = 'accent', ...props }) => {
    return (
        <Root className={ className } themeColor={ color } { ...props }>
            { children }
        </Root>
    )
}
