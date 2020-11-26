import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const Icon = styled(FontAwesomeIcon)`
    font-size: ${ ({ theme }) => theme.scale.css(3) };
`

export const Root = styled.div`
    align-items: center;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: fixed;
    right: 0;
`
