import styled from 'styled-components'

interface StyledButtonProps {
  themeColor?: string
}

export const Root = styled.button<StyledButtonProps>`
  ${ ({ theme }) => theme.animation({ properties: ['background-color'] }) }

  border-radius: 5px;
  border: none;
  box-shadow: inset 0 -3px 0 0 rgba(0, 0, 0, 0.15);
  background-color: ${ ({ theme, themeColor }) => theme.palette.css[themeColor] };
  color: ${ ({ theme, themeColor }) => theme.palette.js[themeColor].luminance() >= 0.5 ? theme.palette.css.black : theme.palette.css.white };
  cursor: pointer;
  display: block;
  font-size: 0.8rem;
  height: 2rem;
  line-height: calc(2rem - 3px);
  outline: 0;
  padding: 0 0.85rem;
  text-align: center;

  &:hover {
    background-color: ${ ({ theme, themeColor }) => theme.palette.js[themeColor].set('hsl.h', '+15').darken(1).css() };
    outline: 0;
  }
`
