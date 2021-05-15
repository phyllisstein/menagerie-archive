import styled from 'styled-components'

export const Root = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 500px;
  height: 500px;
  margin: 0;

  transform: translate(-50%, -50%);
  border: none;
`

export const Cube = styled.div`
  width: 100%;
  height: 100%;

  perspective: 2500px;
  backface-visibility: visible;
  perspective-origin: 150% 150%;
  transform-style: preserve-3d;
`

export const Face = styled.div`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 500px;

  color: white;
  font-size: 60px;
  text-align: center;

  border: none;
`

export const Front = styled(Face)`
  background: ${ ({ theme }) => theme.palette.js.gray700.alpha(0.75) .css() };
  transform: translateZ(250px);
`

export const Back = styled(Face)`
  background: ${ ({ theme }) => theme.palette.js.magenta500.alpha(0.75) .css() };
  transform: rotateY(180deg) translateZ(250px);
`

export const Right = styled(Face)`
  background: ${ ({ theme }) => theme.palette.js.red500.alpha(0.75) .css() };
  transform: rotateY(90deg) translateZ(250px);
`

export const Left = styled(Face)`
  background: ${ ({ theme }) => theme.palette.js.blue500.alpha(0.75) .css() };
  transform: rotateY(-90deg) translateZ(250px);
`

export const Top = styled(Face)`
  background: ${ ({ theme }) => theme.palette.js.yellow500.alpha(0.75) .css() };
  transform: rotateX(90deg) translateZ(250px);
`

export const Bottom = styled(Face)`
  background: ${ ({ theme }) => theme.palette.js.purple500.alpha(0.75) .css() };
  transform: rotateX(-90deg) translateZ(250px);
`
