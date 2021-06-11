import { Impress as BaseImpress, Step as BaseStep } from 'app/components'
import { Face as BaseFace } from './impress-styles'
import { JS } from 'app/styles/theme/palette'
import styled from 'styled-components'

interface FaceProps {
  $background: keyof JS
}

export const Face = styled(BaseFace)<FaceProps>`
  width: 100%;
  height: 100%;

  background: ${ ({ $background, theme }) => theme.palette.css[$background] };
`

export const Impress = styled(BaseImpress)`
  perspective-origin: 250px 250px;
`

export const Step = styled(BaseStep)`
  height: 250px;
  width: 250px;

  opacity: 0.333;
`
