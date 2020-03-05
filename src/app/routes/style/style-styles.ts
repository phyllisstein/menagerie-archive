import { StepProps } from 'app/components/impress'
import styled from 'styled-components'

export const Step = styled.div<StepProps>`
  ${ ({ theme }) => theme.animation({ properties: 'opacity' }) }

  position: relative;

  width: 50rem;
  padding: 2.5rem;

  opacity: ${ ({ active }) => active ? '1' : '0.3' };
`
