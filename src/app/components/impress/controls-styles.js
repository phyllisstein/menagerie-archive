import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const Icon = styled(FontAwesomeIcon)`
  font-size: ${ ({ theme }) => theme.scale.css() };
`

export const Root = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
`
