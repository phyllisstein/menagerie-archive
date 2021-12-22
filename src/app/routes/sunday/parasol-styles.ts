import styled from 'styled-components'

export const Root = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;

    perspective: 1000px;
`

export const SVG = styled.svg`
    position: absolute;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    background: transparent;
    transform-style: preserve-3d;
`
