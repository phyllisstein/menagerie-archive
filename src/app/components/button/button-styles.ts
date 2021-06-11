import styled from 'styled-components'

export const Root = styled.button`
  display: block;
  padding: 1em;

  color: ${({ $color, theme }) =>
    theme.palette.js[`${$color}600`].luminance() >= 0.6
      ? theme.palette.css.gray800
      : theme.palette.css.gray100};
  text-align: center;

  background-color: ${({ $color, theme }) => theme.palette.css[`${$color}400`]};
  border: none;

  ${({ theme }) => theme.animation.css({ properties: ['background-color'] })}

  border-radius: 5px;
  outline: 0;
  box-shadow: inset 0 -3px 0 0 rgba(0, 0, 0, 0.15);
  cursor: pointer;

  &:hover {
    background-color: ${({ $color, theme }) =>
    theme.palette.css[`${$color}600`]};
    outline: 0;
  }
`
