import styled from 'styled-components'

export const Step = styled.div`
    ${ ({ theme }) => theme.animation({ properties: 'opacity' }) }

    position: relative;

    width: 50rem;
    padding: 2.5rem;

    opacity: ${ ({ active }) => active ? '1' : '0.3' };
`
