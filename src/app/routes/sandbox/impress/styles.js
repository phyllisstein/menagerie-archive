import { Impress as BaseImpress, Step as BaseStep } from 'app/components'
import styled from 'styled-components'
import { Face as BaseFace } from './impress-styles'

export const Face = styled(BaseFace)`
  width: 100%;
  height: 100%;

  background: ${ ({ $background, theme }) => theme.palette.css[$background] };
`

export const Impress = styled(BaseImpress)`
  perspective-origin: 250px 250px;
`

export const Step = styled(BaseStep)`
  width: 250px;
  height: 250px;

  opacity: 0.333;
`
